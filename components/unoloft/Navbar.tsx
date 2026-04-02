import Image from "next/image";
import Link from "next/link";
import { cn } from "@/components/unoloft/utils";
import type { Home } from "@/components/unoloft/types";

export type NavLinkItem = {
  href: string;
  label: string;
  cta?: boolean;
};

const CONSISTENT_ANCHOR_LINKS: NavLinkItem[] = [
  { href: "#pg-intro", label: "About" },
  { href: "/aster-homes", label: "Aster Homes" },
  { href: "/iris-house", label: "Iris House" },
  { href: "#facilities", label: "Facilities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us", cta: true },
];

const CONSISTENT_ROUTE_LINKS: NavLinkItem[] = [
  { href: "/#pg-intro", label: "About" },
  { href: "/aster-homes", label: "Aster Homes" },
  { href: "/iris-house", label: "Iris House" },
  { href: "/#facilities", label: "Facilities" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#faq", label: "FAQ" },
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
  const logoHref = "/";
  const navLinks = isRoutesMode
    ? CONSISTENT_ROUTE_LINKS
    : CONSISTENT_ANCHOR_LINKS;
  const showHomeToggle =
    !isRoutesMode && Boolean(selectedHome) && Boolean(onHomeChange);

  return (
    <nav id="nav" className={cn(navScrolled && "s")}>
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

      {showHomeToggle ? (
        <div className="nav-tabs" role="tablist" aria-label="Choose home">
          <button
            type="button"
            className={cn("pg-tab", selectedHome === "aster" && "active")}
            onClick={() => onHomeChange?.("aster")}
            role="tab"
            aria-selected={selectedHome === "aster"}
          >
            Aster Homes
          </button>
          <button
            type="button"
            className={cn("pg-tab", selectedHome === "iris" && "active")}
            onClick={() => onHomeChange?.("iris")}
            role="tab"
            aria-selected={selectedHome === "iris"}
          >
            Iris House
          </button>
        </div>
      ) : null}

      <ul className="nav-r">
        {navLinks.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className={item.cta ? "nav-cta" : ""}>
              {item.label}
            </Link>
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
