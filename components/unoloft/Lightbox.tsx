import Image from "next/image";
import { useEffect } from "react";
import { cn } from "@/components/unoloft/utils";

type LightboxProps = {
  open: boolean;
  image: string;
  onClose: () => void;
  onNavigate: (delta: number) => void;
};

export default function Lightbox({
  open,
  image,
  onClose,
  onNavigate,
}: LightboxProps) {
  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        onNavigate(-1);
      }

      if (event.key === "ArrowRight") {
        onNavigate(1);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose, onNavigate, open]);

  return (
    <div id="lb" className={cn(open && "on")} onClick={onClose}>
      <button
        type="button"
        className="lbx"
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
        aria-label="Close image preview"
      >
        <i className="fa-solid fa-xmark" />
      </button>
      <button
        type="button"
        className="lba p"
        onClick={(event) => {
          event.stopPropagation();
          onNavigate(-1);
        }}
        aria-label="Previous image"
      >
        <i className="fa-solid fa-chevron-left" />
      </button>
      <div className="lb-media" onClick={onClose}>
        <Image
          id="lb-img"
          src={image}
          alt="Unoloft property gallery enlarged preview"
          fill
          sizes="90vw"
          className="lb-img"
          priority
          onClick={(event) => event.stopPropagation()}
        />
      </div>
      <button
        type="button"
        className="lba n"
        onClick={(event) => {
          event.stopPropagation();
          onNavigate(1);
        }}
        aria-label="Next image"
      >
        <i className="fa-solid fa-chevron-right" />
      </button>
    </div>
  );
}
