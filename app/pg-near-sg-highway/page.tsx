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
    question: "Is Unoloft suitable for students and working professionals near SG Highway?",
    answer:
      "Yes. Unoloft is close to SG Highway and works well for both university students and working professionals who need quick commute access.",
  },
  {
    question: "What facilities are most useful for working residents?",
    answer:
      "High-speed WiFi, furnished AC rooms, housekeeping, secure entry, and meals are especially useful for residents balancing study or work schedules.",
  },
  {
    question: "How can I book a room near SG Highway?",
    answer:
      "You can directly WhatsApp the Unoloft team to check room availability, schedule a visit, and complete booking quickly.",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: "PG near SG Highway Ahmedabad – Premium Furnished Boys PG | Unoloft",
  description:
    "Unoloft offers premium furnished boys PG near SG Highway Ahmedabad with AC rooms, WiFi, meals, CCTV, gym and study-friendly environment.",
  path: "/pg-near-sg-highway",
});

export default function PgNearSgHighwayPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema("/pg-near-sg-highway", "PG near SG Highway")}
      />
      <JsonLd
        data={getLodgingBusinessSchema("Unoloft – PG near SG Highway Ahmedabad")}
      />
      <JsonLd data={getFaqSchema(LANDING_FAQS)} />
      <LocalSeoLandingPage
        h1="PG near SG Highway, Ahmedabad – Unoloft"
        intro="Unoloft is an excellent choice for anyone searching for a premium PG near SG Highway, Ahmedabad with faster city connectivity and full-day convenience. SG Highway is approximately 2 minutes away from the property, so residents can quickly access college routes, coaching classes, office corridors, and transport links without losing time in daily traffic. This location is particularly useful for students attending nearby institutes like Nirma University and Silver Oak University because both campuses remain within a manageable commute radius. Unoloft offers furnished AC rooms in single, double, and triple sharing options, allowing residents to match comfort needs with budget preferences. Core services include high-speed WiFi, home-cooked meals, housekeeping, filtered water, and security monitoring for safer long-term stays. The property is also close to Gota Circle, which adds practicality for daily errands and local commute flexibility. For students and working professionals who value both mobility and comfort, this PG near SG Highway provides a structured and dependable setup that supports study focus, work discipline, and stress-free routine living."
        introImageSrc="/PG%20NEARS%20AREA/sghighway.jpg"
        landmarks={[
          "SG Highway access point: approx. 2 minutes",
          "Gota Circle: approx. 2 minutes",
          "Nirma University: approx. 10 minutes",
          "Silver Oak University: approx. 5 minutes",
        ]}
        mapEmbed="https://www.google.com/maps?q=Aster%20Homes%20by%20Unoloft%20-%20PG%20in%20Gota%20Ahmedabad&output=embed"
        alsoNearLinks={[
          { href: "/pg-near-nirma-university", label: "Also near Nirma University" },
          { href: "/pg-near-silver-oak", label: "Also near Silver Oak University" },
          { href: "/pg-in-gota-ahmedabad", label: "Also in Gota Ahmedabad" },
        ]}
        faqs={LANDING_FAQS}
      />
    </>
  );
}
