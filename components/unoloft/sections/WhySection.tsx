import { WHY_FEATURES, WHY_POINTS } from '@/components/unoloft/data';

export default function WhySection() {
  return (
    <section id="why">
      <div className="why-dot" />
      <div className="why-inner">
        <div className="why-l rvl">
          <div className="s-ey">Why Unoloft</div>
          <h2 className="s-t">
            More Than <em>Just a Room</em>
          </h2>
          <p className="s-sub">We&apos;ve built more than a PG — a home where residents grow, connect &amp; thrive.</p>

          <div className="why-pts">
            {WHY_POINTS.map((point) => (
              <div className="why-pt" key={point.title}>
                <div className="wpi">
                  <i className={point.icon} />
                </div>
                <div className="wpt">
                  <h4>{point.title}</h4>
                  <p>{point.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="why-r rvr">
          {WHY_FEATURES.map((feature) => (
            <div className="why-f" key={feature.title}>
              <span className="wfe">{feature.emoji}</span>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
