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
  title: "Pg in Gota Ahmedabad | Premium PG  | Aster homes | Iris house | unoloft by roothouseliving | Nirmal university | Silver oak university | SG highway | Gota circle | Paying guest in gota | Ahmedabad best pg | Good Food Quality | 27/7 security | Gym | AC  ",
  description:
    "Premium PG in Ahmedabad (Gota) near Nirma University and SG Highway. Fully furnished AC rooms with meals, WiFi, gym, housekeeping and 24/7 security. | pg for boys in gota | best pg in gota | best pg in ahmedabad | pg in ahmedabad | pg near me | premium pg in gota | premium pg in ahmedabad | premium pg near nirmal university | premium pg near silver oak university | premium pg near SG highway | premium pg near me | premium pg for boys | premium pg for girls | premium pg for working professionals  ",
  path: "/",
  keywords: [
    "PG in Ahmedabad",
    "paying guest in Ahmedabad",
    "boys PG Ahmedabad",
    "pg for men",
    "pg for men in Ahmedabad",
    "best pg in Ahmedabad",
    "PG near Nirma University",
    "pg near nirma university ahmedabad",
    "PG in Gota Ahmedabad",
    "paying guest Ahmedabad",
    "PG near SG Highway",
    "single room pg in Ahmedabad",
    "double sharing pg",
    "pg for working professionals",
    "paying guest for gents near me",
    "paying guest room near me",
    "pg for boys in gota",
    "best pg in gota",
    "best pg in ahmedabad",
    "pg in ahmedabad",
    "pg near me",
    "premium pg in gota",
    "premium pg in ahmedabad",
    "premium pg near nirmal university",
    "premium pg near silver oak university",
    "premium pg near SG highway",
    "premium pg near me",
    "premium pg for boys",
    "premium pg for girls",
    "premium pg for working professionals",
  ],
});

export default function Page() {
  return (
    <>
      <JsonLd data={getOrganizationSchema()} />
      <JsonLd data={getLodgingBusinessSchema("Unoloft – Aster Homes")} />
      <JsonLd data={getReviewSchema(ASTER_TESTIMONIALS, "Unoloft", "/")} />
      <JsonLd data={getWebsiteSchema()} />
      <UnoloftPage />
    </>
  );
}
