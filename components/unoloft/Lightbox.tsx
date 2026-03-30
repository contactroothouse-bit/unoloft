import Image from "next/image";
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
  return (
    <div
      id="lb"
      className={cn(open && "on")}
      onClick={(event) => {
        if (event.currentTarget === event.target) {
          onClose();
        }
      }}
    >
      <span className="lbx" onClick={onClose}>
        <i className="fa-solid fa-xmark" />
      </span>
      <span className="lba p" onClick={() => onNavigate(-1)}>
        <i className="fa-solid fa-chevron-left" />
      </span>
      <Image
        id="lb-img"
        src={image}
        alt="Unoloft property gallery enlarged preview"
        width={1600}
        height={1200}
        sizes="90vw"
        priority
      />
      <span className="lba n" onClick={() => onNavigate(1)}>
        <i className="fa-solid fa-chevron-right" />
      </span>
    </div>
  );
}
