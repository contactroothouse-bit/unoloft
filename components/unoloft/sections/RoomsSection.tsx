import Image from "next/image";
import { ROOMS_BY_HOME } from "@/components/unoloft/data";
import type { Home } from "@/components/unoloft/types";

type RoomsSectionProps = {
  selectedHome: Home;
};

export default function RoomsSection({ selectedHome }: RoomsSectionProps) {
  const rooms = ROOMS_BY_HOME[selectedHome];
  const gridClassName = rooms.length === 2 ? "rooms-g rooms-g-two" : "rooms-g";

  return (
    <section id="rooms">
      <div className="sh sh-c rv">
        <div className="s-ey">Accommodation</div>
        <h2 className="s-t">
          Choose Your <em>Perfect Room</em>
        </h2>
        <p className="s-sub">
          Flexible options for every budget — fully furnished and ready to move
          in.
        </p>
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
