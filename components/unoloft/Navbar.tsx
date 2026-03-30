import Image from "next/image";
import Link from "next/link";
import { cn } from "@/components/unoloft/utils";

export type NavLinkItem = {
  href: string;
  label: string;
  cta?: boolean;
};

const ANCHOR_DESKTOP_LINKS: NavLinkItem[] = [
  { href: "#pg-intro", label: "About" },
  { href: "#facilities", label: "Facilities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact Us", cta: true },
];

const ROUTE_DESKTOP_LINKS: NavLinkItem[] = [
  { href: "/", label: "About" },
  { href: "/amenities", label: "Facilities" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us", cta: true },
];

type NavbarProps = {
  navScrolled: boolean;
  onMobileOpen: () => void;
  linkMode?: "anchors" | "routes";
};

export default function Navbar({
  navScrolled,
  onMobileOpen,
  linkMode = "anchors",
}: NavbarProps) {
  const isRoutesMode = linkMode === "routes";
  const logoHref = isRoutesMode ? "/" : "#hero";
  const navLinks = isRoutesMode ? ROUTE_DESKTOP_LINKS : ANCHOR_DESKTOP_LINKS;

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
