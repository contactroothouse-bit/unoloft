import type { Metadata } from "next";
import JsonLd from "@/components/unoloft/JsonLd";
import PageShell from "@/components/unoloft/PageShell";
import GalleryPageClient from "@/components/unoloft/GalleryPageClient";
import {
  ASTER_TESTIMONIALS,
  FAQ_ITEMS,
} from "@/components/unoloft/data";
import FacilitiesSection from "@/components/unoloft/sections/FacilitiesSection";
import MapSection from "@/components/unoloft/sections/MapSection";
import RoomsSection from "@/components/unoloft/sections/RoomsSection";
import TestimonialsSection from "@/components/unoloft/sections/TestimonialsSection";
import {
  buildPageMetadata,
  getBreadcrumbSchema,
  getFaqSchema,
  getLodgingBusinessSchema,
  getReviewSchema,
} from "@/components/unoloft/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Aster Homes – Boys PG in Gota Ahmedabad | Unoloft",
  description:
    "Aster Homes by Unoloft – premium boys PG in Gota, Ahmedabad. Single & double sharing rooms with gym, study lounge, meals & 24/7 access.",
  path: "/aster-homes",
});

export default function AsterHomesPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema("/aster-homes", "Aster Homes")} />
      <JsonLd data={getLodgingBusinessSchema("Unoloft – Aster Homes")} />
      <JsonLd
        data={getReviewSchema(
          ASTER_TESTIMONIALS,
          "Unoloft – Aster Homes",
          "/aster-homes",
        )}
      />
      <JsonLd data={getFaqSchema(FAQ_ITEMS.slice(0, 3))} />
      <PageShell>
        <section id="pg-intro" className="subpage-section">
          <div className="sh rv in">
            <div className="s-ey">Property Overview</div>
            <h1 className="s-t">
              Aster Homes <em>Boys PG in Gota</em>
            </h1>
            <p className="s-sub">
              Aster Homes is Unoloft&apos;s flagship boys PG in Ahmedabad,
              designed for students and working professionals who need premium
              rooms, reliable meals, high-speed internet, and daily comfort near
              SG Highway and Nirma University.
            </p>
          </div>
        </section>
        <FacilitiesSection selectedHome="aster" />
        <RoomsSection selectedHome="aster" />
        <GalleryPageClient selectedHome="aster" />
        <TestimonialsSection items={ASTER_TESTIMONIALS} />
        <MapSection selectedHome="aster" />
      </PageShell>
    </>
  );
}
