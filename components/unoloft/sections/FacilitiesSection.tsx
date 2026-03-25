import { FACILITIES_BY_HOME } from "@/components/unoloft/data";
import type { Home } from "@/components/unoloft/types";

type FacilitiesSectionProps = {
  selectedHome: Home;
};

export default function FacilitiesSection({
  selectedHome,
}: FacilitiesSectionProps) {
  const facilities = FACILITIES_BY_HOME[selectedHome];

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
        {facilities.map((facility) => (
          <div
            className="fac-c rv"
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
    </section>
  );
}
