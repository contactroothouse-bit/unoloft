import Link from "next/link";
import { cn } from "@/components/unoloft/utils";

type MenuLinkItem = {
  href: string;
  label: string;
  cta?: boolean;
};

const ANCHOR_MOBILE_LINKS: MenuLinkItem[] = [
  { href: "#pg-intro", label: "About" },
  { href: "#facilities", label: "Facilities" },
  { href: "#rooms", label: "Rooms" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
  { href: "#map-sec", label: "Location" },
  { href: "#contact", label: "Contact Us", cta: true },
];

const ROUTE_MOBILE_LINKS: MenuLinkItem[] = [
  { href: "/", label: "About" },
  { href: "/amenities", label: "Facilities" },
  { href: "/rooms", label: "Rooms" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQ" },
  { href: "/location", label: "Location" },
  { href: "/contact", label: "Contact Us", cta: true },
];

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
  linkMode?: "anchors" | "routes";
};

export default function MobileMenu({
  open,
  onClose,
  linkMode = "anchors",
}: MobileMenuProps) {
  const isRoutesMode = linkMode === "routes";
  const links = isRoutesMode ? ROUTE_MOBILE_LINKS : ANCHOR_MOBILE_LINKS;

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
