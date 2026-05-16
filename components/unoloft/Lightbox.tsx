import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/components/unoloft/utils";

type LightboxProps = {
  open: boolean;
  image: string;
  onClose: () => void;
  onNavigate: (delta: number) => void;
  title?: string;
  currentIndex?: number;
  totalImages?: number;
};

export default function Lightbox({
  open,
  image,
  onClose,
  onNavigate,
  title,
  currentIndex,
  totalImages,
}: LightboxProps) {
  const hasImage = Boolean(image);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const handleNavigate = (delta: number) => {
    setIsImageLoading(true);
    onNavigate(delta);
  };

  useEffect(() => {
    if (!open || !image) {
      setIsImageLoading(false);
      return;
    }

    setIsImageLoading(true);
  }, [image, open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowLeft") {
        handleNavigate(-1);
      }

      if (event.key === "ArrowRight") {
        handleNavigate(1);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose, open]);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    touchStartXRef.current = touch.clientX;
    touchStartYRef.current = touch.clientY;
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null || touchStartYRef.current === null) {
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartXRef.current;
    const deltaY = touch.clientY - touchStartYRef.current;

    touchStartXRef.current = null;
    touchStartYRef.current = null;

    if (Math.abs(deltaX) < 40 || Math.abs(deltaX) <= Math.abs(deltaY)) {
      return;
    }

    handleNavigate(deltaX > 0 ? -1 : 1);
  };

  if (!open || !hasImage) {
    return null;
  }

  return (
    <div id="lb" className={cn(open && "on")} onClick={onClose}>
      {typeof totalImages === "number" && totalImages > 1 ? (
        <div className="lb-count" aria-live="polite">
          {title ? <span className="lb-count-title">{title}</span> : null}
          <span>
            {(currentIndex ?? 0) + 1} / {totalImages}
          </span>
        </div>
      ) : title ? (
        <div className="lb-count" aria-live="polite">
          <span className="lb-count-title">{title}</span>
        </div>
      ) : null}
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
        <span>Close</span>
      </button>
      <div
        className="lb-media"
        onClick={onClose}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {isImageLoading ? (
          <div
            className="lb-loader"
            aria-live="polite"
            aria-label="Loading image"
          >
            <div className="lb-loader-ring" />
          </div>
        ) : null}
        <button
          type="button"
          className="lba p"
          onClick={(event) => {
            event.stopPropagation();
            handleNavigate(-1);
          }}
          aria-label="Previous image"
        >
          <i className="fa-solid fa-chevron-left" />
        </button>
        <Image
          key={image}
          id="lb-img"
          src={image}
          alt={
            title
              ? `${title} enlarged preview`
              : "Unoloft property gallery enlarged preview"
          }
          fill
          sizes="90vw"
          className={cn("lb-img", isImageLoading && "lb-img-loading")}
          onLoad={() => setIsImageLoading(false)}
          onClick={(event) => event.stopPropagation()}
        />
        <button
          type="button"
          className="lba n"
          onClick={(event) => {
            event.stopPropagation();
            handleNavigate(1);
          }}
          aria-label="Next image"
        >
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>
    </div>
  );
}
