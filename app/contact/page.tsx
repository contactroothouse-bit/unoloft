import type { Metadata } from "next";
import JsonLd from "@/components/unoloft/JsonLd";
import PageShell from "@/components/unoloft/PageShell";
import ContactSection from "@/components/unoloft/sections/ContactSection";
import { buildPageMetadata, getBreadcrumbSchema } from "@/components/unoloft/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact Unoloft – Book PG Visit in Ahmedabad",
  description:
    "Contact Unoloft to book your PG room visit in Ahmedabad. Call, WhatsApp, or submit your details for quick availability and pricing support.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={getBreadcrumbSchema("/contact", "Contact")} />
      <PageShell>
        <ContactSection selectedHome="aster" />
      </PageShell>
    </>
  );
}
