"use client";

import { useEffect, useState } from "react";
import MobileMenu from "@/components/unoloft/MobileMenu";
import Navbar from "@/components/unoloft/Navbar";

export default function SiteRouteNav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setNavScrolled(window.scrollY > 55);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        linkMode="routes"
      />
      <Navbar
        navScrolled={navScrolled}
        onMobileOpen={() => setMobileOpen(true)}
        linkMode="routes"
      />
    </>
  );
}
