import { cn } from "@/components/unoloft/utils";

type LoaderProps = {
  done: boolean;
};

export default function Loader({ done }: LoaderProps) {
  return (
    <div id="loader" className={cn(done && "done")}>
      <img
        src="/Screenshot_2026-03-25_233347-removebg-preview.png"
        alt="Unoloft"
        className="ldr-logo"
      />
      <div className="ldr-sub">Premium PG - Ahmedabad</div>
      <div className="ldr-bar">
        <div className="ldr-fill" />
      </div>
    </div>
  );
}
