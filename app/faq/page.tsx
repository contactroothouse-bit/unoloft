import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/unoloft/JsonLd";
import FaqPageClient from "@/components/unoloft/FaqPageClient";
import PageShell from "@/components/unoloft/PageShell";
import { FAQ_ITEMS } from "@/components/unoloft/data";
import {
  buildPageMetadata,
  getBreadcrumbSchema,
  getFaqSchema,
} from "@/components/unoloft/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Unoloft FAQ – PG Rent, Security, Meals, Rules & Booking",
  description:
    "Read frequently asked questions about Unoloft PG in Ahmedabad covering rent inclusions, security deposit, visiting rules, food and booking process.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema("/faq", "FAQ")} />
      <JsonLd data={getFaqSchema(FAQ_ITEMS)} />
      <PageShell>
        <FaqPageClient />
        <section id="contact" className="subpage-section">
          <div className="con-cen rv in">
            <p className="s-sub">
              Need personal help? Visit <Link href="/contact">Contact</Link> or check
              available options on <Link href="/rooms">Rooms</Link>.
            </p>
          </div>
        </section>
      </PageShell>
    </>
  );
}
