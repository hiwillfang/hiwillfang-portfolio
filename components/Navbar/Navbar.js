import { withRouter } from "next/router";
import Link from "../ActiveLink/ActiveLink";

const Navbar = withRouter(({ router, children, ...props }) => (
  <nav className="navbar">
    <Link href="/" activeClassName="active">
      <a className="navbar__link">Home</a>
    </Link>
    <Link href="/about" activeClassName="active">
      <a className="navbar__link">About</a>
    </Link>
    <Link href="/experience" activeClassName="active">
      <a className="navbar__link">Experience</a>
    </Link>
    <Link href="/portfolio" activeClassName="active">
      <a className="navbar__link">Portfolio</a>
    </Link>
    <Link href="/references" activeClassName="active">
      <a className="navbar__link">References</a>
    </Link>
    <Link href="/contact" activeClassName="active">
      <a className="navbar__link">Contact</a>
    </Link>
  </nav>
));

export default Navbar;
