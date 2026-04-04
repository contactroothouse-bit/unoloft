import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/unoloft/JsonLd";
import PageShell from "@/components/unoloft/PageShell";
import RoomsSection from "@/components/unoloft/sections/RoomsSection";
import {
  buildPageMetadata,
  getBreadcrumbSchema,
} from "@/components/unoloft/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Single, Double and Triple Sharing PG Rooms | Unoloft Ahmedabad",
  description:
    "Explore single room PG, double sharing and triple sharing room options at Unoloft Ahmedabad with AC, meals, WiFi and housekeeping.",
  path: "/rooms",
  keywords: [
    "single room pg",
    "single pg room",
    "single room pg in ahmedabad",
    "pg room",
    "pg room rent",
    "double sharing",
    "double sharing room",
    "triple sharing pg",
    "private room pg",
    "furnished room for rent",
  ],
});

export default function RoomsPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema("/rooms", "Rooms")} />
      <PageShell>
        <section id="pg-intro" className="subpage-section">
          <div className="sh rv in">
            <h1 className="s-t">
              PG Room Types in Ahmedabad <em>for Every Budget</em>
            </h1>
            <p className="s-sub">
              Choose from private single occupancy, double sharing, and triple
              sharing rooms with AC, study setups, and premium amenities.
            </p>
          </div>
          <div className="rooms-page-switch rv in">
            <a href="#aster-rooms">Aster Homes Rooms</a>
            <a href="#iris-rooms">Iris House Rooms</a>
          </div>
        </section>
        <RoomsSection
          selectedHome="aster"
          sectionId="aster-rooms"
          sectionClassName="rooms-section-aster"
          eyebrow="Aster Homes"
          titleStart="Aster Homes"
          titleEmphasis="Room Options"
          subtitle="Explore Aster Homes room types with private, double and triple sharing options near SG Highway and Nirma University."
        />
        <RoomsSection
          selectedHome="iris"
          sectionId="iris-rooms"
          sectionClassName="rooms-section-iris"
          eyebrow="Iris House"
          titleStart="Iris House"
          titleEmphasis="Room Options"
          subtitle="Browse Iris House room layouts designed for comfort, study, and easy daily living near top institutions in Ahmedabad."
        />
        <section id="contact" className="subpage-section">
          <div className="con-cen rv in">
            <p className="s-sub">
              Need help choosing a room?{" "}
              <Link href="/contact">Contact the Unoloft team</Link> for current
              availability and site visit slots.
            </p>
          </div>
        </section>
      </PageShell>
    </>
  );
}
