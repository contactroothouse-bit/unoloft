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
    question: "How close is Unoloft to Silver Oak University?",
    answer:
      "Unoloft is approximately 5 minutes away from Silver Oak University, making it suitable for students with tight daily schedules.",
  },
  {
    question: "Are meals and housekeeping included in rent?",
    answer:
      "Yes, residents receive home-cooked meals and regular housekeeping support as part of their accommodation package.",
  },
  {
    question: "Do you offer double and triple sharing for students?",
    answer:
      "Yes. Unoloft provides single, double, and triple sharing options so students can choose based on comfort and monthly budget.",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: "PG near Silver Oak University Ahmedabad – Furnished Boys PG | Unoloft",
  description:
    "Looking for PG near Silver Oak University? Unoloft offers furnished AC boys PG rooms with meals, WiFi, gym and security in Gota Ahmedabad.",
  path: "/pg-near-silver-oak",
});

export default function PgNearSilverOakPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema("/pg-near-silver-oak", "PG near Silver Oak")}
      />
      <JsonLd
        data={getLodgingBusinessSchema("Unoloft – PG near Silver Oak University")}
      />
      <JsonLd data={getFaqSchema(LANDING_FAQS)} />
      <LocalSeoLandingPage
        h1="PG near Silver Oak University, Ahmedabad – Unoloft"
        intro="Unoloft is a strong fit for students who want a premium PG near Silver Oak University, Ahmedabad without compromising on commute comfort or room quality. Silver Oak University is approximately 5 minutes away from this location, and on most days students can reach campus with a short auto ride from the Gota-Jagatpur corridor. That time advantage matters during morning lectures, lab sessions, and exam periods. The property offers furnished AC rooms in single, double, and triple sharing options, so students can choose based on privacy preference and monthly budget. Along with furnished rooms, residents receive high-speed WiFi for assignments and online classes, home-cooked meals, routine housekeeping, filtered drinking water, and round-the-clock safety through CCTV and support staff. The same location also keeps SG Highway and Gota Circle nearby, which helps with practical errands and city mobility after college hours. For families comparing options near Silver Oak University, Unoloft provides a safer and better-managed living setup that supports academic focus, predictable commuting, and long-term student convenience in Ahmedabad."
        introImageSrc="/PG%20NEARS%20AREA/silver%20oak.webp"
        landmarks={[
          "Silver Oak University main gate: approx. 5 minutes by auto",
          "Nirma University: approx. 10 minutes",
          "SG Highway: approx. 2 minutes",
          "Gota Circle: approx. 2 minutes",
        ]}
        mapEmbed="https://www.google.com/maps?q=Aster%20Homes%20by%20Unoloft%20-%20PG%20in%20Gota%20Ahmedabad&output=embed"
        alsoNearLinks={[
          { href: "/pg-near-nirma-university", label: "Also near Nirma University" },
          { href: "/pg-near-sg-highway", label: "Also near SG Highway" },
          { href: "/pg-in-gota-ahmedabad", label: "Also in Gota Ahmedabad" },
        ]}
        faqs={LANDING_FAQS}
      />
    </>
  );
}
