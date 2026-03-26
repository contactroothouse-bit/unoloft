import { NextResponse } from "next/server";
import { google } from "googleapis";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  phone?: string;
  profession?: "student" | "working";
  preferredLocation?: "aster" | "iris";
  note?: string;
};

function getEnv(name: string) {
  const value = process.env[name];
  return value?.trim();
}

type LeadRecord = {
  name: string;
  phone: string;
  profession: string;
  location: string;
  note: string;
  source: string;
  timestamp: string;
};

async function appendLeadViaSheetsApi(lead: LeadRecord) {
  const clientEmail = getEnv("GOOGLE_SERVICE_ACCOUNT_EMAIL");
  const privateKey = getEnv("GOOGLE_PRIVATE_KEY")?.replace(/\\n/g, "\n");
  const spreadsheetId = getEnv("GOOGLE_SHEETS_SPREADSHEET_ID");
  const sheetName = getEnv("GOOGLE_SHEETS_SHEET_NAME") || "Sheet1";

  if (!clientEmail || !privateKey || !spreadsheetId) {
    return false;
  }

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${sheetName}!A:G`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [
        [
          lead.timestamp,
          lead.name,
          lead.phone,
          lead.profession,
          lead.location,
          lead.note,
          lead.source,
        ],
      ],
    },
  });

  return true;
}

async function appendLeadViaAppsScript(lead: LeadRecord) {
  const appsScriptUrl = getEnv("GOOGLE_APPS_SCRIPT_URL");

  if (!appsScriptUrl) {
    return false;
  }

  const jsonPayload = {
    name: lead.name,
    phone: lead.phone,
    profession: lead.profession,
    preferredLocation: lead.location,
    location: lead.location,
    note: lead.note,
    source: lead.source,
    timestamp: lead.timestamp,
  };

  const jsonResponse = await fetch(appsScriptUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonPayload),
  });

  const jsonResponseText = await jsonResponse.text();

  if (jsonResponse.ok) {
    return true;
  }

  const formPayload = new URLSearchParams({
    name: lead.name,
    phone: lead.phone,
    profession: lead.profession,
    preferredLocation: lead.location,
    location: lead.location,
    note: lead.note,
    source: lead.source,
    timestamp: lead.timestamp,
  });

  const formResponse = await fetch(appsScriptUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: formPayload.toString(),
  });

  const formResponseText = await formResponse.text();

  if (!formResponse.ok) {
    throw new Error(
      "Apps Script request failed" +
        (jsonResponseText ? ` [json: ${jsonResponseText}]` : "") +
        (formResponseText ? ` [form: ${formResponseText}]` : "."),
    );
  }

  return true;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = body.name?.trim() ?? "";
    const phone = body.phone?.trim() ?? "";
    const profession = body.profession ?? "student";
    const preferredLocation = body.preferredLocation ?? "aster";
    const note = body.note?.trim() ?? "";

    if (!name || !phone) {
      return NextResponse.json(
        { message: "Name and phone number are required." },
        { status: 400 },
      );
    }

    if (!/^\d{10}$/.test(phone)) {
      return NextResponse.json(
        { message: "Please enter a valid 10-digit mobile number." },
        { status: 400 },
      );
    }

    const formattedProfession =
      profession === "student" ? "Student" : "Working Professional";
    const formattedLocation = preferredLocation === "aster" ? "Aster" : "Iris";
    const timestamp = new Date().toLocaleString("en-IN");
    const lead: LeadRecord = {
      name,
      phone,
      profession: formattedProfession,
      location: formattedLocation,
      note,
      source: "Website",
      timestamp,
    };

    let storedInSheet = false;
    let sheetError = "";

    try {
      storedInSheet = await appendLeadViaSheetsApi(lead);
    } catch (error) {
      sheetError =
        error instanceof Error ? error.message : "Google Sheets API failed.";
    }

    if (!storedInSheet) {
      try {
        storedInSheet = await appendLeadViaAppsScript(lead);
      } catch (error) {
        sheetError =
          error instanceof Error ? error.message : "Google Apps Script failed.";
      }
    }

    if (!storedInSheet) {
      return NextResponse.json(
        {
          message:
            "Unable to store this lead in Google Sheets. Configure either the Google Sheets API env vars or a working GOOGLE_APPS_SCRIPT_URL." +
            (sheetError ? ` (${sheetError})` : ""),
        },
        { status: 502 },
      );
    }

    const smtpHost = getEnv("SMTP_HOST");
    const smtpPort = getEnv("SMTP_PORT");
    const smtpUser = getEnv("SMTP_USER");
    const smtpPass = getEnv("SMTP_PASS");
    const smtpFrom = getEnv("SMTP_FROM") || smtpUser;
    const smtpTo = getEnv("SMTP_TO");

    if (smtpHost && smtpPort && smtpUser && smtpPass && smtpFrom && smtpTo) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: Number(smtpPort),
        secure: Number(smtpPort) === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: smtpFrom,
        to: smtpTo,
        subject: `New Lead: ${name} (${preferredLocation.toUpperCase()})`,
        text: `New lead details:

Name: ${name}
Phone: ${phone}
Profession: ${formattedProfession}
Location Preference: ${formattedLocation}
Note: ${note || "-"}
Source: Website
Timestamp: ${timestamp}
`,
      });
    }

    return NextResponse.json({
      message:
        "Your response has been sent successfully. You will receive a call or message very soon.",
    });
  } catch {
    return NextResponse.json(
      { message: "Invalid request payload." },
      { status: 400 },
    );
  }
}
