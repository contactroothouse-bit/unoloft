import Image from "next/image";
import type { Home } from "@/components/unoloft/types";
import { cn } from "@/components/unoloft/utils";

type PgIntroSectionProps = {
  selectedHome: Home;
  onHomeChange: (home: Home) => void;
};

export default function PgIntroSection({
  selectedHome,
  onHomeChange,
}: PgIntroSectionProps) {
  return (
    <section id="pg-intro">
      <div className="sh rv">
        <div className="s-ey">Who We Are</div>
        <h2 className="s-t">
          Two Homes, <em>One Family</em>
        </h2>
        <p className="s-sub">
          Safe, premium, and vibrant PG spaces crafted for Ahmedabad&apos;s
          young professionals and students.
        </p>
      </div>

      <div className="pg-grid">
        <div className="pg-item rv" style={{ transitionDelay: ".05s" }}>
          {/* <div className="pg-tag tb pg-tag-above">
            <i className="fa-solid fa-mars" /> For Boys
          </div> */}

          <div
            className={cn("pg-card", selectedHome === "aster" && "active")}
            onClick={() => onHomeChange("aster")}
          >
            <Image
              src="/gallery/IMG-20260201-WA0028.jpg"
              alt="Aster Homes boys PG building and premium rooms in Gota Ahmedabad"
              fill
              sizes="(max-width: 860px) 100vw, 50vw"
            />
            <div className="pg-ov" />
            <div className="pg-con">
              <div className="pg-name">Aster Homes</div>
              <p className="pg-desc">
                A modern haven built for the ambitious man. Structured,
                comfortable, and packed with everything you need to thrive.
              </p>
              <div className="pg-feats">
                <span className="pg-feat">Single &amp; Sharing Rooms</span>
                <span className="pg-feat">Gym</span>
                <span className="pg-feat">Study Table and Chair</span>
                <span className="pg-feat">Bed with Extra Storage</span>
                <span className="pg-feat">Library Area</span>
              </div>
              <a href="#contact" className="pg-link">
                Book a Visit <i className="fa-solid fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>

        <div className="pg-item rv" style={{ transitionDelay: ".12s" }}>
          {/* <div className="pg-tag tb pg-tag-above">
            <i className="fa-solid fa-mars" /> For Boys
          </div> */}

          <div
            className={cn("pg-card", selectedHome === "iris" && "active")}
            onClick={() => onHomeChange("iris")}
          >
            <Image
              src="/Iris%20homes/Iris%20homes/IMG-20260322-WA0001.jpg"
              alt="Iris House premium boys PG near Silver Oak University Ahmedabad"
              fill
              sizes="(max-width: 860px) 100vw, 50vw"
            />
            <div className="pg-ov" />
            <div className="pg-con">
              <div className="pg-name">Iris House</div>
              <p className="pg-desc">
                Elegantly designed for comfort and brotherhood. A warm, secure
                sanctuary where men grow and belong.
              </p>
              <div className="pg-feats">
                <span className="pg-feat">Dedicated Warden</span>
                <span className="pg-feat">Premium Interiors</span>
                <span className="pg-feat">CCTV</span>
                <span className="pg-feat">Library Area</span>
              </div>
              <a href="#contact" className="pg-link">
                Book a Visit <i className="fa-solid fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
