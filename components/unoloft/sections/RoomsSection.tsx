import { ROOMS_BY_HOME } from "@/components/unoloft/data";
import type { Home } from "@/components/unoloft/types";

type RoomsSectionProps = {
  selectedHome: Home;
};

export default function RoomsSection({ selectedHome }: RoomsSectionProps) {
  const rooms = ROOMS_BY_HOME[selectedHome];

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

      <div className="rooms-g">
        {rooms.map((room) => (
          <div
            className="room-c rv"
            key={room.name}
            style={room.delay ? { transitionDelay: room.delay } : undefined}
          >
            <div className="room-img">
              <img src={room.image} alt={room.alt} />
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
