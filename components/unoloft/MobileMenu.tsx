import Link from "next/link";
import type { Home } from "@/components/unoloft/types";
import { cn } from "@/components/unoloft/utils";

type MenuLinkItem = {
  href: string;
  label: string;
  cta?: boolean;
};

const ANCHOR_MOBILE_LINKS: MenuLinkItem[] = [
  { href: "#pg-intro", label: "About" },
  { href: "/aster-homes", label: "Aster Homes" },
  { href: "/iris-house", label: "Iris House" },
  { href: "#facilities", label: "Facilities" },
  { href: "#rooms", label: "Rooms" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
  { href: "#map-sec", label: "Location" },
  { href: "#contact", label: "Contact Us", cta: true },
];

const ROUTE_MOBILE_LINKS: MenuLinkItem[] = [
  { href: "/", label: "About" },
  { href: "/aster-homes", label: "Aster Homes" },
  { href: "/iris-house", label: "Iris House" },
  { href: "/amenities", label: "Facilities" },
  { href: "/rooms", label: "Rooms" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/location", label: "Location" },
  { href: "/pg-near-nirma-university", label: "PG near Nirma University" },
  { href: "/pg-near-silver-oak", label: "PG near Silver Oak University" },
  { href: "/pg-in-gota-ahmedabad", label: "PG in Gota Ahmedabad" },
  { href: "/pg-near-sg-highway", label: "PG near SG Highway" },
  { href: "/contact", label: "Contact Us", cta: true },
];

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  linkMode?: "anchors" | "routes";
  selectedHome?: Home;
  onHomeChange?: (home: Home) => void;
};

export default function MobileMenu({
  open,
  onClose,
  linkMode = "anchors",
  selectedHome,
  onHomeChange,
}: MobileMenuProps) {
  const isRoutesMode = linkMode === "routes";
  const links = isRoutesMode ? ROUTE_MOBILE_LINKS : ANCHOR_MOBILE_LINKS;
  const showHomeToggle = !isRoutesMode && selectedHome && onHomeChange;

  return (
    <>
      <div
        className={cn("mob-ov", open && "on")}
        id="mobOv"
        onClick={onClose}
      />
      <div className={cn("mob-m", open && "on")} id="mobM">
        <span className="mob-x" onClick={onClose}>
          <i className="fa-solid fa-xmark" />
        </span>

        {showHomeToggle ? (
          <div className="mob-tabs-w" aria-label="Select home">
            <button
              type="button"
              className={cn("pg-tab", selectedHome === "aster" && "active")}
              onClick={() => {
                onHomeChange("aster");
                onClose();
              }}
            >
              Aster Homes
            </button>
            <button
              type="button"
              className={cn("pg-tab", selectedHome === "iris" && "active")}
              onClick={() => {
                onHomeChange("iris");
                onClose();
              }}
            >
              Iris House
            </button>
          </div>
        ) : null}

        {links.map((item) =>
          isRoutesMode ? (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              style={item.cta ? { color: "var(--brand)", fontWeight: 700 } : undefined}
            >
              {item.label}
            </Link>
          ) : (
            <a
              key={item.href}
              href={item.href}
              onClick={onClose}
              style={item.cta ? { color: "var(--brand)", fontWeight: 700 } : undefined}
            >
              {item.label}
            </a>
          ),
        )}
      </div>
    </>
  );
}
