"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import Lightbox from "@/components/unoloft/Lightbox";
import type {
  GalleryFilter,
  GalleryItem,
  Home,
} from "@/components/unoloft/types";
import { cn } from "@/components/unoloft/utils";

const INITIAL_ALL_VISIBLE = 12;
const LOAD_MORE_STEP = 12;

type GallerySectionProps = {
  selectedHome: Home;
  items: GalleryItem[];
  filter: GalleryFilter;
  onFilterChange: (filter: GalleryFilter) => void;
  showHomeSwitch?: boolean;
  onHomeChange?: (home: Home) => void;
};

function shouldShowItem(
  selectedHome: Home,
  filter: GalleryFilter,
  category: Exclude<GalleryFilter, "all">,
) {
  const selectedRoomCategory =
    selectedHome === "aster" ? "boys-room" : "girls-room";

  if (filter === "all") {
    return (
      category === selectedRoomCategory ||
      category === "common" ||
      category === "facilities"
    );
  }

  if (filter === "facilities") {
    return category === "common" || category === "facilities";
  }

  return category === filter;
}

export default function GallerySection({
  selectedHome,
  items,
  filter,
  onFilterChange,
  showHomeSwitch = false,
  onHomeChange,
}: GallerySectionProps) {
  const [visibleCount, setVisibleCount] = useState(INITIAL_ALL_VISIBLE);
  const roomFilter = selectedHome === "aster" ? "boys-room" : "girls-room";
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    setVisibleCount(INITIAL_ALL_VISIBLE);
  }, [selectedHome, filter]);

  const filteredItems = useMemo(() => {
    const list = items
      .map((item, index) => ({ ...item, index }))
      .filter((item) => shouldShowItem(selectedHome, filter, item.category));

    if (filter === "all") {
      return [...list].sort((a, b) => {
        const aIsCommon = a.category === "common" || a.category === "facilities";
        const bIsCommon = b.category === "common" || b.category === "facilities";
        if (aIsCommon && !bIsCommon) return -1;
        if (!aIsCommon && bIsCommon) return 1;
        return 0;
      });
    }
    return list;
  }, [filter, items, selectedHome]);

  const lightboxImages = useMemo(
    () => filteredItems.map((item) => item.lightboxImage),
    [filteredItems],
  );

  const renderedItems =
    filter === "all" ? filteredItems.slice(0, visibleCount) : filteredItems;
  const canLoadMore =
    filter === "all" && filteredItems.length > renderedItems.length;

  return (
    <section id="gallery">
      <div className="sh sh-c rv">
        <div className="s-ey">Photo Gallery</div>
        <h2 className="s-t">
          Life at <em>Unoloft</em>
        </h2>
        <p className="s-sub">
          A visual tour of our beautiful spaces, rooms &amp; community.
        </p>
      </div>

      {showHomeSwitch ? (
        <div
          className="rooms-home-switch rooms-home-switch-inline"
          aria-label="Select property"
        >
          <button
            type="button"
            className={cn(selectedHome === "iris" && "active")}
            onClick={() => onHomeChange?.("iris")}
          >
            Iris House
          </button>
          <button
            type="button"
            className={cn(selectedHome === "aster" && "active")}
            onClick={() => onHomeChange?.("aster")}
          >
            Aster Homes
          </button>
        </div>
      ) : null}

      <div className="gal-tabs">
        <button
          className={cn("gf", filter === "all" && "active")}
          onClick={() => onFilterChange("all")}
        >
          All
        </button>
        <button
          className={cn("gf", filter === roomFilter && "active")}
          onClick={() => onFilterChange(roomFilter)}
        >
          {selectedHome === "aster" ? "Aster Rooms" : "Iris Rooms"}
        </button>
        <button
          className={cn("gf", filter === "facilities" && "active")}
          onClick={() => onFilterChange("facilities")}
        >
          Common Areas & Facilities
        </button>
      </div>

      <div className="gal-masonry" id="galGrid">
        {renderedItems.map((item, idx) => (
          <div
            className="gi"
            data-cat={item.category}
            key={`${item.alt}-${item.index}`}
            onClick={() => {
              setLightboxIndex(idx);
              setLightboxOpen(true);
            }}
          >
            <Image
              src={item.image}
              alt={`${item.alt} at Unoloft PG near Nirma University Ahmedabad`}
              width={900}
              height={1200}
              sizes="(max-width: 580px) 50vw, (max-width: 860px) 33vw, 25vw"
              loading="lazy"
            />
            <div className="gi-ov">
              <i className="fa-solid fa-expand" />
            </div>
          </div>
        ))}
      </div>

      {canLoadMore ? (
        <div className="gal-load-wrap">
          <button
            type="button"
            className="gal-load-btn"
            onClick={() =>
              setVisibleCount((current) => current + LOAD_MORE_STEP)
            }
          >
            <span>View More</span>
            <i className="fa-solid fa-arrow-down" />
          </button>
        </div>
      ) : null}

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
    </section>
  );
}
