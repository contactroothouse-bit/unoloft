import type { Metadata } from "next";
import UnoloftPage from "@/components/unoloft/UnoloftPage";
import JsonLd from "@/components/unoloft/JsonLd";
import { ASTER_TESTIMONIALS } from "@/components/unoloft/data";
import {
  buildPageMetadata,
  getLodgingBusinessSchema,
  getOrganizationSchema,
  getReviewSchema,
  getWebsiteSchema,
} from "@/components/unoloft/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Premium PG in Ahmedabad Near Gota | Unoloft",
  description:
    "Unoloft offers premium PG accommodation in Ahmedabad near Gota, Nirma University, Silver Oak University, and SG Highway with AC rooms, meals, WiFi, housekeeping, and 24/7 security.",
  path: "/",
  keywords: [
    "PG in Ahmedabad",
    "PG in Gota Ahmedabad",
    "PG near Nirma University",
    "PG near SG Highway",
    "paying guest in Ahmedabad",
    "best PG in Ahmedabad",
    "pg for working professionals",
    "student accommodation Ahmedabad",
    "premium PG in Ahmedabad",
    "premium PG in Gota Ahmedabad",
    "premium PG near Nirma University",
    "premium PG near SG Highway",
    "premium PG for working professionals",
    "premium PG for students",
    "Pg for boys near Nirma University",
    "Pg for boys near SG Highway",
    "Pg for working professionals near Nirma University",
    "Pg for working professionals near SG Highway",
    "Pg for students near Nirma University",
    "Pg for students near SG Highway",
    "Pg for working professionals near Nirma University",
  ],
});

export default function Page() {
  return (
    <>
      <JsonLd data={getOrganizationSchema()} />
      <JsonLd
        data={getLodgingBusinessSchema({
          name: "Unoloft",
          path: "/",
        })}
      />
      <JsonLd data={getReviewSchema(ASTER_TESTIMONIALS, "Unoloft", "/")} />
      <JsonLd data={getWebsiteSchema()} />
      <UnoloftPage />
    </>
  );
}
