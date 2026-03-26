export default function FooterSection() {
  return (
    <footer>
      <div className="ft-main">
        <div>
          <div className="nav-logo">
            <img
              src="/Screenshot_2026-03-25_233347-removebg-preview.png"
              alt="Unoloft"
              className="brand-logo-img footer-brand-logo"
            />
          </div>
          <p className="ft-desc">
            Ahmedabad&apos;s most premium paying guest accommodation for boys.
            Your home, away from home - since 2021.
          </p>
          <div className="ft-socs">
            <a href="#" className="ft-soc">
              <i className="fa-brands fa-instagram" />
            </a>
            <a href="#" className="ft-soc">
              <i className="fa-brands fa-facebook-f" />
            </a>
            <a href="#" className="ft-soc">
              <i className="fa-brands fa-whatsapp" />
            </a>
            <a href="#" className="ft-soc">
              <i className="fa-brands fa-youtube" />
            </a>
          </div>
        </div>

        <div className="ft-col">
          <h4>Navigate</h4>
          <ul className="ft-lks">
            <li>
              <a href="#pg-intro">About Us</a>
            </li>
            <li>
              <a href="#facilities">Facilities</a>
            </li>
            <li>
              <a href="#rooms">Rooms</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="ft-col">
          <h4>Our Homes</h4>
          <ul className="ft-lks">
            <li>
              <a href="#pg-intro">Aster Homes </a>
            </li>
            <li>
              <a href="#pg-intro">Iris House </a>
            </li>
            <li>
              <a href="#rooms">Single Room</a>
            </li>
            <li>
              <a href="#rooms">Double Sharing</a>
            </li>
            <li>
              <a href="#rooms">Triple Sharing</a>
            </li>
          </ul>
        </div>

        <div className="ft-col">
          <h4>Contact</h4>
          <ul className="ft-lks">
            <li>
              <a href="tel:+917043306301">7043306301</a>
            </li>
            <li>
              <a href="tel:+919909901291">9909901291</a>
            </li>
            <li>
              <a href="mailto:nilesh.unoloft@gmail.com">
                nilesh.unoloft@gmail.com
              </a>
            </li>
            <li>
              <a href="#map-sec">Ahmedabad, Gujarat</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="ft-bar">
        <div>© 2026 Unoloft. All rights reserved.</div>
      </div>
    </footer>
  );
}
