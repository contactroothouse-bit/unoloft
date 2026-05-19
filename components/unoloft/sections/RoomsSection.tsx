"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
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

interface RoomCardProps {
  room: Room;
  onClick: () => void;
}

function RoomCard({ room, onClick }: RoomCardProps) {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (hovered) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Video play interrupted/failed:", error);
        });
      }
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [hovered]);

  return (
    <div
      className="room-c rv"
      style={room.delay ? { transitionDelay: room.delay } : undefined}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick();
        }
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`Open ${room.name} image gallery`}
    >
      <div className="room-img">
        <Image
          src={room.image}
          alt={`${room.alt} at Unoloft PG in Ahmedabad with AC and study setup`}
          fill
          sizes="(max-width: 860px) 100vw, 33vw"
          loading="lazy"
          style={{
            transform: hovered && room.video ? "scale(1.06)" : undefined,
            transition: "transform 0.5s ease",
          }}
        />
        {room.video && (
          <video
            ref={videoRef}
            src={room.video}
            muted
            loop
            playsInline
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "contain",
              backgroundColor: "#000",
              opacity: hovered ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          />
        )}
        <span className="r-badge" style={{ zIndex: 2 }}>{room.badge}</span>
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
  );
}

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
          <RoomCard
            key={room.name}
            room={room}
            onClick={() => openRoomGallery(room)}
          />
        ))}
      </div>
    </section>
  );
}
