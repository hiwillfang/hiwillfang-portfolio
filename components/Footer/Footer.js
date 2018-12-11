import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const Footer = () => (
  <section className="footer">
    <Link href="/">
      <a>
        <img
          className="footer__icon"
          src="/static/001-pdf.png"
          alt="Resume Icon"
        />
      </a>
    </Link>
    <Link href="https://www.linkedin.com/in/william-fang-1a4306a1/">
      <a target="_blank">
        <img
          className="footer__icon"
          src="/static/002-linkedin.png"
          alt="Linkedin Icon"
        />
      </a>
    </Link>
    <Link href="https://twitter.com/hiwillfang">
      <a target="_blank">
        <img
          className="footer__icon"
          src="/static/003-twitter.png"
          alt="Twitter Icon"
        />
      </a>
    </Link>
    <Link href="https://www.instagram.com/hiwillfang/">
      <a target="_blank">
        <img
          className="footer__icon"
          src="/static/004-instagram.png"
          alt="Instagram Icon"
        />
      </a>
    </Link>
  </section>
);

export default Footer;
