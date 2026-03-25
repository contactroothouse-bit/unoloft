import { NextResponse } from "next/server";

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

    const appsScriptUrl = getEnv("GOOGLE_APPS_SCRIPT_URL");

    if (!appsScriptUrl) {
      return NextResponse.json(
        {
          message:
            "Google Apps Script is not configured yet. Please set GOOGLE_APPS_SCRIPT_URL.",
        },
        { status: 500 },
      );
    }

    const response = await fetch(appsScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        profession: profession === "student" ? "Student" : "Working Professional",
        location: preferredLocation === "aster" ? "Aster" : "Iris",
        note,
        source: "Website",
      }),
    });

    const responseText = await response.text();

    if (!response.ok) {
      return NextResponse.json(
        {
          message:
            "Unable to submit your details right now. " +
            (responseText ? `(${responseText})` : ""),
        },
        { status: 502 },
      );
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
