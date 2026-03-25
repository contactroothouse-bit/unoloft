import { cn } from "@/components/unoloft/utils";

type LoaderProps = {
  done: boolean;
};

export default function Loader({ done }: LoaderProps) {
  return (
    <div id="loader" className={cn(done && "done")}>
      <div className="ldr-name">
        Uno<span>loft</span>
      </div>
      <div className="ldr-sub">Premium PG · Ahmedabad</div>
      <div className="ldr-bar">
        <div className="ldr-fill" />
      </div>
    </div>
  );
}
