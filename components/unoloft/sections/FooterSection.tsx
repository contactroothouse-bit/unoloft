import Image from "next/image";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer>
      <div className="ft-main">
        <div>
          <div className="nav-logo">
            <Image
              src="/logo.png"
              alt="Unoloft premium PG in Ahmedabad"
              className="brand-logo-img footer-brand-logo"
              width={240}
              height={72}
            />
          </div>
          <p className="ft-desc">
            Unoloft offers premium paying guest accommodation in
            Ahmedabad. Your home, away from home - since 2021.
          </p>
          <div className="ft-socs">
            <a
              href="https://www.instagram.com/unoloft_/"
              className="ft-soc"
              target="_blank"
              rel="noreferrer"
              aria-label="Unoloft Instagram"
            >
              <i className="fa-brands fa-instagram" />
            </a>
            <a
              href="https://www.facebook.com/unoloft"
              className="ft-soc"
              target="_blank"
              rel="noreferrer"
              aria-label="Unoloft Facebook"
            >
              <i className="fa-brands fa-facebook-f" />
            </a>
            <a
              href="https://wa.me/917043306301"
              className="ft-soc"
              target="_blank"
              rel="noreferrer"
              aria-label="Unoloft WhatsApp"
            >
              <i className="fa-brands fa-whatsapp" />
            </a>
          </div>
        </div>

        <div className="ft-col">
          <p className="ft-col-title">Navigate</p>
          <ul className="ft-lks">
            <li>
              <Link href="/">About Us</Link>
            </li>
            <li>
              <Link href="/aster-homes">Aster Homes</Link>
            </li>
            <li>
              <Link href="/iris-house">Iris House</Link>
            </li>
            <li>
              <Link href="/amenities">Facilities</Link>
            </li>
            <li>
              <Link href="/rooms">Rooms</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/blogs">Blogs</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/pg-near-nirma-university">Near Nirma</Link>
            </li>
            <li>
              <Link href="/pg-near-silver-oak">Near Silver Oak</Link>
            </li>
            <li>
              <Link href="/pg-in-gota-ahmedabad">PG in Gota</Link>
            </li>
            <li>
              <Link href="/pg-near-sg-highway">Near SG Highway</Link>
            </li>
          </ul>
        </div>

        <div className="ft-col">
          <p className="ft-col-title">Our Homes</p>
          <ul className="ft-lks">
            <li>
              <Link href="/aster-homes">Explore Aster Homes</Link>
            </li>
            <li>
              <Link href="/iris-house">Explore Iris House</Link>
            </li>
            <li>
              <Link href="/rooms">Single Room</Link>
            </li>
            <li>
              <Link href="/rooms">Double Sharing</Link>
            </li>
            <li>
              <Link href="/rooms">Triple Sharing</Link>
            </li>
          </ul>
        </div>

        <div className="ft-col">
          <p className="ft-col-title">Contact</p>
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
              <Link href="/location">Ahmedabad, Gujarat</Link>
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
