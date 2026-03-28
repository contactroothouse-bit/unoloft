import { cn } from "@/components/unoloft/utils";

type NavbarProps = {
  navScrolled: boolean;
  onMobileOpen: () => void;
};

export default function Navbar({
  navScrolled,
  onMobileOpen,
}: NavbarProps) {
  return (
    <nav id="nav" className={cn(navScrolled && "s")}>
      <a href="#hero" className="nav-logo" aria-label="Unoloft home">
        <img
          src="/logo.png"
          alt="Unoloft"
          className="brand-logo-img"
        />
      </a>

      <ul className="nav-r">
        <li>
          <a href="#pg-intro">About</a>
        </li>
        <li>
          <a href="#facilities">Facilities</a>
        </li>

        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
        <li>
          <a href="#contact" className="nav-cta">
            Contact Us
          </a>
        </li>
      </ul>

      <div className="hbg" onClick={onMobileOpen}>
        <span />
        <span />
        <span />
      </div>
    </nav>
  );
}
