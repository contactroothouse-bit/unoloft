"use client";

import { useEffect, useState } from "react";
import type { Home } from "@/components/unoloft/types";

type ContactSectionProps = {
  selectedHome: Home;
};

type FormState = {
  name: string;
  phone: string;
  profession: "student" | "working";
  preferredLocation: Home;
  note: string;
};

const INITIAL_FORM: FormState = {
  name: "",
  phone: "",
  profession: "student",
  preferredLocation: "aster",
  note: "",
};

export default function ContactSection({ selectedHome }: ContactSectionProps) {
  const [form, setForm] = useState<FormState>({
    ...INITIAL_FORM,
    preferredLocation: selectedHome,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [statusText, setStatusText] = useState("");

  useEffect(() => {
    setForm((previous) => ({ ...previous, preferredLocation: selectedHome }));
  }, [selectedHome]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setStatusText("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message ?? "Something went wrong.");
      }

      setStatus("success");
      setStatusText(
        "Your response has been sent successfully. You will receive a call or message very soon.",
      );
      setForm({
        ...INITIAL_FORM,
        preferredLocation: selectedHome,
      });
    } catch (error) {
      setStatus("error");
      setStatusText(
        error instanceof Error
          ? error.message
          : "Unable to send your response right now.",
      );
    }
  }

  return (
    <section id="contact">
      <div className="con-dot" />
      <div className="con-cen rv">
        <div className="s-ey">Contact Us</div>
        <h2 className="s-t">
          Ready to <em>Move In?</em>
        </h2>
        <p className="s-sub">
          Reach out directly to our alumni team for booking, visits, and
          availability.
        </p>

        <div className="con-cards">
          <a href="tel:+917043306301" className="con-cd">
            <div className="cd-ic cd-ph">
              <i className="fa-solid fa-phone" />
            </div>
            <h3>Nilesh Patel</h3>
            <p>Nirma Alumni</p>
            <div className="cd-num">7043306301</div>
          </a>

          <a href="tel:+919909901291" className="con-cd">
            <div className="cd-ic cd-ph">
              <i className="fa-solid fa-phone" />
            </div>
            <h3>Dhwanit Pansuriya</h3>
            <p>Nirma Alumni</p>
            <div className="cd-num">9909901291</div>
          </a>
        </div>

        <form className="con-form" onSubmit={onSubmit}>
          <div className="con-form-grid">
            <label className="con-field">
              <span>Full Name</span>
              <input
                type="text"
                value={form.name}
                onChange={(event) =>
                  setForm((previous) => ({
                    ...previous,
                    name: event.target.value,
                  }))
                }
                placeholder="Enter your full name"
                required
              />
            </label>

            <label className="con-field">
              <span>Phone Number</span>
              <input
                type="tel"
                value={form.phone}
                onChange={(event) =>
                  setForm((previous) => ({
                    ...previous,
                    phone: event.target.value,
                  }))
                }
                placeholder="Enter your phone number"
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit mobile number."
                required
              />
            </label>

            <label className="con-field">
              <span>Profession</span>
              <select
                value={form.profession}
                onChange={(event) =>
                  setForm((previous) => ({
                    ...previous,
                    profession: event.target.value as FormState["profession"],
                  }))
                }
              >
                <option value="student">Student</option>
                <option value="working">Working Professional</option>
              </select>
            </label>

            <label className="con-field">
              <span>Location Preference</span>
              <select
                value={form.preferredLocation}
                onChange={(event) =>
                  setForm((previous) => ({
                    ...previous,
                    preferredLocation: event.target.value as Home,
                  }))
                }
              >
                <option value="aster">Aster</option>
                <option value="iris">Iris</option>
              </select>
            </label>
          </div>

          <label className="con-field con-field-full">
            <span>Additional Note (Optional)</span>
            <textarea
              rows={4}
              value={form.note}
              onChange={(event) =>
                setForm((previous) => ({
                  ...previous,
                  note: event.target.value,
                }))
              }
              placeholder="Share your move-in date, budget, or any requirement..."
            />
          </label>

          <button
            type="submit"
            className="btn-ora con-submit"
            disabled={status === "loading"}
          >
            <i className="fa-solid fa-paper-plane" />
            {status === "loading" ? "Submitting..." : "Send Response"}
          </button>

          {statusText ? (
            <p className={`con-msg ${status === "success" ? "ok" : "err"}`}>
              {statusText}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
