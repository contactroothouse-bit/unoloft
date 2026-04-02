"use client";

import { useEffect, useState } from "react";
import { FACILITIES_BY_HOME } from "@/components/unoloft/data";
import type { Home } from "@/components/unoloft/types";

type FacilitiesSectionProps = {
  selectedHome: Home;
};

const MOBILE_INITIAL_COUNT = 6;

export default function FacilitiesSection({
  selectedHome,
}: FacilitiesSectionProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [visibleCount, setVisibleCount] = useState(MOBILE_INITIAL_COUNT);
  const facilities = FACILITIES_BY_HOME[selectedHome];
  const visibleFacilities = isMobile
    ? facilities.slice(0, visibleCount)
    : facilities;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 580px)");

    const updateIsMobile = () => {
      setIsMobile(mediaQuery.matches);
      setVisibleCount(MOBILE_INITIAL_COUNT);
    };

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, [selectedHome]);

  return (
    <section id="facilities">
      <div className="sh sh-c rv">
        <div className="s-ey">Amenities</div>
        <h2 className="s-t">
          World-Class <em>Facilities</em>
        </h2>
        <p className="s-sub">
          Everything you need for a comfortable, productive, and joyful stay —
          all under one roof.
        </p>
      </div>

      <div className="fac-grid">
        {visibleFacilities.map((facility) => (
          <div
            className={`fac-c rv${isMobile ? " in" : ""}`}
            key={facility.name}
            style={{ transitionDelay: facility.delay }}
          >
            <div className="fac-ic">
              <i className={facility.icon} />
            </div>
            <div className="fac-n">{facility.name}</div>
            <div className="fac-d">{facility.description}</div>
          </div>
        ))}
      </div>

      {isMobile && visibleCount < facilities.length ? (
        <div className="fac-load-more-wrap rv in">
          <button
            type="button"
            className="fac-load-more"
            onClick={() => setVisibleCount((current) => current + MOBILE_INITIAL_COUNT)}
          >
            Load More Amenities
          </button>
        </div>
      ) : null}
    </section>
  );
}
