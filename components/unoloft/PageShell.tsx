"use client";

import { useEffect, useState, type ReactNode } from "react";
import BackToTopButton from "@/components/unoloft/BackToTopButton";
import SiteFooterNav from "@/components/unoloft/SiteFooterNav";
import SiteRouteNav from "@/components/unoloft/SiteRouteNav";

type PageShellProps = {
  children: ReactNode;
};

export default function PageShell({ children }: PageShellProps) {
  const [showBackToTop, setShowBackToTop] = useState(false);

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

    const elements = document.querySelectorAll(
      ".subpage-main .rv, .subpage-main .rvl, .subpage-main .rvr",
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

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
      <SiteRouteNav />
      <main className="subpage-main">{children}</main>
      <SiteFooterNav />
      <BackToTopButton show={showBackToTop} />
    </>
  );
}
