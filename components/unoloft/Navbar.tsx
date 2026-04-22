import Image from "next/image";
import Link from "next/link";
import type { Home } from "@/components/unoloft/types";
import { cn } from "@/components/unoloft/utils";

export type NavLinkItem = {
  href: string;
  label: string;
  cta?: boolean;
};

const CONSISTENT_ANCHOR_LINKS: NavLinkItem[] = [
  { href: "#pg-intro", label: "About" },
  { href: "#facilities", label: "Facilities" },
  { href: "#gallery", label: "Gallery" },
  { href: "/blogs", label: "Blogs" },
  { href: "#faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us", cta: true },
];

const CONSISTENT_ROUTE_LINKS: NavLinkItem[] = [
  { href: "/#pg-intro", label: "About" },
  { href: "/#facilities", label: "Facilities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blogs", label: "Blogs" },
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
  selectedHome: _selectedHome,
  onHomeChange: _onHomeChange,
}: NavbarProps) {
  const isRoutesMode = linkMode === "routes";
  const logoHref = "/";
  const navLinks = isRoutesMode
    ? CONSISTENT_ROUTE_LINKS
    : CONSISTENT_ANCHOR_LINKS;

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

      <ul className="nav-r">
        <li className="nav-properties">
          <Link
            href={isRoutesMode ? "/#pg-intro" : "#pg-intro"}
            className="nav-properties-trigger"
          >
            Our Properties
          </Link>
          <div className="nav-properties-menu">
            <Link href="/aster-homes">Aster Homes</Link>
            <Link href="/iris-house">Iris House</Link>
          </div>
        </li>
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
