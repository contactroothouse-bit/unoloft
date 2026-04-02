"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useState } from "react";
import BackToTopButton from "@/components/unoloft/BackToTopButton";
import Lightbox from "@/components/unoloft/Lightbox";
import MobileMenu from "@/components/unoloft/MobileMenu";
import Navbar from "@/components/unoloft/Navbar";
import {
  GALLERY_ITEMS_BY_HOME,
  TESTIMONIALS_BY_HOME,
} from "@/components/unoloft/data";
import ContactSection from "@/components/unoloft/sections/ContactSection";
import FacilitiesSection from "@/components/unoloft/sections/FacilitiesSection";
import FooterSection from "@/components/unoloft/sections/FooterSection";
import FaqSection from "@/components/unoloft/sections/FaqSection";
import GallerySection from "@/components/unoloft/sections/GallerySection";
import HeroSection from "@/components/unoloft/sections/HeroSection";
import MapSection from "@/components/unoloft/sections/MapSection";
import PgIntroSection from "@/components/unoloft/sections/PgIntroSection";
import RoomsSection from "@/components/unoloft/sections/RoomsSection";
import TestimonialsSection from "@/components/unoloft/sections/TestimonialsSection";
import type { GalleryFilter, Home, Mode } from "@/components/unoloft/types";

const SCROLL_OFFSET = 75;

export default function UnoloftPage() {
  const [selectedHome, setSelectedHome] = useState<Home>("aster");
  const mode: Mode = "all";
  const [galleryFilter, setGalleryFilter] = useState<GalleryFilter>("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const galleryItems = GALLERY_ITEMS_BY_HOME[selectedHome];
  const lightboxImages = useMemo(
    () => galleryItems.map((item) => item.lightboxImage),
    [galleryItems],
  );

  const onLightboxOpen = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const onLightboxClose = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const onLightboxNavigate = useCallback(
    (delta: number) => {
      setLightboxIndex(
        (previous) =>
          (previous + delta + lightboxImages.length) % lightboxImages.length,
      );
    },
    [lightboxImages.length],
  );

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setNavScrolled(y > 55);
      setShowBackToTop(y > 400);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      { threshold: 0.12 },
    );

    const elements = document.querySelectorAll(".rv,.rvl,.rvr");
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [selectedHome]);

  useEffect(() => {
    if (lightboxOpen || mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, mobileOpen]);

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-mode",
      selectedHome === "aster" ? "boys" : "girls",
    );

    return () => {
      document.documentElement.setAttribute("data-mode", "all");
    };
  }, [selectedHome]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onLightboxClose();
      }

      if (event.key === "ArrowLeft") {
        onLightboxNavigate(-1);
      }

      if (event.key === "ArrowRight") {
        onLightboxNavigate(1);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onLightboxClose, onLightboxNavigate]);

  useEffect(() => {
    const anchors = Array.from(
      document.querySelectorAll('a[href^="#"]'),
    ) as HTMLAnchorElement[];

    const listeners = anchors.map((anchor) => {
      const handler = (event: Event) => {
        const href = anchor.getAttribute("href");
        if (!href || href === "#") {
          return;
        }

        const target = document.querySelector(href) as HTMLElement | null;
        if (target) {
          event.preventDefault();
          window.scrollTo({
            top:
              target.getBoundingClientRect().top +
              window.scrollY -
              SCROLL_OFFSET,
            behavior: "smooth",
          });
        }
      };

      anchor.addEventListener("click", handler);
      return { anchor, handler };
    });

    return () => {
      listeners.forEach(({ anchor, handler }) => {
        anchor.removeEventListener("click", handler);
      });
    };
  }, []);

  return (
    <>
      <Lightbox
        open={lightboxOpen}
        image={lightboxImages[lightboxIndex] ?? ""}
        onClose={onLightboxClose}
        onNavigate={onLightboxNavigate}
      />

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        selectedHome={selectedHome}
        onHomeChange={(home) => {
          setSelectedHome(home);
          setGalleryFilter("all");
        }}
      />

      <Navbar
        navScrolled={navScrolled}
        onMobileOpen={() => setMobileOpen(true)}
        selectedHome={selectedHome}
        onHomeChange={(home) => {
          setSelectedHome(home);
          setGalleryFilter("all");
        }}
      />

      <HeroSection mode={mode} selectedHome={selectedHome} />
      <PgIntroSection
        selectedHome={selectedHome}
        onHomeChange={(home) => {
          setSelectedHome(home);
          setGalleryFilter("all");
        }}
      />
      <FacilitiesSection selectedHome={selectedHome} />
      <RoomsSection selectedHome={selectedHome} />

      <GallerySection
        selectedHome={selectedHome}
        items={galleryItems}
        filter={galleryFilter}
        onFilterChange={setGalleryFilter}
        onOpenLightbox={onLightboxOpen}
      />

      <TestimonialsSection items={TESTIMONIALS_BY_HOME[selectedHome]} />

      <FaqSection
        openIndex={openFaqIndex}
        onToggle={(index) => {
          setOpenFaqIndex((previous) => (previous === index ? null : index));
        }}
      />

      <MapSection selectedHome={selectedHome} />
      <ContactSection selectedHome={selectedHome} />
      <section id="location-explore">
        <div className="sh sh-c rv">
          <div className="s-ey">Explore by Location</div>
          <h2 className="s-t">
            Find Unoloft <em>Near You</em>
          </h2>
        </div>
        <div className="loc-exp-links rv">
          <Link href="/pg-near-nirma-university">PG near Nirma University</Link>
          <Link href="/pg-near-silver-oak">PG near Silver Oak University</Link>
          <Link href="/pg-in-gota-ahmedabad">PG in Gota Ahmedabad</Link>
          <Link href="/pg-near-sg-highway">PG near SG Highway</Link>
        </div>
      </section>
      <FooterSection />
      <BackToTopButton show={showBackToTop} />
    </>
  );
}
