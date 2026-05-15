import { cn } from "@/components/unoloft/utils";
import type { Home } from "@/components/unoloft/types";

type MapSectionProps = {
  selectedHome: Home;
  showHomeSwitch?: boolean;
  onHomeChange?: (home: Home) => void;
};

const ASTER_DATA = {
  advantages: [
    { name: "Nirma University", time: "Approx. 10 mins" },
    { name: "Silver Oak University", time: "Approx. 5 mins" },
    { name: "SG Highway", time: "Approx. 2 mins" },
    { name: "Gota Circle", time: "Approx. 2 mins" },
  ],
  address:
    "Royal Lakend Gota - Jagatpur Road, Sarkhej - Gandhinagar Hwy, behind Gota Lake, opposite Royal Heights, Ahmedabad, Gujarat 382481.",
  mapLink:
    "https://www.google.com/maps?q=Aster%20Homes%20by%20Unoloft%20-%20PG%20in%20Gota%20Ahmedabad",
  mapEmbed:
    "https://www.google.com/maps?q=Aster%20Homes%20by%20Unoloft%20-%20PG%20in%20Gota%20Ahmedabad&output=embed",
};

const IRIS_DATA = {
  advantages: [
    { name: "Nirma University", time: "1 km away" },
    { name: "Vaishnodevi Circle", time: "Approx. 2 mins" },
  ],
  address:
    "Behind Nirma University, Beside Adani Pratham, Tragad, Ahmedabad.",
  mapLink:
    "https://www.google.com/maps/place/Iris+House+By+Unoloft+%7C+Hostel%2FP.G.+near+Nirma+University/@23.1273093,72.4747728,12814m/data=!3m1!1e3!4m10!1m2!2m1!1siris+homes+by+unoloft!3m6!1s0x395e839f3f87e59b:0x110995622f32aad1!8m2!3d23.1273093!4d72.5509905!15sChVpcmlzIGhvbWVzIGJ5IHVub2xvZnRaFyIVaXJpcyBob21lcyBieSB1bm9sb2Z0kgERc3R1ZGVudF9kb3JtaXRvcnngAQA!16s%2Fg%2F11xmgynqjm?entry=ttu&g_ep=EgoyMDI2MDMyMi4wIKXMDSoASAFQAw%3D%3D",
  mapEmbed:
    "https://www.google.com/maps?q=Iris%20House%20By%20Unoloft%20Hostel%20P.G.%20near%20Nirma%20University&output=embed",
};

export default function MapSection({
  selectedHome,
  showHomeSwitch = false,
  onHomeChange,
}: MapSectionProps) {
  const mapData = selectedHome === "iris" ? IRIS_DATA : ASTER_DATA;

  return (
    <section id="map-sec">
      <div className="sh rv">
        <div className="s-ey">Location</div>
        <h2 className="s-t">
          Find Us <em>Easily</em>
        </h2>
        <p className="s-sub">
          Strategically located near major offices, colleges &amp; public
          transport in Ahmedabad.
        </p>
      </div>

      {showHomeSwitch ? (
        <div className="rooms-home-switch rooms-home-switch-inline" aria-label="Select property">
          <button
            type="button"
            className={cn(selectedHome === "aster" && "active")}
            onClick={() => onHomeChange?.("aster")}
          >
            Aster Homes
          </button>
          <button
            type="button"
            className={cn(selectedHome === "iris" && "active")}
            onClick={() => onHomeChange?.("iris")}
          >
            Iris House
          </button>
        </div>
      ) : null}

      <div className="map-adv rv">
        <h3 className="map-adv-t">Prime Location Advantage</h3>
        <p className="map-adv-sub">
          Stay close to educational institutes, workplaces, and daily commuting
          corridors.
        </p>

        <div className="map-adv-g">
          {mapData.advantages.map((item) => (
            <article className="map-adv-c" key={item.name}>
              <h4>{item.name}</h4>
              <p>{item.time}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="map-g">
        <div className="rvl">
          <div className="map-cards">
            <div className="map-card">
              <div className="map-ic">
                <i className="fa-solid fa-location-dot" />
              </div>
              <div>
                <h4>Address</h4>
                <p>{mapData.address}</p>
              </div>
            </div>
            <div className="map-card">
              <div className="map-ic">
                <i className="fa-solid fa-phone" />
              </div>
              <div>
                <h4>Nilesh Patel (Nirma Alumni)</h4>
                <p>+91 70433 06301</p>
              </div>
            </div>
            <div className="map-card">
              <div className="map-ic">
                <i className="fa-solid fa-phone" />
              </div>
              <div>
                <h4>Dhwanit Pansuriya (Nirma Alumni)</h4>
                <p>+91 99099 01291</p>
              </div>
            </div>
            <div className="map-card">
              <div className="map-ic">
                <i className="fa-solid fa-clock" />
              </div>
              <div>
                <h4>Office Hours</h4>
                <p>Mon-Sat: 9 AM - 8 PM · Sun: 10 AM - 5 PM</p>
              </div>
            </div>
          </div>

          <a
            href={mapData.mapLink}
            target="_blank"
            className="btn-ora"
            style={{
              marginTop: 22,
              display: "inline-flex",
              fontSize: ".88rem",
            }}
            rel="noreferrer"
          >
            <i className="fa-solid fa-diamond-turn-right" /> Get Directions
          </a>
        </div>

        <div className="map-em rvr">
          <iframe
            src={mapData.mapEmbed}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
