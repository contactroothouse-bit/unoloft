import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/unoloft/JsonLd";
import PageShell from "@/components/unoloft/PageShell";
import RoomsSection from "@/components/unoloft/sections/RoomsSection";
import { buildPageMetadata, getBreadcrumbSchema } from "@/components/unoloft/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Unoloft Room Types – Single, Double & Triple Sharing PG Rooms",
  description:
    "Explore single, double and triple sharing PG room options at Unoloft in Ahmedabad. Fully furnished AC rooms with WiFi, meals and housekeeping.",
  path: "/rooms",
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
        </section>
        <RoomsSection selectedHome="aster" />
        <RoomsSection selectedHome="iris" />
        <section id="contact" className="subpage-section">
          <div className="con-cen rv in">
            <p className="s-sub">
              Need help choosing a room? <Link href="/contact">Contact the Unoloft team</Link> for
              current availability and site visit slots.
            </p>
          </div>
        </section>
      </PageShell>
    </>
  );
}
