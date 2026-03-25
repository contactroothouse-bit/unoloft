import { AVAILABILITY_CARDS } from "@/components/unoloft/data";
import { cn } from "@/components/unoloft/utils";

export default function AvailabilitySection() {
  return (
    <section id="availability">
      <div className="sh sh-c rv">
        <div className="s-ey">Live Availability</div>
        <h2 className="s-t">
          Room <em>Availability</em>
        </h2>
        <p className="s-sub">
          Check real-time slot availability and secure your bed before it fills
          up. Hurry — spots go fast!
        </p>
      </div>

      <div className="avail-g">
        {AVAILABILITY_CARDS.map((card) => (
          <div
            className="avail-c rv"
            key={card.name}
            style={card.delay ? { transitionDelay: card.delay } : undefined}
          >
            <div className="av-sharing">{card.sharing}</div>
            <div className="av-name">{card.name}</div>
            <div className="av-price">
              {card.price} <small>/ month</small>
            </div>
            <div className="av-divider" />
            <div className="av-slots-lbl">Slot Availability</div>

            <div className="av-slots">
              {card.slots.map((slot, index) => (
                <div
                  className={cn("av-slot", slot)}
                  key={`${card.name}-${slot}-${index}`}
                />
              ))}
            </div>

            <div className={cn("av-status", card.statusType)}>
              <i className={card.statusIcon} /> {card.statusText}
            </div>

            {card.ctaType === "book" ? (
              <a
                href={card.ctaHref}
                className="av-book active-btn"
                target="_blank"
                rel="noreferrer"
              >
                {card.ctaText} &nbsp;
                <i className="fa-solid fa-arrow-right" />
              </a>
            ) : (
              <span className="av-book waitlist-btn">{card.ctaText}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
