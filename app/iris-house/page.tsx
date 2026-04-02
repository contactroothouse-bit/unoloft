import Image from "next/image";
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
          <div className="subpage-intro-grid">
            <div className="sh rv">
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

            <div className="subpage-intro-media rv" style={{ transitionDelay: ".08s" }}>
              <div className="subpage-intro-shot">
                <Image
                  src="/gallery/IMG-20260201-WA0003.jpg"
                  alt="Iris House common area and premium living space"
                  fill
                  sizes="(max-width: 1080px) 50vw, 22vw"
                  priority
                />
              </div>
              <div className="subpage-intro-shot">
                <Image
                  src="/Iris%20homes/Iris%20homes/IMG-20260322-WA0015.jpg"
                  alt="Iris House interior room and study setup"
                  fill
                  sizes="(max-width: 1080px) 50vw, 22vw"
                  priority
                />
              </div>
            </div>
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
