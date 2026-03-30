import Link from "next/link";
import Image from "next/image";
import SiteRouteNav from "@/components/unoloft/SiteRouteNav";
import SiteFooterNav from "@/components/unoloft/SiteFooterNav";

type LandingFaq = {
  question: string;
  answer: string;
};

type LocalSeoLandingPageProps = {
  h1: string;
  intro: string;
  audienceCta: string;
  landmarks: string[];
  mapEmbed: string;
  alsoNearLinks: Array<{ href: string; label: string }>;
  faqs: LandingFaq[];
};

const FEATURE_ITEMS = [
  "High-speed WiFi for classes, projects, and remote work",
  "Home-cooked meals served daily in a hygienic kitchen",
  "AC furnished rooms with wardrobe, bed, and study table",
  "24/7 security, CCTV monitoring, and resident support",
  "Gym, housekeeping, filtered water, and parking",
];

export default function LocalSeoLandingPage({
  h1,
  intro,
  audienceCta,
  landmarks,
  mapEmbed,
  alsoNearLinks,
  faqs,
}: LocalSeoLandingPageProps) {
  return (
    <>
      <SiteRouteNav />
      <main className="subpage-main subpage-main-local">
        <section id="pg-intro" className="subpage-section">
          <div className="sh rv in">
            <div className="s-ey">Local SEO Page</div>
            <h1 className="s-t">{h1}</h1>
            <p className="s-sub">{intro}</p>
          </div>
        </section>

        <section id="gallery" className="subpage-section">
          <div className="sh sh-c rv in">
            <h2 className="s-t">
              See Your Future <em>Stay Experience</em>
            </h2>
          </div>
          <div className="pg-grid">
            <div className="pg-item rv in">
              <div className="pg-card active">
                <Image
                  src="/gallery/IMG-20260201-WA0028.jpg"
                  alt="Premium room and common setup at Unoloft Aster Homes in Gota Ahmedabad"
                  fill
                  sizes="(max-width: 860px) 100vw, 50vw"
                />
                <div className="pg-ov" />
                <div className="pg-con">
                  <div className="pg-name">Aster Homes</div>
                  <p className="pg-desc">
                    Student-first rooms and amenities designed for comfort,
                    productivity, and easy daily commute.
                  </p>
                  <Link href="/aster-homes" className="pg-link">
                    View Aster Homes <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="pg-item rv in">
              <div className="pg-card active">
                <Image
                  src="/Iris%20homes/Iris%20homes/IMG-20260322-WA0001.jpg"
                  alt="Furnished interiors and facilities at Unoloft Iris House near Silver Oak"
                  fill
                  sizes="(max-width: 860px) 100vw, 50vw"
                />
                <div className="pg-ov" />
                <div className="pg-con">
                  <div className="pg-name">Iris House</div>
                  <p className="pg-desc">
                    Premium interiors, dependable meals, and secure living near
                    major colleges and SG Highway.
                  </p>
                  <Link href="/iris-house" className="pg-link">
                    View Iris House <i className="fa-solid fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="facilities" className="subpage-section">
          <div className="sh sh-c rv in">
            <h2 className="s-t">
              Student-Friendly <em>Features</em>
            </h2>
          </div>
          <div className="fac-grid">
            {FEATURE_ITEMS.map((feature) => (
              <div className="fac-c rv in" key={feature}>
                <div className="fac-n">{feature}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="rooms" className="subpage-section">
          <div className="sh sh-c rv in">
            <h2 className="s-t">
              Room Options &amp; <em>Visit CTA</em>
            </h2>
            <p className="s-sub">
              Single sharing from INR 16,500, double sharing from INR 14,500, and
              triple sharing from INR 11,000 per month (subject to availability).
            </p>
            <p className="s-sub">{audienceCta}</p>
          </div>
          <div className="hero-btns local-cta-row" style={{ justifyContent: "center" }}>
            <a
              href="https://wa.me/917043306301?text=Hi%20Unoloft%2C%20I%20want%20to%20book%20a%20room%20visit."
              target="_blank"
              className="btn-ghost"
              rel="noreferrer"
            >
              WhatsApp for Availability
            </a>
            <Link href="/aster-homes" className="btn-ora">
              Explore Aster Homes
            </Link>
            <Link href="/iris-house" className="btn-ora">
              Explore Iris House
            </Link>
          </div>
        </section>

        <section id="map-sec" className="subpage-section local-map-section">
          <div className="sh rv in">
            <h2 className="s-t">
              Distance &amp; <em>Connectivity</em>
            </h2>
            <ul className="local-landmarks">
              {landmarks.map((landmark) => (
                <li key={landmark}>{landmark}</li>
              ))}
            </ul>
          </div>
          <div className="map-em rv in">
            <iframe
              src={mapEmbed}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Unoloft map location"
            />
          </div>
        </section>

        <section id="faq" className="subpage-section">
          <div className="faq-cols local-faq-layout">
            <div className="faq-l">
              <h2 className="s-t">
                FAQs for This <em>Location</em>
              </h2>
            </div>
            <div className="faq-list">
              {faqs.map((item) => (
                <details className="faq-i open" key={item.question}>
                  <summary className="faq-q">
                    <span>{item.question}</span>
                  </summary>
                  <div className="faq-a" style={{ maxHeight: "240px", paddingBottom: "16px" }}>
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="amenities" className="subpage-section">
          <div className="sh sh-c rv in">
            <h2 className="s-t">
              Also Near <em>These Areas</em>
            </h2>
          </div>
          <div className="hero-btns local-cta-row" style={{ justifyContent: "center" }}>
            {alsoNearLinks.map((item) => (
              <Link key={item.href} href={item.href} className="btn-ora">
                {item.label}
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooterNav />
    </>
  );
}
