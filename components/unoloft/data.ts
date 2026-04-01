import type {
  AvailabilityCard,
  Facility,
  FaqItem,
  GalleryItem,
  HeroMosaicCard,
  HeroText,
  MapCard,
  Mode,
  Home,
  Room,
  Testimonial,
  WhyFeature,
  WhyPoint,
} from "@/components/unoloft/types";

export const HERO_TEXT: Record<Mode, HeroText> = {
  all: {
    h1: "Your PG Hunt",
    h2: "is finally over.",
    ey: "Premium PG  Ahmedabad",
  },
  boys: {
    h1: "Built for the",
    h2: "Modern Man.",
    ey: "Aster Homes · Boys PG · Ahmedabad",
  },
  girls: {
    h1: "Designed for",
    h2: "Her Comfort.",
    ey: "Iris House · Girls PG · Ahmedabad",
  },
};

const IRIS_IMAGE_BASE = "/Iris%20homes/Iris%20homes";

export const HERO_MOSAIC_CARDS: HeroMosaicCard[] = [
  {
    id: "img-mc1",
    cardClass: "mc1",
    alt: "Room",
    sources: {
      aster: "/gallery/IMG-20260201-WA0003.jpg",
      iris: `${IRIS_IMAGE_BASE}/IMG-20260322-WA0002.jpg`,
    },
  },
  {
    id: "img-mc2",
    cardClass: "mc2",
    alt: "Reception",
    sources: {
      aster: "/gallery/IMG-20260201-WA0007.jpg",
      iris: `${IRIS_IMAGE_BASE}/IMG-20260322-WA0021.jpg`,
    },
  },
  {
    id: "img-mc3",
    cardClass: "mc3",
    alt: "Study Room",
    sources: {
      aster: "/gallery/IMG-20260201-WA0004(1).jpg",
      iris: `${IRIS_IMAGE_BASE}/IMG-20260322-WA0019.jpg`,
    },
  },
  {
    id: "img-mc4",
    cardClass: "mc4",
    alt: "Building",
    sources: {
      aster: `${IRIS_IMAGE_BASE}/IMG-20260322-WA0001.jpg`,
      iris: `${IRIS_IMAGE_BASE}/IMG-20260322-WA0001.jpg`,
    },
  },
];

export const ASTER_FACILITIES: Facility[] = [
  {
    icon: "fa-solid fa-wifi",
    name: "High-Speed WiFi",
    description:
      "Gigabit fiber internet throughout â€” perfect for work, classes & streaming.",
    delay: ".0s",
  },
  {
    icon: "fa-solid fa-bowl-food",
    name: "Home-Cooked Meals",
    description:
      "Fresh breakfast, lunch & dinner prepared daily by our in-house cooks.",
    delay: ".06s",
  },
  {
    icon: "fa-solid fa-dumbbell",
    name: "Gym",
    description: "Fitness equipment access available for all residents.",
    delay: ".12s",
  },
  {
    icon: "fa-solid fa-snowflake",
    name: "Air Conditioning",
    description: "All rooms are fully air-conditioned for year-round comfort.",
    delay: ".18s",
  },
  {
    icon: "fa-solid fa-shield-halved",
    name: "24/7 Security & CCTV",
    description:
      "Trained guards and cameras across all entry points and common areas.",
    delay: ".24s",
  },
  {
    icon: "fa-solid fa-shirt",
    name: "Washing Machine",
    description: "In-house washing machines available for regular use.",
    delay: ".30s",
  },
  {
    icon: "fa-solid fa-droplet",
    name: "Mineral Water",
    description: "Safe mineral drinking water available throughout the day.",
    delay: ".36s",
  },
  {
    icon: "fa-solid fa-temperature-low",
    name: "Fridge Facility",
    description: "Shared refrigerator facility available for residents.",
    delay: ".42s",
  },
  {
    icon: "fa-solid fa-broom",
    name: "Daily Housekeeping",
    description: "Regular room cleaning and common area maintenance every day.",
    delay: ".48s",
  },
  {
    icon: "fa-solid fa-motorcycle",
    name: "Free Parking",
    description: "Secure covered parking for bikes at no extra cost.",
    delay: ".54s",
  },
  {
    icon: "fa-solid fa-book-open",
    name: "Study Area",
    description:
      "Quiet, well-lit study rooms â€” ideal for focused work and exam prep.",
    delay: ".60s",
  },
  {
    icon: "fa-solid fa-bolt",
    name: "Power Backup",
    description:
      "24/7 backup ensures lights, fans & WiFi stay on without interruption.",
    delay: ".66s",
  },
  {
    icon: "fa-solid fa-droplet",
    name: "Hot Water Supply",
    description:
      "Round-the-clock hot water for a refreshing start every single day.",
    delay: ".72s",
  },
  {
    icon: "fa-solid fa-bed",
    name: "Bed with Extra Storage",
    description: "Comfortable beds with added storage space.",
    delay: ".78s",
  },
  {
    icon: "fa-solid fa-chair",
    name: "Study Table and Chair",
    description: "Dedicated study table with chair in every room.",
    delay: ".84s",
  },
];

export const IRIS_FACILITIES: Facility[] = [
  {
    icon: "fa-solid fa-kitchen-set",
    name: "Live Kitchen & Dining",
    description: "Separate live kitchen and dining facility for residents.",
    delay: ".0s",
  },
  {
    icon: "fa-solid fa-glass-water",
    name: "Purified Drinking Water",
    description: "Purified drinking water available throughout the day.",
    delay: ".06s",
  },
  {
    icon: "fa-solid fa-utensils",
    name: "Authentic Indian Meals",
    description:
      "Hot, delicious, nutritious Indian meals served 4 times daily in live kitchen.",
    delay: ".12s",
  },
  {
    icon: "fa-solid fa-fire-burner",
    name: "Induction & Vessels",
    description: "Induction and vessels available for personal use.",
    delay: ".18s",
  },
  {
    icon: "fa-solid fa-temperature-low",
    name: "Refrigerator & Geyser",
    description: "In-room refrigerator and geyser support for daily comfort.",
    delay: ".24s",
  },
  {
    icon: "fa-solid fa-wifi",
    name: "High-Speed WiFi",
    description: "High speed WiFi connectivity across the property.",
    delay: ".30s",
  },
  {
    icon: "fa-solid fa-broom",
    name: "Daily Cleaning Service",
    description: "Cleaning service provided on a daily basis.",
    delay: ".36s",
  },
  {
    icon: "fa-solid fa-shirt",
    name: "Laundry",
    description: "Fully automatic washing machine facility available.",
    delay: ".42s",
  },
  {
    icon: "fa-solid fa-book-open",
    name: "Library & Recreation",
    description: "Library and recreational area for focused and leisure time.",
    delay: ".48s",
  },
  {
    icon: "fa-solid fa-video",
    name: "CCTV Surveillance",
    description: "CCTV surveillance across key entry and common areas.",
    delay: ".54s",
  },
  {
    icon: "fa-solid fa-motorcycle",
    name: "Parking Facility",
    description: "Dedicated parking facility for residents.",
    delay: ".60s",
  },
  {
    icon: "fa-solid fa-truck-fast",
    name: "Transport Facility",
    description: "Transport support available for convenient commuting.",
    delay: ".66s",
  },
  {
    icon: "fa-solid fa-shield-halved",
    name: "24/7 Security",
    description: "Round-the-clock security coverage for complete safety.",
    delay: ".72s",
  },
  {
    icon: "fa-solid fa-door-open",
    name: "Spacious Cupboard",
    description: "Spacious personal cupboard in each room.",
    delay: ".78s",
  },
  {
    icon: "fa-solid fa-bed",
    name: "Bed with Extra Storage",
    description: "Comfortable beds with added storage space.",
    delay: ".84s",
  },
  {
    icon: "fa-solid fa-chair",
    name: "Study Table and Chair",
    description: "Dedicated study table with chair in every room.",
    delay: ".90s",
  },
];

export const FACILITIES_BY_HOME: Record<Home, Facility[]> = {
  aster: ASTER_FACILITIES,
  iris: IRIS_FACILITIES,
};

export const ASTER_ROOMS: Room[] = [
  {
    image: "/rooms/IMG-20260201-WA0020.jpg",
    alt: "Single Room",
    badge: "Most Private",
    label: "Single Occupancy",
    name: "Private Single Sharing",
    description:
      "Your personal sanctuary â€” fully furnished private room with attached or shared bath.",
    chips: ["AC", "Fan", "Study Table", "Wardrobe"],
    price: "â‚¹16,500",
  },
  {
    image: "/rooms/IMG-20260201-WA0025.jpg",
    alt: "Double Room",
    badge: "Popular",
    label: "Double Sharing",
    name: "Two Sharing",
    description:
      "Spacious room with a friendly roommate â€” perfect blend of privacy and community.",
    chips: ["AC", "Fan", "Study Table", "Wardrobe"],
    price: "â‚¹14,500",
    delay: ".1s",
  },
  {
    image: "/rooms/IMG-20260201-WA0002.jpg",
    alt: "Triple Room",
    badge: "Best Value",
    label: "Triple Sharing",
    name: "Triple Share Room",
    description:
      "Budget-friendly with a great community vibe â€” ideal for students on a budget.",
    chips: ["AC", "Fan", "Study Table", "Wardrobe"],
    price: "â‚¹11,000",
    delay: ".2s",
  },
];

export const IRIS_ROOMS: Room[] = [
  {
    image: `${IRIS_IMAGE_BASE}/IMG-20260322-WA0002.jpg`,
    alt: "Double Room",
    badge: "Popular",
    label: "Double Sharing",
    name: "Two Sharing",
    description:
      "Spacious room with a friendly roommate — perfect blend of privacy and community.",
    chips: ["AC", "Fan", "Study Table", "Wardrobe"],
    price: "₹14,500",
    delay: ".1s",
  },
  {
    image: `${IRIS_IMAGE_BASE}/IMG-20260322-WA0019.jpg`,
    alt: "Triple Room",
    badge: "Best Value",
    label: "Triple Sharing",
    name: "Triple Share Room",
    description:
      "Budget-friendly with a great community vibe — ideal for students on a budget.",
    chips: ["AC", "Fan", "Study Table", "Wardrobe"],
    price: "₹11,000",
    delay: ".2s",
  },
];

export const ROOMS_BY_HOME: Record<Home, Room[]> = {
  aster: ASTER_ROOMS,
  iris: IRIS_ROOMS,
};

export const AVAILABILITY_CARDS: AvailabilityCard[] = [
  {
    sharing: "1 Sharing",
    name: "Private Single Sharing",
    price: "â‚¹16,500",
    slots: ["free", "free", "taken", "taken", "taken", "taken"],
    statusType: "avail",
    statusIcon: "fa-solid fa-bed",
    statusText: "2 Beds Available",
    ctaType: "book",
    ctaHref:
      "https://wa.me/91XXXXXXXXXX?text=Hi!%20I%20want%20to%20book%20a%20Single%20Sharing%20Room%20at%20Unoloft.",
    ctaText: "Book Now",
  },
  {
    sharing: "2 Sharing",
    name: "Two Sharing",
    price: "â‚¹14,500",
    slots: [
      "free",
      "taken",
      "taken",
      "taken",
      "taken",
      "taken",
      "taken",
      "taken",
    ],
    statusType: "almost",
    statusIcon: "fa-solid fa-triangle-exclamation",
    statusText: "Only 1 Bed Left!",
    ctaType: "book",
    ctaHref:
      "https://wa.me/91XXXXXXXXXX?text=Hi!%20I%20want%20to%20book%20a%20Two%20Sharing%20Room%20at%20Unoloft.",
    ctaText: "Book Now",
    delay: ".1s",
  },
  {
    sharing: "3 Sharing",
    name: "Triple Share Room",
    price: "â‚¹11,000",
    slots: [
      "taken",
      "taken",
      "taken",
      "taken",
      "taken",
      "taken",
      "taken",
      "taken",
      "taken",
    ],
    statusType: "full",
    statusIcon: "fa-solid fa-circle-xmark",
    statusText: "Fully Occupied",
    ctaType: "waitlist",
    ctaText: "Join Waitlist",
    delay: ".2s",
  },
];

export const WHY_POINTS: WhyPoint[] = [
  {
    icon: "fa-solid fa-location-dot",
    title: "Prime Location",
    description:
      "Near Nirma University, Silver Oak University, SG Highway & Gota Circle â€” effortless daily commuting.",
  },
  {
    icon: "fa-solid fa-headset",
    title: "Responsive Management",
    description:
      "Any issue resolved in under 2 hours â€” warden available 24/7.",
  },
  {
    icon: "fa-solid fa-people-group",
    title: "Community & Events",
    description:
      "Festivals, movie nights & outings â€” friendships that last a lifetime.",
  },
  {
    icon: "fa-solid fa-indian-rupee-sign",
    title: "Transparent Pricing",
    description: "No hidden charges. What you see is exactly what you pay.",
  },
];

export const WHY_FEATURES: WhyFeature[] = [
  {
    emoji: "ðŸ ",
    title: "Fully Furnished",
    description: "Move in with just your bag â€” everything ready for you.",
  },
  {
    emoji: "ðŸ”’",
    title: "Total Safety",
    description: "Biometric entry, CCTV, security guards round the clock.",
  },
  {
    emoji: "ðŸ½ï¸",
    title: "Fresh Daily Meals",
    description: "Healthy, hygienic, home-style food cooked fresh every day.",
  },
  {
    emoji: "ðŸ’ª",
    title: "Wellness First",
    description: "Gym, yoga space & mental wellness initiatives included.",
  },
  {
    emoji: "ðŸ“¶",
    title: "Always Connected",
    description: "Gigabit fiber WiFi with zero downtime for work & study.",
  },
  {
    emoji: "ðŸŒ¿",
    title: "Eco Friendly",
    description: "Solar power, water harvesting & sustainable practices.",
  },
];

const ASTER_ROOM_GALLERY_IMAGES = [
  "/rooms/IMG-20260201-WA0002.jpg",
  "/rooms/IMG-20260201-WA0015.jpg",
  "/rooms/IMG-20260201-WA0016.jpg",
  "/rooms/IMG-20260201-WA0017.jpg",
  "/rooms/IMG-20260201-WA0018.jpg",
  "/rooms/IMG-20260201-WA0019.jpg",
  "/rooms/IMG-20260201-WA0020.jpg",
  "/rooms/IMG-20260201-WA0021.jpg",
  "/rooms/IMG-20260201-WA0022.jpg",
  "/rooms/IMG-20260201-WA0023.jpg",
  "/rooms/IMG-20260201-WA0024.jpg",
  "/rooms/IMG-20260201-WA0025.jpg",
  "/rooms/IMG-20260201-WA0026.jpg",
];

export const ASTER_GALLERY_ITEMS: GalleryItem[] = [
  ...ASTER_ROOM_GALLERY_IMAGES.map((image, index) => ({
    category: "boys-room" as const,
    image,
    lightboxImage: image,
    alt: `Aster Room ${index + 1}`,
  })),
  {
    category: "facilities",
    image: "/facilities/IMG-20260201-WA0004.jpg",
    lightboxImage: "/facilities/IMG-20260201-WA0004.jpg",
    alt: "Aster Facilities 1",
  },
  {
    category: "facilities",
    image: "/facilities/IMG-20260201-WA0005.jpg",
    lightboxImage: "/facilities/IMG-20260201-WA0005.jpg",
    alt: "Aster Facilities 2",
  },
  {
    category: "facilities",
    image: "/facilities/IMG-20260201-WA0006.jpg",
    lightboxImage: "/facilities/IMG-20260201-WA0006.jpg",
    alt: "Aster Facilities 3",
  },
  {
    category: "facilities",
    image: "/facilities/IMG-20260201-WA0007.jpg",
    lightboxImage: "/facilities/IMG-20260201-WA0007.jpg",
    alt: "Aster Facilities 4",
  },
  {
    category: "facilities",
    image: "/facilities/IMG-20260201-WA0008.jpg",
    lightboxImage: "/facilities/IMG-20260201-WA0008.jpg",
    alt: "Aster Facilities 5",
  },
  {
    category: "facilities",
    image: "/facilities/IMG-20260201-WA0009.jpg",
    lightboxImage: "/facilities/IMG-20260201-WA0009.jpg",
    alt: "Aster Facilities 6",
  },
  {
    category: "facilities",
    image: "/facilities/IMG-20260201-WA0010.jpg",
    lightboxImage: "/facilities/IMG-20260201-WA0010.jpg",
    alt: "Aster Facilities 7",
  },
  {
    category: "facilities",
    image: "/facilities/IMG-20260201-WA0012.jpg",
    lightboxImage: "/facilities/IMG-20260201-WA0012.jpg",
    alt: "Aster Facilities 8",
  },
  {
    category: "facilities",
    image: "/facilities/IMG-20260201-WA0013.jpg",
    lightboxImage: "/facilities/IMG-20260201-WA0013.jpg",
    alt: "Aster Facilities 9",
  },
  {
    category: "facilities",
    image: "/facilities/IMG-20260201-WA0014.jpg",
    lightboxImage: "/facilities/IMG-20260201-WA0014.jpg",
    alt: "Aster Facilities 10",
  },
];

export const IRIS_GALLERY_ITEMS: GalleryItem[] = [
  ...[
    "IMG-20260322-WA0001.jpg",
    "IMG-20260322-WA0002.jpg",
    "IMG-20260322-WA0019.jpg",
    "IMG-20260322-WA0020.jpg",
    "IMG-20260322-WA0021.jpg",
    "IMG-20260322-WA0023.jpg",
    "IMG-20260322-WA0024.jpg",
    "IMG-20260322-WA0025.jpg",
  ].map((fileName, index) => ({
    category: "girls-room" as const,
    image: `${IRIS_IMAGE_BASE}/${fileName}`,
    lightboxImage: `${IRIS_IMAGE_BASE}/${fileName}`,
    alt: `Iris Room ${index + 1}`,
  })),
  ...[
    "IMG-20260322-WA0005.jpg",
    "IMG-20260322-WA0008.jpg",
    "IMG-20260322-WA0009.jpg",
    "IMG-20260322-WA0010.jpg",
    "IMG-20260322-WA0011.jpg",
    "IMG-20260322-WA0012.jpg",
    "IMG-20260322-WA0014.jpg",
  ].map((fileName, index) => ({
    category: "facilities" as const,
    image: `${IRIS_IMAGE_BASE}/${fileName}`,
    lightboxImage: `${IRIS_IMAGE_BASE}/${fileName}`,
    alt: `Iris Facilities ${index + 1}`,
  })),
];

export const GALLERY_ITEMS_BY_HOME: Record<Home, GalleryItem[]> = {
  aster: ASTER_GALLERY_ITEMS,
  iris: IRIS_GALLERY_ITEMS,
};

export const ASTER_TESTIMONIALS: Testimonial[] = [
  {
    stars: [
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
    ],
    quote: '"',
    text: "Food quality is excellent and well-maintained. Daily room cleaning keeps everything hygienic and comfortable. Services are organized and the stay is hassle-free.",
    avatar: "R",
    avatarBg: "#1e3a7a",
    name: "Rutul Suthar",
    role: "Google Review - Aster Homes",
  },
  {
    stars: [
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
    ],
    quote: '"',
    text: "Very good hygienic food with a homely taste. Housekeeping is regular, the environment is calm and clean, and the PG is very well managed overall.",
    avatar: "H",
    avatarBg: "#2d5fa8",
    name: "Himanshu Dadhich",
    role: "Google Review - Aster Homes",
    delay: ".1s",
  },
  {
    stars: [
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
    ],
    quote: '"',
    text: "Rooms are clean, spacious, and well-maintained with Wi-Fi, AC, and comfortable beds. Staff is friendly and helpful, and the food is tasty and nutritious.",
    avatar: "N",
    avatarBg: "#f06520",
    name: "Nilam Menat",
    role: "Google Review - Aster Homes",
    delay: ".2s",
  },
  {
    stars: [
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
    ],
    quote: '"',
    text: "Good homemade-style food, reliable housekeeping, and a supportive atmosphere for B.Tech students. The place feels comfortable and flexible like home.",
    avatar: "M",
    avatarBg: "#1e3a7a",
    name: "Hiralal Meena",
    role: "Google Review - Aster Homes",
    delay: ".3s",
  },
  {
    stars: [
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
      "fa-solid fa-star",
    ],
    quote: '"',
    text: "I checked many PG options before choosing this one. It stood out for comfort, management support, and overall value for long-term stay.",
    avatar: "S",
    avatarBg: "var(--brand)",
    name: "Hardik Saparia",
    role: "Google Review - Aster Homes",
    delay: ".4s",
  },
];

export const IRIS_TESTIMONIALS: Testimonial[] = ASTER_TESTIMONIALS.map(
  (testimonial) => ({
    ...testimonial,
    role: "Google Review - Iris House",
  }),
);

export const TESTIMONIALS_BY_HOME: Record<Home, Testimonial[]> = {
  aster: ASTER_TESTIMONIALS,
  iris: IRIS_TESTIMONIALS,
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is included in the monthly rent?",
    answer:
      "Monthly rent includes fully furnished accommodation, three meals daily, high-speed WiFi, electricity (fair usage), housekeeping, water, and access to all amenities including gym and study area.",
  },
  {
    question: "Is the security deposit refundable?",
    answer:
      "Yes, a refundable security deposit of 1-2 months rent is collected at joining. Fully refunded within 7-14 working days after vacating, subject to no damage deductions.",
  },
  {
    question: "What are the gate timings and visiting hours?",
    answer:
      "Aster Homes: 24/7 access with log after 10 PM. prior notice required for late returns. Visitors in common areas 9 AM to 8 PM only.",
  },

  {
    question: "What is the minimum lock-in period?",
    answer:
      "Minimum stay is 3 months with a 30-day notice period before vacating. Short stays of 1-2 months can be arranged at a slightly higher rate on request.",
  },
  {
    question: "How do I book a room or schedule a visit?",
    answer:
      "Simply WhatsApp or call us. You can schedule an in-person tour (recommended) or request a virtual walkthrough. We respond within 30 minutes during working hours.",
  },
  {
    question: "How is safety managed at Unoloft?",
    answer:
      "24/7 security guards, CCTV on all entry/exit points, biometric access, and a resident warden round the clock. Iris House has a dedicated lady warden on-site.",
  },
];

export const MAP_CARDS: MapCard[] = [
  {
    icon: "fa-solid fa-location-dot",
    title: "Address",
    value:
      "Royal Lakend Gota - Jagatpur Road, Sarkhej - Gandhinagar Hwy, behind Gota Lake, opposite Royal Heights, Ahmedabad, Gujarat 382481.",
  },
  {
    icon: "fa-solid fa-phone",
    title: "Aster Homes",
    value: "+91 XXXXX XXXXX",
    mode: "boys",
  },
  {
    icon: "fa-solid fa-phone",
    title: "Iris House ",
    value: "+91 XXXXX XXXXX",
    mode: "girls",
  },
  {
    icon: "fa-solid fa-clock",
    title: "Office Hours",
    value: "Mon–Sat: 9 AM – 8 PM · Sun: 10 AM – 5 PM",
  },
];
