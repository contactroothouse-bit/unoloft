import type { ReactNode } from "react";
import SiteFooterNav from "@/components/unoloft/SiteFooterNav";
import SiteRouteNav from "@/components/unoloft/SiteRouteNav";

type PageShellProps = {
  children: ReactNode;
};

export default function PageShell({ children }: PageShellProps) {
  return (
    <>
      <SiteRouteNav />
      <main className="subpage-main">{children}</main>
      <SiteFooterNav />
    </>
  );
}
