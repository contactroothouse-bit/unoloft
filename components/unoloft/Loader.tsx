import Image from "next/image";
import { cn } from "@/components/unoloft/utils";

type LoaderProps = {
  done: boolean;
};

export default function Loader({ done }: LoaderProps) {
  return (
    <div id="loader" className={cn(done && "done")}>
      <Image
        src="/logo.png"
        alt="Unoloft premium PG Ahmedabad logo"
        className="ldr-logo"
        width={180}
        height={56}
        priority
      />
      <div className="ldr-sub">Premium PG - Ahmedabad</div>
      <div className="ldr-bar">
        <div className="ldr-fill" />
      </div>
    </div>
  );
}
