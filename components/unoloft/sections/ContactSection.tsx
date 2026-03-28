"use client";

import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/components/unoloft/utils";
import type { Home } from "@/components/unoloft/types";

type ContactSectionProps = {
  selectedHome: Home;
};

type DropdownOption<T extends string> = {
  value: T;
  label: string;
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

const PROFESSION_OPTIONS: DropdownOption<FormState["profession"]>[] = [
  { value: "student", label: "Student" },
  { value: "working", label: "Working Professional" },
];

const LOCATION_OPTIONS: DropdownOption<Home>[] = [
  { value: "aster", label: "Aster" },
  { value: "iris", label: "Iris" },
];

function CustomDropdown<T extends string,>({
  value,
  options,
  onChange,
}: {
  value: T;
  options: DropdownOption<T>[];
  onChange: (value: T) => void;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listboxId = useId();
  const selectedOption =
    options.find((option) => option.value === value) ?? options[0];

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <div className={cn("con-select", open && "open")} ref={rootRef}>
      <button
        type="button"
        className="con-select-trigger"
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-controls={listboxId}
        onClick={() => setOpen((previous) => !previous)}
      >
        <span>{selectedOption?.label}</span>
        <i className="fa-solid fa-chevron-down" aria-hidden="true" />
      </button>

      <div
        className="con-select-menu"
        id={listboxId}
        role="listbox"
        aria-hidden={!open}
      >
        {options.map((option) => (
          <button
            key={option.value}
            type="button"
            className={cn(
              "con-select-option",
              option.value === value && "selected",
            )}
            onClick={() => {
              onChange(option.value);
              setOpen(false);
            }}
          >
            <span>{option.label}</span>
            {option.value === value ? (
              <i className="fa-solid fa-check" aria-hidden="true" />
            ) : null}
          </button>
        ))}
      </div>
    </div>
  );
}

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
              <CustomDropdown
                value={form.profession}
                options={PROFESSION_OPTIONS}
                onChange={(value) =>
                  setForm((previous) => ({
                    ...previous,
                    profession: value,
                  }))
                }
              />
            </label>

            <label className="con-field">
              <span>Location Preference</span>
              <CustomDropdown
                value={form.preferredLocation}
                options={LOCATION_OPTIONS}
                onChange={(value) =>
                  setForm((previous) => ({
                    ...previous,
                    preferredLocation: value,
                  }))
                }
              />
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
      </div>
    </section>
  );
}
