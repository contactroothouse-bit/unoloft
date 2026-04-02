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
          <div className="subpage-intro-grid">
            <div className="sh rv">
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

            <div className="subpage-intro-media rv" style={{ transitionDelay: ".08s" }}>
              <div className="subpage-intro-shot">
                <Image
                  src="/gallery/IMG-20260201-WA0003.jpg"
                  alt="Aster Homes common area and premium living space"
                  fill
                  sizes="(max-width: 1080px) 50vw, 22vw"
                  priority
                />
              </div>
              <div className="subpage-intro-shot">
                <Image
                  src="/gallery/IMG-20260201-WA0028.jpg"
                  alt="Aster Homes building and exterior view"
                  fill
                  sizes="(max-width: 1080px) 50vw, 22vw"
                  priority
                />
              </div>
            </div>
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
