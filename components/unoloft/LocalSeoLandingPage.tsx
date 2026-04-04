"use client";

import { useEffect, useState } from "react";
import BackToTopButton from "@/components/unoloft/BackToTopButton";
import Link from "next/link";
import Image from "next/image";
import SiteRouteNav from "@/components/unoloft/SiteRouteNav";
import SiteFooterNav from "@/components/unoloft/SiteFooterNav";
import { cn } from "@/components/unoloft/utils";
import type { Home } from "@/components/unoloft/types";

type LandingFaq = {
  question: string;
  answer: string;
};

type LocalSeoLandingPageProps = {
  h1: string;
  intro: string;
  landmarks: string[];
  mapEmbed: string;
  alsoNearLinks: Array<{ href: string; label: string }>;
  faqs: LandingFaq[];
  introImageSrc?: string;
};

export default function LocalSeoLandingPage({
  h1,
  intro,
  landmarks,
  mapEmbed,
  alsoNearLinks,
  faqs,
  introImageSrc = "/PG%20NEARS%20AREA/nirma.webp",
}: LocalSeoLandingPageProps) {
  const [selectedHome, setSelectedHome] = useState<Home>("aster");
  const [isIntroExpanded, setIsIntroExpanded] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const locationByHome = {
    aster: {
      address:
        "Royal Lakend Gota - Jagatpur Road, Sarkhej - Gandhinagar Hwy, behind Gota Lake, opposite Royal Heights, Ahmedabad, Gujarat 382481.",
      mapEmbed,
    },
    iris: {
      address:
        "Behind Nirma University, Beside Adani Pratham, Tragad, Ahmedabad.",
      mapEmbed:
        "https://www.google.com/maps?q=Iris%20House%20By%20Unoloft%20Hostel%20P.G.%20near%20Nirma%20University&output=embed",
    },
  } satisfies Record<Home, { address: string; mapEmbed: string }>;
  const currentLocation = locationByHome[selectedHome];
  const shouldShowReadMore = intro.length > 320;

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <SiteRouteNav
        selectedHome={selectedHome}
        onHomeChange={(home) => setSelectedHome(home)}
      />
      <main className="subpage-main subpage-main-local">
        <section id="pg-intro" className="subpage-section">
          <div className="subpage-intro-grid">
            <div className="sh rv in">
              <div className="s-ey">Location Guide</div>
              <h1 className="s-t">{h1}</h1>
              <p
                className={cn(
                  "s-sub local-intro-copy",
                  !isIntroExpanded && shouldShowReadMore && "collapsed",
                )}
              >
                {intro}
              </p>
              {shouldShowReadMore ? (
                <button
                  type="button"
                  className="local-read-more"
                  onClick={() => setIsIntroExpanded((current) => !current)}
                >
                  {isIntroExpanded ? "Read Less" : "Read More"}
                </button>
              ) : null}
              <div className="hero-btns local-cta-row" style={{ marginTop: 16 }}>
                <Link href="/rooms" className="local-near-link">
                  Explore Single, Double and Triple Sharing PG Rooms
                </Link>
                <Link href="/contact" className="local-near-link">
                  Check Room Availability and Book a Visit
                </Link>
              </div>
            </div>
            <div
              className="subpage-intro-shot rv in"
              style={{ transitionDelay: ".08s" }}
            >
              <Image
                src={introImageSrc}
                alt={`${h1} at Unoloft`}
                fill
                sizes="(max-width: 1080px) 100vw, 38vw"
                priority
              />
            </div>
          </div>
        </section>

        <section id="map-sec" className="subpage-section local-map-section">
          <div className="sh rv in">
            <h2 className="s-t">
              <em>Location</em>
            </h2>
            <div className="map-card local-address-card">
              <div className="map-ic">
                <i className="fa-solid fa-location-dot" />
              </div>
              <div>
                <h4>Address</h4>
                <p>{currentLocation.address}</p>
              </div>
            </div>
            <ul className="local-landmarks">
              {landmarks.map((landmark) => (
                <li key={landmark}>{landmark}</li>
              ))}
            </ul>
          </div>
          <div className="map-em rv in">
            <iframe
              src={currentLocation.mapEmbed}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Unoloft map location"
            />
          </div>
        </section>

        <section id="amenities" className="subpage-section">
          <div className="sh sh-c rv in">
            <h2 className="s-t">
              Also Near <em>These Areas</em>
            </h2>
          </div>
          <div
            className="hero-btns local-cta-row"
            style={{ justifyContent: "center" }}
          >
            {alsoNearLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="local-near-link"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </section>

        <section id="faq" className="subpage-section local-faq-layout local-faq-static">
          <div className="faq-cols">
            <div className="faq-l rv in">
              <div className="s-ey">FAQ</div>
              <h2 className="s-t">
                Frequently Asked <em>Questions</em>
              </h2>
              <p className="s-sub">
                Answers for students and working professionals comparing PG
                options in Ahmedabad.
              </p>
            </div>

            <div className="faq-list rv in" style={{ transitionDelay: ".06s" }}>
              {faqs.map((item) => (
                <article className="faq-i open" key={item.question}>
                  <h3 className="faq-q">
                    <span>{item.question}</span>
                    <div className="faq-ic" aria-hidden="true">
                      <i className="fa-solid fa-minus" />
                    </div>
                  </h3>
                  <div className="faq-a">{item.answer}</div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooterNav />
      <BackToTopButton show={showBackToTop} />
    </>
  );
}
