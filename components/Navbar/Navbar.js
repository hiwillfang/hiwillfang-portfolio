import Link from "next/link";

const Navbar = () => (
  <div className="paper-back">
    <nav>
      <div className="close">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/experience">
          <a>Experience</a>
        </Link>
        <Link href="/portfolio">
          <a>Portfolio</a>
        </Link>
        <Link href="/references">
          <a>References</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </div>
    </nav>
  </div>
);

export default Navbar;
