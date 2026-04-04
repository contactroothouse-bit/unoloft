import type { Metadata } from "next";
import JsonLd from "@/components/unoloft/JsonLd";
import LocalSeoLandingPage from "@/components/unoloft/LocalSeoLandingPage";
import {
  buildPageMetadata,
  getBreadcrumbSchema,
  getFaqSchema,
  getLodgingBusinessSchema,
} from "@/components/unoloft/seo";

const LANDING_FAQS = [
  {
    question: "Is Unoloft suitable for Nirma University students?",
    answer:
      "Yes. Unoloft is planned for student routines with AC study-friendly rooms, meals, WiFi, and a commute-friendly location near Nirma University.",
  },
  {
    question: "Do you provide quiet study space and internet?",
    answer:
      "Yes, residents get high-speed internet and study-focused room setups with table and chair support for classes and exam preparation.",
  },
  {
    question: "Can first-year students book rooms in advance?",
    answer:
      "Yes, advance booking is available depending on current occupancy. Contact us through WhatsApp to check upcoming move-in slots.",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: "PG Near Nirma University Ahmedabad | Unoloft",
  description:
    "Unoloft offers premium PG near Nirma University Ahmedabad with AC rooms, meals, WiFi, study setup and 24/7 security in Gota.",
  path: "/pg-near-nirma-university",
  keywords: [
    "pg near nirma university",
    "pg near nirma university ahmedabad",
    "nirma university near pg",
    "best pg near nirma university",
    "pg in ahmedabad near nirma university",
    "single room pg near me",
    "single sharing pg near me",
    "pg for students in ahmedabad",
    "student accommodation in ahmedabad",
    "paying guest for students",
  ],
});

export default function PgNearNirmaUniversityPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema(
          "/pg-near-nirma-university",
          "PG near Nirma University",
        )}
      />
      <JsonLd
        data={getLodgingBusinessSchema("Unoloft – PG near Nirma University")}
      />
      <JsonLd data={getFaqSchema(LANDING_FAQS)} />
      <LocalSeoLandingPage
        h1="PG near Nirma University, Ahmedabad – Unoloft"
        intro="Unoloft is built for students searching for a dependable PG near Nirma University, Ahmedabad with a practical daily commute and a serious study environment. From the property, Nirma University is approximately a 10 minute commute, and many residents cover the stretch in a quick auto ride from the Gota side. Because this location is also close to SG Highway and Gota Circle, students can easily access coaching centers, food outlets, and transport routes after classes. The PG setup is fully furnished with AC rooms, dedicated study furniture, high-speed WiFi, hygienic home-cooked meals, daily housekeeping, filtered water, and round-the-clock safety systems. For first-year and outstation students, this reduces moving stress and allows better focus during semester schedules, project deadlines, and exam periods. Parents also prefer this locality because it offers a safer residential pocket while keeping Nirma University reachable every day without long travel fatigue. If your priority is a balanced student lifestyle near Nirma University with reliable facilities and responsive management support, Unoloft offers a stable and premium accommodation option designed around academics."
        landmarks={[
          "Nirma University main gate: approx. 10 minutes by auto",
          "SG Highway: approx. 2 minutes",
          "Gota Circle: approx. 2 minutes",
          "Silver Oak University: approx. 5 minutes",
        ]}
        mapEmbed="https://www.google.com/maps?q=Aster%20Homes%20by%20Unoloft%20-%20PG%20in%20Gota%20Ahmedabad&output=embed"
        alsoNearLinks={[
          {
            href: "/pg-near-silver-oak",
            label: "Also near Silver Oak University",
          },
          { href: "/pg-near-sg-highway", label: "Also near SG Highway" },
          { href: "/pg-in-gota-ahmedabad", label: "Also in Gota Ahmedabad" },
        ]}
        faqs={LANDING_FAQS}
      />
    </>
  );
}
