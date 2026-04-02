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
    question: "How far is Unoloft from Gota Circle?",
    answer:
      "Unoloft is around 2 minutes from Gota Circle, making daily travel to colleges and SG Highway offices easier for residents.",
  },
  {
    question: "Do you provide meals in the Gota PG?",
    answer:
      "Yes. Residents get home-cooked meals daily with a hygienic kitchen setup and reliable service suitable for students and working professionals.",
  },
  {
    question: "Can I schedule a same-day room visit in Gota?",
    answer:
      "Yes, subject to slot availability. You can call or WhatsApp the Unoloft team to schedule a same-day property walkthrough.",
  },
];

export const metadata: Metadata = buildPageMetadata({
  title: "PG in Gota Ahmedabad – Furnished Rooms with Meals | Unoloft",
  description:
    "Looking for PG in Gota, Ahmedabad? Unoloft offers fully AC furnished rooms with WiFi, gym, meals & 24/7 security at Gota Circle near SG Highway.",
  path: "/pg-in-gota-ahmedabad",
});

export default function PgInGotaAhmedabadPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbSchema(
          "/pg-in-gota-ahmedabad",
          "PG in Gota Ahmedabad",
        )}
      />
      <JsonLd data={getLodgingBusinessSchema("Unoloft – PG in Gota Ahmedabad")} />
      <JsonLd data={getFaqSchema(LANDING_FAQS)} />
      <LocalSeoLandingPage
        h1="PG in Gota Ahmedabad – Unoloft"
        intro="If you are looking for a reliable and premium PG in Gota Ahmedabad, Unoloft offers a complete stay setup designed for students and young working professionals. The property is located at Royal Lakend on Gota-Jagatpur Road, close to SG Highway and just minutes from Gota Circle, so everyday movement across Ahmedabad West remains convenient. This location is especially preferred by students who need regular commute access to Nirma University and Silver Oak University while still living in a quieter residential pocket. Room options include single, double, and triple sharing with furnished AC interiors, wardrobes, study space, and practical storage. Beyond rooms, residents get high-speed WiFi, home-cooked meals, daily housekeeping, filtered water, security surveillance, and support staff availability through the day. Because Gota is well connected to major roads, students can manage class schedules, coaching, and weekend errands without long travel stress. For anyone comparing PG in Gota Ahmedabad, Unoloft stands out for consistent maintenance, safer operations, and an all-inclusive daily living model that prioritizes comfort, commute efficiency, and long-term value."
        introImageSrc="/PG%20NEARS%20AREA/gota%20lake.avif"
        landmarks={[
          "Nirma University: approx. 10 minutes",
          "Silver Oak University: approx. 5 minutes",
          "SG Highway: approx. 2 minutes",
          "Gota Circle: approx. 2 minutes",
        ]}
        mapEmbed="https://www.google.com/maps?q=Aster%20Homes%20by%20Unoloft%20-%20PG%20in%20Gota%20Ahmedabad&output=embed"
        alsoNearLinks={[
          { href: "/pg-near-nirma-university", label: "Also near Nirma University" },
          { href: "/pg-near-silver-oak", label: "Also near Silver Oak" },
          { href: "/pg-near-sg-highway", label: "Also near SG Highway" },
        ]}
        faqs={LANDING_FAQS}
      />
    </>
  );
}
