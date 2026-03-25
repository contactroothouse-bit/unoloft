import { cn } from "@/components/unoloft/utils";

type BackToTopButtonProps = {
  show: boolean;
};

export default function BackToTopButton({ show }: BackToTopButtonProps) {
  return (
    <button
      id="btt"
      className={cn(show && "on")}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <i className="fa-solid fa-chevron-up" />
    </button>
  );
}
