"use client";

import { useMemo, useState } from "react";
import GallerySection from "@/components/unoloft/sections/GallerySection";
import Lightbox from "@/components/unoloft/Lightbox";
import { GALLERY_ITEMS_BY_HOME } from "@/components/unoloft/data";
import type { GalleryFilter, Home } from "@/components/unoloft/types";

type GalleryPageClientProps = {
  selectedHome: Home;
};

export default function GalleryPageClient({
  selectedHome,
}: GalleryPageClientProps) {
  const [filter, setFilter] = useState<GalleryFilter>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const items = GALLERY_ITEMS_BY_HOME[selectedHome];

  const lightboxImages = useMemo(
    () => items.map((item) => item.lightboxImage),
    [items],
  );

  return (
    <>
      <GallerySection
        selectedHome={selectedHome}
        items={items}
        filter={filter}
        onFilterChange={setFilter}
        onOpenLightbox={(index) => {
          setLightboxIndex(index);
          setLightboxOpen(true);
        }}
      />
      <Lightbox
        open={lightboxOpen}
        image={lightboxImages[lightboxIndex] ?? ""}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(delta) =>
          setLightboxIndex(
            (previous) =>
              (previous + delta + lightboxImages.length) % lightboxImages.length,
          )
        }
      />
    </>
  );
}
