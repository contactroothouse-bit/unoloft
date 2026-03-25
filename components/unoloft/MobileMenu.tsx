import { cn } from "@/components/unoloft/utils";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
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

        <a href="#pg-intro" onClick={onClose}>
          About
        </a>
        <a href="#facilities" onClick={onClose}>
          Facilities
        </a>
        <a href="#rooms" onClick={onClose}>
          Rooms
        </a>

        <a href="#gallery" onClick={onClose}>
          Gallery
        </a>
        <a href="#faq" onClick={onClose}>
          FAQ
        </a>
        <a href="#map-sec" onClick={onClose}>
          Location
        </a>
        <a
          href="#contact"
          onClick={onClose}
          style={{ color: "var(--brand)", fontWeight: 700 }}
        >
          Contact Us
        </a>
      </div>
    </>
  );
}
