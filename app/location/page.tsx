import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/unoloft/JsonLd";
import PageShell from "@/components/unoloft/PageShell";
import MapSection from "@/components/unoloft/sections/MapSection";
import { buildPageMetadata, getBreadcrumbSchema } from "@/components/unoloft/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Unoloft Location – PG in Gota Ahmedabad near Nirma & SG Highway",
  description:
    "Find Unoloft PG at Royal Lakend, Gota-Jagatpur Road, Ahmedabad. Strategically located near Nirma University, Silver Oak University and SG Highway.",
  path: "/location",
});

export default function LocationPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema("/location", "Location")} />
      <PageShell>
        <section id="pg-intro" className="subpage-section">
          <div className="sh rv in">
            <h1 className="s-t">
              Unoloft Location in Ahmedabad <em>for Fast Daily Commute</em>
            </h1>
            <p className="s-sub">
              Royal Lakend, Gota - Jagatpur Road, Sarkhej-Gandhinagar Highway,
              behind Gota Lake, opposite Royal Heights, Ahmedabad, Gujarat
              382481.
            </p>
            <p className="s-sub">
              Looking for area-specific options? Check <Link href="/pg-near-nirma-university">PG near Nirma University</Link>,{" "}
              <Link href="/pg-near-silver-oak">PG near Silver Oak University</Link>, and{" "}
              <Link href="/pg-near-sg-highway">PG near SG Highway</Link>.
            </p>
          </div>
        </section>
        <MapSection selectedHome="aster" />
      </PageShell>
    </>
  );
}
