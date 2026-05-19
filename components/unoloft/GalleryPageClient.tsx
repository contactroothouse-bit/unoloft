"use client";

import { useState } from "react";
import GallerySection from "@/components/unoloft/sections/GallerySection";
import { GALLERY_ITEMS_BY_HOME } from "@/components/unoloft/data";
import type { GalleryFilter, Home } from "@/components/unoloft/types";

type GalleryPageClientProps = {
  selectedHome: Home;
};

export default function GalleryPageClient({
  selectedHome,
}: GalleryPageClientProps) {
  const [filter, setFilter] = useState<GalleryFilter>("all");
  const items = GALLERY_ITEMS_BY_HOME[selectedHome];

  return (
    <GallerySection
      selectedHome={selectedHome}
      items={items}
      filter={filter}
      onFilterChange={setFilter}
    />
  );
}
