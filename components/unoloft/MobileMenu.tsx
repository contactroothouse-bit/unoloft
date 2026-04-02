import Link from "next/link";
import { cn } from "@/components/unoloft/utils";

type MenuLinkItem = {
  href: string;
  label: string;
  cta?: boolean;
};

const CONSISTENT_ANCHOR_LINKS: MenuLinkItem[] = [
  { href: "#pg-intro", label: "About" },
  { href: "/aster-homes", label: "Aster Homes" },
  { href: "/iris-house", label: "Iris House" },
  { href: "#facilities", label: "Facilities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us", cta: true },
];

const CONSISTENT_ROUTE_LINKS: MenuLinkItem[] = [
  { href: "/#pg-intro", label: "About" },
  { href: "/aster-homes", label: "Aster Homes" },
  { href: "/iris-house", label: "Iris House" },
  { href: "/#facilities", label: "Facilities" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#faq", label: "FAQ" },
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
  const links = isRoutesMode ? CONSISTENT_ROUTE_LINKS : CONSISTENT_ANCHOR_LINKS;

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

        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            style={
              item.cta ? { color: "var(--brand)", fontWeight: 700 } : undefined
            }
          >
            {item.label}
          </Link>
        ))}
      </div>
    </>
  );
}
