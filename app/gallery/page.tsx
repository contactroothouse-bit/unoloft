import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/unoloft/JsonLd";
import PageShell from "@/components/unoloft/PageShell";
import GalleryPageClient from "@/components/unoloft/GalleryPageClient";
import { buildPageMetadata, getBreadcrumbSchema } from "@/components/unoloft/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Unoloft Gallery – PG Rooms, Amenities & Common Spaces in Ahmedabad",
  description:
    "Explore the Unoloft gallery showcasing furnished PG rooms, study lounges, facilities, and day-to-day living spaces in Ahmedabad.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema("/gallery", "Gallery")} />
      <PageShell>
        <GalleryPageClient selectedHome="aster" />
        <GalleryPageClient selectedHome="iris" />
        <section id="contact" className="subpage-section">
          <div className="con-cen rv in">
            <p className="s-sub">
              Seen enough? <Link href="/contact">Book your property tour now</Link>.
            </p>
          </div>
        </section>
      </PageShell>
    </>
  );
}
