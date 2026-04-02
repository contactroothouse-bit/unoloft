import Image from "next/image";
import Link from "next/link";
import type { Home } from "@/components/unoloft/types";
import { cn } from "@/components/unoloft/utils";

export type NavLinkItem = {
  href: string;
  label: string;
  cta?: boolean;
};

const ANCHOR_DESKTOP_LINKS: NavLinkItem[] = [
  { href: "#pg-intro", label: "About" },
  { href: "/aster-homes", label: "Aster Homes" },
  { href: "/iris-house", label: "Iris House" },
  { href: "#facilities", label: "Facilities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact Us", cta: true },
];

const ROUTE_DESKTOP_LINKS: NavLinkItem[] = [
  { href: "/", label: "About" },
  { href: "/aster-homes", label: "Aster Homes" },
  { href: "/iris-house", label: "Iris House" },
  { href: "/amenities", label: "Facilities" },
  { href: "/rooms", label: "Rooms" },
  { href: "/gallery", label: "Gallery" },
  { href: "/location", label: "Location" },
  { href: "/faq", label: "FAQ" },
  { href: "/pg-near-nirma-university", label: "Near Nirma" },
  { href: "/pg-near-silver-oak", label: "Near Silver Oak" },
  { href: "/pg-in-gota-ahmedabad", label: "In Gota" },
  { href: "/pg-near-sg-highway", label: "Near SG Highway" },
  { href: "/contact", label: "Contact Us", cta: true },
];

type NavbarProps = {
  navScrolled: boolean;
  onMobileOpen: () => void;
  linkMode?: "anchors" | "routes";
  selectedHome?: Home;
  onHomeChange?: (home: Home) => void;
};

export default function Navbar({
  navScrolled,
  onMobileOpen,
  linkMode = "anchors",
  selectedHome,
  onHomeChange,
}: NavbarProps) {
  const isRoutesMode = linkMode === "routes";
  const logoHref = isRoutesMode ? "/" : "#hero";
  const navLinks = isRoutesMode ? ROUTE_DESKTOP_LINKS : ANCHOR_DESKTOP_LINKS;
  const showHomeToggle = !isRoutesMode && selectedHome && onHomeChange;

  return (
    <nav id="nav" className={cn(navScrolled && "s")}>
      {isRoutesMode ? (
        <Link href={logoHref} className="nav-logo" aria-label="Unoloft home">
          <Image
            src="/logo.png"
            alt="Unoloft premium PG in Gota Ahmedabad"
            className="brand-logo-img"
            width={240}
            height={70}
            priority
          />
        </Link>
      ) : (
        <a href={logoHref} className="nav-logo" aria-label="Unoloft home">
          <Image
            src="/logo.png"
            alt="Unoloft premium PG in Gota Ahmedabad"
            className="brand-logo-img"
            width={240}
            height={70}
            priority
          />
        </a>
      )}

      {showHomeToggle ? (
        <div className="nav-tabs" aria-label="Select home">
          <button
            type="button"
            className={cn("pg-tab", selectedHome === "aster" && "active")}
            onClick={() => onHomeChange("aster")}
          >
            Aster Homes
          </button>
          <button
            type="button"
            className={cn("pg-tab", selectedHome === "iris" && "active")}
            onClick={() => onHomeChange("iris")}
          >
            Iris House
          </button>
        </div>
      ) : null}

      <ul className="nav-r">
        {navLinks.map((item) => (
          <li key={item.href}>
            {isRoutesMode ? (
              <Link href={item.href} className={item.cta ? "nav-cta" : ""}>
                {item.label}
              </Link>
            ) : (
              <a href={item.href} className={item.cta ? "nav-cta" : ""}>
                {item.label}
              </a>
            )}
          </li>
        ))}
      </ul>

      <div className="hbg" onClick={onMobileOpen}>
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
}
