import Image from "next/image";
import { cn } from "@/components/unoloft/utils";
import { ROOMS_BY_HOME } from "@/components/unoloft/data";
import type { Home } from "@/components/unoloft/types";

type RoomsSectionProps = {
  selectedHome: Home;
  sectionId?: string;
  eyebrow?: string;
  titleStart?: string;
  titleEmphasis?: string;
  subtitle?: string;
  homeLabel?: string;
  sectionClassName?: string;
};

export default function RoomsSection({
  selectedHome,
  sectionId = "rooms",
  eyebrow = "Accommodation",
  titleStart = "Choose Your",
  titleEmphasis = "Perfect Room",
  subtitle =
    "Flexible options for every budget — fully furnished and ready to move in.",
  homeLabel,
  sectionClassName,
}: RoomsSectionProps) {
  const rooms = ROOMS_BY_HOME[selectedHome];
  const gridClassName = rooms.length === 2 ? "rooms-g rooms-g-two" : "rooms-g";

  return (
    <section id={sectionId} className={cn("rooms-section", sectionClassName)}>
      <div className="sh sh-c rv">
        <div className="s-ey">{eyebrow}</div>
        {homeLabel ? <div className="rooms-home-chip">{homeLabel}</div> : null}
        <h2 className="s-t">
          {titleStart} <em>{titleEmphasis}</em>
        </h2>
        <p className="s-sub">{subtitle}</p>
      </div>

      <div className={gridClassName}>
        {rooms.map((room) => (
          <div
            className="room-c rv"
            key={room.name}
            style={room.delay ? { transitionDelay: room.delay } : undefined}
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
