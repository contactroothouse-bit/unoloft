import type { Metadata } from "next";
import type { InternalBlogArticle } from "@/components/unoloft/blogs";
import type { FaqItem, Testimonial } from "@/components/unoloft/types";

export const SITE_URL = "https://www.unoloft.com";
export const SITE_NAME = "Unoloft";
export const OG_IMAGE_URL = "/og-image.jpg";
export const SITE_LOGO_URL = `${SITE_URL}/logo.png`;
export const SITE_ICON_URL = `${SITE_URL}/icon-192.png`;

export type RouteConfig = {
  path: string;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
};

export const MAIN_ROUTES = [
  "/",
  "/aster-homes",
  "/iris-house",
  "/rooms",
  "/amenities",
  "/location",
  "/contact",
  "/gallery",
  "/blogs",
  "/faq",
] as const;

export const LOCAL_ROUTES = [
  "/pg-in-gota-ahmedabad",
  "/pg-near-nirma-university",
  "/pg-near-silver-oak",
  "/pg-near-sg-highway",
] as const;

export const ALL_SEO_ROUTES: RouteConfig[] = [
  { path: "/", changeFrequency: "daily", priority: 1 },
  { path: "/aster-homes", changeFrequency: "daily", priority: 0.9 },
  { path: "/iris-house", changeFrequency: "daily", priority: 0.9 },
  { path: "/rooms", changeFrequency: "daily", priority: 0.7 },
  { path: "/amenities", changeFrequency: "daily", priority: 0.7 },
  { path: "/location", changeFrequency: "daily", priority: 0.7 },
  { path: "/contact", changeFrequency: "daily", priority: 0.7 },
  { path: "/gallery", changeFrequency: "daily", priority: 0.7 },
  { path: "/blogs", changeFrequency: "daily", priority: 0.8 },
  {
    path: "/blogs/why-pg-location-ahmedabad-matters",
    changeFrequency: "daily",
    priority: 0.7,
  },
  {
    path: "/blogs/cost-of-living-ahmedabad-students",
    changeFrequency: "daily",
    priority: 0.7,
  },
  {
    path: "/blogs/pg-checklist-working-professionals-ahmedabad",
    changeFrequency: "daily",
    priority: 0.7,
  },
  {
    path: "/blogs/study-tips-pg-students-ahmedabad-gota",
    changeFrequency: "daily",
    priority: 0.7,
  },
  {
    path: "/blogs/pg-near-nirma-university-ahmedabad-gota-unoloft",
    changeFrequency: "daily",
    priority: 0.7,
  },
  { path: "/faq", changeFrequency: "daily", priority: 0.7 },
  { path: "/pg-in-gota-ahmedabad", changeFrequency: "daily", priority: 0.9 },
  {
    path: "/pg-near-nirma-university",
    changeFrequency: "daily",
    priority: 0.9,
  },
  { path: "/pg-near-silver-oak", changeFrequency: "daily", priority: 0.9 },
  { path: "/pg-near-sg-highway", changeFrequency: "daily", priority: 0.9 },
];

type BuildPageMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildPageMetadata({
  title,
  description,
  path,
  keywords,
}: BuildPageMetadataInput): Metadata {
  return {
    title,
    description,
    keywords,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: SITE_NAME,
      title,
      description,
      url: `${SITE_URL}${path}`,
      images: [
        {
          url: OG_IMAGE_URL,
          width: 1200,
          height: 630,
          alt: "Unoloft Premium PG Ahmedabad",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE_URL],
    },
  };
}

export function getBlogPostingSchema(article: InternalBlogArticle) {
  const pageUrl = `${SITE_URL}/blogs/${article.slug}`;
  const imagePath = article.thumbnail.startsWith("http")
    ? article.thumbnail
    : `${SITE_URL}${article.thumbnail}`;
  const published = `${article.publishedOn}T08:00:00+05:30`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.metaDescription,
    image: [imagePath],
    datePublished: published,
    dateModified: published,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: SITE_LOGO_URL,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": pageUrl,
    },
  };
}

export function getBreadcrumbSchema(path: string, pageName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: pageName,
        item: `${SITE_URL}${path}`,
      },
    ],
  };
}

export function getLodgingBusinessSchema(name: string) {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": `${SITE_URL}/#lodging-business`,
    name,
    url: SITE_URL,
    image: [SITE_LOGO_URL],
    logo: SITE_LOGO_URL,
    telephone: "+917043306301",
    address: {
      "@type": "PostalAddress",
      streetAddress:
        "Royal Lakend, Gota - Jagatpur Road, Sarkhej-Gandhinagar Hwy",
      addressLocality: "Ahmedabad",
      addressRegion: "Gujarat",
      postalCode: "382481",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.1225,
      longitude: 72.5714,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Ahmedabad",
      },
      {
        "@type": "Place",
        name: "Gota",
      },
      {
        "@type": "Place",
        name: "Jagatpur",
      },
      {
        "@type": "Place",
        name: "Sarkhej-Gandhinagar Highway",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Nirma University",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Silver Oak University",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    priceRange: "INR 11000-16500",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "1000",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Gym", value: true },
      {
        "@type": "LocationFeatureSpecification",
        name: "Meals Included",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "Air Conditioning",
        value: true,
      },
      {
        "@type": "LocationFeatureSpecification",
        name: "24/7 Security",
        value: true,
      },
    ],
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: SITE_LOGO_URL,
    },
    image: SITE_LOGO_URL,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+917043306301",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "hi", "gu"],
      },
    ],
  };
}

export function getFaqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function getReviewSchema(
  reviews: Testimonial[],
  itemName = "Unoloft",
  itemPath = "/",
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: reviews.slice(0, 5).map((review, index) => ({
      "@type": "Review",
      itemReviewed: {
        "@type": "LodgingBusiness",
        name: itemName,
        url: `${SITE_URL}${itemPath}`,
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: review.name,
      },
      reviewBody: review.text,
      position: index + 1,
    })),
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "Unoloft",
    url: SITE_URL,
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}
