import type { Testimonial } from "@/components/unoloft/types";
import { cn } from "@/components/unoloft/utils";

type TestimonialsSectionProps = {
  items: Testimonial[];
};

export default function TestimonialsSection({
  items,
}: TestimonialsSectionProps) {
  const marqueeItems = items;

  return (
    <section id="testimonials">
      <div className="sh sh-c rv">
        <div className="s-ey">Testimonials</div>
        <h2 className="s-t">
          What Our <em>Residents Say</em>
        </h2>
        <p className="s-sub">
          Real experiences from people who call Unoloft their home.
        </p>
      </div>

      <div className="testi-marquee-clip">
        <div className="testi-marquee">
          <div className="testi-track testi-track-static">
            {marqueeItems.map((testimonial, index) => (
              <div
                className={cn(
                  "testi-c",
                  testimonial.mode === "boys" && "boys-only",
                  testimonial.mode === "girls" && "girls-only",
                )}
                key={`${testimonial.name}-${testimonial.role}-${index}`}
                style={
                  testimonial.delay
                    ? { transitionDelay: testimonial.delay }
                    : undefined
                }
              >
                <div className="t-stars">
                  {testimonial.stars.map((starClass, index) => (
                    <i
                      className={starClass}
                      key={`${testimonial.name}-star-${index}`}
                    />
                  ))}
                </div>
                <div className="t-q">{testimonial.quote}</div>
                <p className="t-text">{testimonial.text}</p>
                <div className="t-auth">
                  <div
                    className="t-av"
                    style={{ background: testimonial.avatarBg }}
                  >
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="t-name">{testimonial.name}</div>
                    <div className="t-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
