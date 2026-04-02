"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MobileMenu from "@/components/unoloft/MobileMenu";
import Navbar from "@/components/unoloft/Navbar";
import type { Home } from "@/components/unoloft/types";

function getSelectedHomeFromPath(pathname: string): Home {
  return pathname.includes("iris") ? "iris" : "aster";
}

type SiteRouteNavProps = {
  selectedHome?: Home;
  onHomeChange?: (home: Home) => void;
};

export default function SiteRouteNav({
  selectedHome: controlledSelectedHome,
  onHomeChange,
}: SiteRouteNavProps = {}) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [navScrolled, setNavScrolled] = useState(false);
  const [internalSelectedHome, setInternalSelectedHome] = useState<Home>(
    getSelectedHomeFromPath(pathname),
  );
  const selectedHome = controlledSelectedHome ?? internalSelectedHome;
  const isControlled = Boolean(onHomeChange);

  useEffect(() => {
    if (!isControlled) {
      setInternalSelectedHome(getSelectedHomeFromPath(pathname));
    }
  }, [isControlled, pathname]);

  const handleHomeChange = (home: Home) => {
    if (onHomeChange) {
      onHomeChange(home);
      return;
    }

    setInternalSelectedHome(home);
    router.push(home === "aster" ? "/aster-homes" : "/iris-house");
  };

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
        selectedHome={selectedHome}
        onHomeChange={handleHomeChange}
      />
      <Navbar
        navScrolled={navScrolled}
        onMobileOpen={() => setMobileOpen(true)}
        linkMode="routes"
        selectedHome={selectedHome}
        onHomeChange={handleHomeChange}
      />
    </>
  );
}
