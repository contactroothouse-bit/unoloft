export type Mode = "all" | "boys" | "girls";
export type Home = "aster" | "iris";

export type GalleryFilter =
  | "all"
  | "boys-room"
  | "girls-room"
  | "common"
  | "facilities";

export type HeroText = {
  h1: string;
  h2: string;
  ey: string;
};

export type HeroMosaicCard = {
  id: "img-mc1" | "img-mc2" | "img-mc3" | "img-mc4";
  cardClass: string;
  alt: string;
  sources: Record<Home, string>;
};

export type Facility = {
  icon: string;
  name: string;
  description: string;
  delay: string;
};

export type Room = {
  image: string;
  alt: string;
  badge: string;
  label: string;
  name: string;
  description: string;
  chips: string[];
  price: string;
  delay?: string;
};

export type AvailabilityCard = {
  sharing: string;
  name: string;
  price: string;
  slots: Array<"free" | "taken">;
  statusType: "avail" | "almost" | "full";
  statusIcon: string;
  statusText: string;
  ctaType: "book" | "waitlist";
  ctaHref?: string;
  ctaText: string;
  delay?: string;
};

export type WhyPoint = {
  icon: string;
  title: string;
  description: string;
};

export type WhyFeature = {
  emoji: string;
  title: string;
  description: string;
};

export type GalleryItem = {
  category: Exclude<GalleryFilter, "all">;
  image: string;
  lightboxImage: string;
  alt: string;
};

export type Testimonial = {
  stars: string[];
  quote: string;
  text: string;
  avatar: string;
  avatarBg: string;
  name: string;
  role: string;
  delay?: string;
  mode?: Exclude<Mode, "all">;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type MapCard = {
  icon: string;
  title: string;
  value: string;
  mode?: Exclude<Mode, "all">;
};
