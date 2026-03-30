import type { Metadata } from "next";
import UnoloftPage from "@/components/unoloft/UnoloftPage";
import JsonLd from "@/components/unoloft/JsonLd";
import { ASTER_TESTIMONIALS } from "@/components/unoloft/data";
import {
  buildPageMetadata,
  getLodgingBusinessSchema,
  getReviewSchema,
  getWebsiteSchema,
} from "@/components/unoloft/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Unoloft – Premium PG in Ahmedabad for Boys | Gota, SG Highway",
  description:
    "Unoloft offers fully furnished PG accommodation in Ahmedabad with home-cooked meals, gym, AC, WiFi & 24/7 security. Trusted by 1000+ residents. Near Nirma University & SG Highway.",
  path: "/",
  keywords: [
    "PG in Ahmedabad",
    "boys PG Ahmedabad",
    "PG near Nirma University",
    "PG in Gota Ahmedabad",
    "paying guest Ahmedabad",
    "PG near SG Highway",
  ],
});

export default function Page() {
  return (
    <>
      <JsonLd data={getLodgingBusinessSchema("Unoloft – Aster Homes")} />
      <JsonLd data={getReviewSchema(ASTER_TESTIMONIALS, "Unoloft", "/")} />
      <JsonLd data={getWebsiteSchema()} />
      <UnoloftPage />
    </>
  );
}
