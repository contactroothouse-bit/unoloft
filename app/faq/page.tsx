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
  title:
    "Unoloft FAQ – PG in Gota Ahmedabad: Rent, Meals, Security Deposit & Visiting Rules",
  description:
    "Answers about Unoloft PG (Aster Homes & Iris House): what rent includes (meals, WiFi, housekeeping), security deposit refunds, gate timings, booking a visit, and daily operations—before you move in.",
  path: "/faq",
  keywords: [
    "unoloft faq",
    "pg in gota ahmedabad rules",
    "pg security deposit ahmedabad",
    "pg meals included ahmedabad",
    "aster homes pg faq",
    "iris house pg faq",
  ],
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
