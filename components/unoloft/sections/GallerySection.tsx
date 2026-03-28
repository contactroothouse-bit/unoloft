import type {
  GalleryFilter,
  GalleryItem,
  Home,
} from "@/components/unoloft/types";
import { cn } from "@/components/unoloft/utils";

type GallerySectionProps = {
  selectedHome: Home;
  items: GalleryItem[];
  filter: GalleryFilter;
  onFilterChange: (filter: GalleryFilter) => void;
  onOpenLightbox: (index: number) => void;
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
  onOpenLightbox,
}: GallerySectionProps) {
  const roomFilter = selectedHome === "aster" ? "boys-room" : "girls-room";

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
        {items.map((item, index) => {
          const visible = shouldShowItem(selectedHome, filter, item.category);

          return (
            <div
              className="gi"
              data-cat={item.category}
              key={`${item.alt}-${index}`}
              onClick={() => onOpenLightbox(index)}
              style={{ display: visible ? undefined : "none" }}
            >
              <img src={item.image} alt={item.alt} />
              <div className="gi-ov">
                <i className="fa-solid fa-expand" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
