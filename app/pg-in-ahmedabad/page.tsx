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
  title: "Premium PG in Ahmedabad for Boys & Girls | Unoloft",
  description:
    "Looking for the best PG in Ahmedabad? Unoloft offers premium PG accommodation with AC rooms, daily meals, high-speed WiFi, gym, housekeeping, and 24/7 security. Prime locations in Ahmedabad.",
  path: "/pg-in-ahmedabad",
  keywords: [
    "PG in Ahmedabad",
    "best PG in Ahmedabad",
    "premium PG in Ahmedabad",
    "paying guest in Ahmedabad",
    "boys pg in ahmedabad",
    "pg for working professionals in ahmedabad",
    "pg for students in ahmedabad",
    "student accommodation Ahmedabad",
    "luxury pg in ahmedabad",
    "ac pg in ahmedabad with food",
    "pg near me ahmedabad",
  ],
});

export default function PgInAhmedabadPage() {
  return (
    <>
      <JsonLd data={getOrganizationSchema()} />
      <JsonLd
        data={getLodgingBusinessSchema({
          name: "Unoloft - Premium PG in Ahmedabad",
          path: "/pg-in-ahmedabad",
        })}
      />
      <JsonLd data={getReviewSchema(ASTER_TESTIMONIALS, "Unoloft", "/pg-in-ahmedabad")} />
      <JsonLd data={getWebsiteSchema()} />
      <UnoloftPage />
    </>
  );
}
