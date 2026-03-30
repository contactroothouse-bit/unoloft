import type { Metadata } from "next";
import JsonLd from "@/components/unoloft/JsonLd";
import PageShell from "@/components/unoloft/PageShell";
import FacilitiesSection from "@/components/unoloft/sections/FacilitiesSection";
import { buildPageMetadata, getBreadcrumbSchema } from "@/components/unoloft/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Amenities at Unoloft – WiFi, Meals, Gym, Security & Housekeeping",
  description:
    "Discover premium amenities at Unoloft PG in Ahmedabad including high-speed WiFi, daily meals, gym, CCTV security, study area, housekeeping and more.",
  path: "/amenities",
});

export default function AmenitiesPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema("/amenities", "Amenities")} />
      <PageShell>
        <section id="pg-intro" className="subpage-section">
          <div className="sh rv in">
            <h1 className="s-t">
              Complete Amenities for <em>Comfortable PG Living</em>
            </h1>
            <p className="s-sub">
              Unoloft provides student-first facilities that support academics,
              wellness, and daily convenience across both properties.
            </p>
          </div>
        </section>
        <FacilitiesSection selectedHome="aster" />
        <FacilitiesSection selectedHome="iris" />
      </PageShell>
    </>
  );
}
