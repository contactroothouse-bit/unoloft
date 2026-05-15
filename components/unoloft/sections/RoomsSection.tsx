"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import Lightbox from "@/components/unoloft/Lightbox";
import { cn } from "@/components/unoloft/utils";
import {
  GALLERY_ITEMS_BY_HOME,
  ROOMS_BY_HOME,
} from "@/components/unoloft/data";
import type { Home, Room } from "@/components/unoloft/types";

type RoomsSectionProps = {
  selectedHome: Home;
  sectionId?: string;
  eyebrow?: string;
  titleStart?: string;
  titleEmphasis?: string;
  subtitle?: string;
  homeLabel?: string;
  sectionClassName?: string;
  showHomeSwitch?: boolean;
  onHomeChange?: (home: Home) => void;
};

export default function RoomsSection({
  selectedHome,
  sectionId = "rooms",
  eyebrow = "Accommodation",
  titleStart = "Choose Your",
  titleEmphasis = "Perfect Room",
  subtitle = "Flexible options for every budget — fully furnished and ready to move in.",
  homeLabel,
  sectionClassName,
  showHomeSwitch = false,
  onHomeChange,
}: RoomsSectionProps) {
  const rooms = ROOMS_BY_HOME[selectedHome];
  const gridClassName = rooms.length === 2 ? "rooms-g rooms-g-two" : "rooms-g";
  const roomCategory = selectedHome === "aster" ? "boys-room" : "girls-room";
  const fallbackRoomGalleryImages = useMemo(() => {
    const galleryImages = GALLERY_ITEMS_BY_HOME[selectedHome]
      .filter((item) => item.category === roomCategory)
      .map((item) => item.lightboxImage);

    return galleryImages.length
      ? galleryImages
      : rooms.map((room) => room.image);
  }, [roomCategory, rooms, selectedHome]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeGalleryImages, setActiveGalleryImages] = useState<string[]>([]);
  const [activeGalleryTitle, setActiveGalleryTitle] = useState("");

  const handleHomeChange = (home: Home) => {
    setLightboxOpen(false);
    onHomeChange?.(home);
  };

  const openRoomGallery = (room: Room) => {
    const galleryImages = room.galleryImages?.length
      ? room.galleryImages
      : fallbackRoomGalleryImages;
    const initialIndex = galleryImages.findIndex(
      (image) => image === room.image,
    );

    setActiveGalleryImages(galleryImages);
    setActiveGalleryTitle(
      `${selectedHome === "iris" ? "Iris House" : "Aster Homes"} ${room.name}`,
    );
    setLightboxIndex(initialIndex >= 0 ? initialIndex : 0);
    setLightboxOpen(true);
  };

  return (
    <section id={sectionId} className={cn("rooms-section", sectionClassName)}>
      <Lightbox
        open={lightboxOpen}
        image={
          activeGalleryImages[lightboxIndex] ?? activeGalleryImages[0] ?? ""
        }
        onClose={() => {
          setLightboxOpen(false);
          setActiveGalleryImages([]);
          setActiveGalleryTitle("");
        }}
        onNavigate={(delta) => {
          setLightboxIndex((previous) => {
            if (!activeGalleryImages.length) {
              return 0;
            }

            return (
              (previous + delta + activeGalleryImages.length) %
              activeGalleryImages.length
            );
          });
        }}
        title={activeGalleryTitle}
        currentIndex={lightboxIndex}
        totalImages={activeGalleryImages.length}
      />

      <div className="sh sh-c rv">
        <div className="s-ey">{eyebrow}</div>
        {homeLabel ? <div className="rooms-home-chip">{homeLabel}</div> : null}
        <h2 className="s-t">
          {titleStart} <em>{titleEmphasis}</em>
        </h2>
        <p className="s-sub">{subtitle}</p>
      </div>

      {showHomeSwitch ? (
        <div
          className="rooms-home-switch rooms-home-switch-inline"
          aria-label="Select property"
        >
          <button
            type="button"
            className={cn(selectedHome === "iris" && "active")}
            onClick={() => handleHomeChange("iris")}
          >
            Iris House
          </button>
          <button
            type="button"
            className={cn(selectedHome === "aster" && "active")}
            onClick={() => handleHomeChange("aster")}
          >
            Aster Homes
          </button>
        </div>
      ) : null}

      <div className={gridClassName}>
        {rooms.map((room) => (
          <div
            className="room-c rv"
            key={room.name}
            style={room.delay ? { transitionDelay: room.delay } : undefined}
            role="button"
            tabIndex={0}
            onClick={() => openRoomGallery(room)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openRoomGallery(room);
              }
            }}
            aria-label={`Open ${room.name} image gallery`}
          >
            <div className="room-img">
              <Image
                src={room.image}
                alt={`${room.alt} at Unoloft PG in Ahmedabad with AC and study setup`}
                fill
                sizes="(max-width: 860px) 100vw, 33vw"
                loading="lazy"
              />
              <span className="r-badge">{room.badge}</span>
            </div>

            <div className="room-body">
              <div className="r-label">{room.label}</div>
              <div className="r-name">{room.name}</div>
              <p className="r-desc">{room.description}</p>
              <div className="r-chips">
                {room.chips.map((chip) => (
                  <span className="r-chip" key={chip}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
