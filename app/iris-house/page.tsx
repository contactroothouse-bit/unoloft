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
  title: "Iris House – Premium Boys PG near Silver Oak University Ahmedabad",
  description:
    "Iris House by Unoloft – elegantly designed boys PG in Ahmedabad with dedicated warden, premium interiors, CCTV and meals included.",
  path: "/iris-house",
});

export default function IrisHousePage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema("/iris-house", "Iris House")} />
      <JsonLd data={getLodgingBusinessSchema("Unoloft – Iris House")} />
      <JsonLd
        data={getReviewSchema(
          ASTER_TESTIMONIALS,
          "Unoloft – Iris House",
          "/iris-house",
        )}
      />
      <JsonLd data={getFaqSchema(FAQ_ITEMS.slice(0, 3))} />
      <PageShell>
        <section id="pg-intro" className="subpage-section">
          <div className="sh rv in">
            <div className="s-ey">Property Overview</div>
            <h1 className="s-t">
              Iris House <em>Premium Boys PG</em>
            </h1>
            <p className="s-sub">
              Iris House is a premium boys PG by Unoloft near top institutions in
              Ahmedabad, offering furnished AC rooms, curated interiors, hygienic
              meals, surveillance-enabled safety, and a focused environment for
              students who need convenience and quality in one place.
            </p>
          </div>
        </section>
        <FacilitiesSection selectedHome="iris" />
        <RoomsSection selectedHome="iris" />
        <GalleryPageClient selectedHome="iris" />
        <TestimonialsSection items={ASTER_TESTIMONIALS} />
        <MapSection selectedHome="iris" />
      </PageShell>
    </>
  );
}
