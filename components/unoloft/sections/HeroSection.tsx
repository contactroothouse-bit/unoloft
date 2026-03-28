import { useEffect, useRef, useState } from "react";
import { HERO_MOSAIC_CARDS, HERO_TEXT } from "@/components/unoloft/data";
import type { Home, Mode } from "@/components/unoloft/types";

type HeroSectionProps = {
  mode: Mode;
  selectedHome: Home;
};

export default function HeroSection({ mode, selectedHome }: HeroSectionProps) {
  const heroText = HERO_TEXT[mode];
  const [sources, setSources] = useState(() =>
    HERO_MOSAIC_CARDS.map((card) => card.sources[selectedHome]),
  );
  const [fading, setFading] = useState(false);
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      return;
    }

    setFading(true);
    const timer = window.setTimeout(() => {
      setSources(HERO_MOSAIC_CARDS.map((card) => card.sources[selectedHome]));
      setFading(false);
    }, 280);

    return () => window.clearTimeout(timer);
  }, [mode, selectedHome]);

  return (
    <section id="hero">
      <div className="hero-noise" />
      <div className="hero-glow" />

      <div className="hero-inner">
        <div className="hero-l">
          <div className="hero-ey" id="hero-ey">
            {heroText.ey}
          </div>
          <div className="h1a" id="hero-h1a">
            {heroText.h1}
          </div>
          <div className="h1b" id="hero-h1b">
            {heroText.h2}
          </div>

          <div className="hero-loc">
            <i
              className="fa-solid fa-location-dot"
              style={{ color: "var(--brand)" }}
            />
            <span>
              <strong>Ahmedabad&apos;s</strong> finest paying guest
              accommodation
            </span>
          </div>

          <div className="hero-pills">
            <div className="h-pill">
              <i className="fa-solid fa-wifi" /> High-Speed WiFi
            </div>
            <div className="h-pill">
              <i className="fa-solid fa-bowl-food" /> Home-cooked Meals
            </div>
            <div className="h-pill">
              <i className="fa-solid fa-dumbbell" /> Gym
            </div>
            <div className="h-pill">
              <i className="fa-solid fa-book-open" /> Study Room
            </div>
            <div className="h-pill">
              <i className="fa-solid fa-shield-halved" /> 24/7 Security
            </div>
            <div className="h-pill">
              <i className="fa-solid fa-car" /> Free Parking
            </div>
          </div>

          <div className="hero-btns">
            <a href="#pg-intro" className="btn-ora">
              <i className="fa-solid fa-building" /> Explore Homes
            </a>
            <a
              href="https://wa.me/917043306301?text=Hi%20Unoloft%20Team%2C%20I%20am%20interested%20in%20PG%20accommodation.%20Please%20share%20room%20availability%2C%20pricing%2C%20and%20the%20earliest%20visit%20slot."
              target="_blank"
              className="btn-ghost"
              rel="noreferrer"
            >
              <i className="fa-brands fa-whatsapp" /> WhatsApp Us
            </a>
          </div>

          <div className="hero-stats">
            <div className="hs">
              <div className="hs-n">
                1000<em>+</em>
              </div>
              <div className="hs-l">Happy Residents</div>
            </div>
            <div className="hs-div" />
            <div className="hs">
              <div className="hs-n">
                5<em>yr</em>
              </div>
              <div className="hs-l">Of Excellence</div>
            </div>
            <div className="hs-div" />
            <div className="hs">
              <div className="hs-n">
                10<em>+</em>
              </div>
              <div className="hs-l">Amenities</div>
            </div>
            <div className="hs-div" />
            <div className="hs">
              <div className="hs-n">
                4.9<em>★</em>
              </div>
              <div className="hs-l">Avg Rating</div>
            </div>
          </div>
        </div>

        <div className="hero-r">
          {HERO_MOSAIC_CARDS.map((card, index) => (
            <div className={`mc ${card.cardClass}`} key={card.id}>
              <img
                id={card.id}
                src={sources[index]}
                alt={card.alt}
                style={{ opacity: fading ? 0 : 1 }}
              />
            </div>
          ))}

          <div className="mc-badge mb1">
            <i className="fa-solid fa-star" /> 4.9 Resident Rating
          </div>
          <div className="mc-badge mb2">
            <i className="fa-solid fa-shield-halved" /> 100% Safe &amp; Verified
          </div>
        </div>
      </div>
    </section>
  );
}
