import { cn } from "@/components/unoloft/utils";

const WHATSAPP_LINK =
  "https://wa.me/917043306301?text=Hi%20Unoloft%20Team%2C%20I%20am%20interested%20in%20PG%20accommodation.%20Please%20share%20room%20availability%2C%20pricing%2C%20and%20the%20earliest%20visit%20slot.";

type BackToTopButtonProps = {
  show: boolean;
};

export default function BackToTopButton({ show }: BackToTopButtonProps) {
  const handleClick = () => {
    if (window.matchMedia("(max-width: 580px)").matches) {
      window.open(WHATSAPP_LINK, "_blank", "noopener,noreferrer");
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      id="btt"
      className={cn(show && "on")}
      onClick={handleClick}
      aria-label="Scroll to top or open WhatsApp"
    >
      <i className="fa-brands fa-whatsapp btt-wa" />
    </button>
  );
}
