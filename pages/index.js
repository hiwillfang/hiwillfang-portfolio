import { Cycler } from "react-text-scrambler";
import Link from "next/link";
import "../scss/style.scss";

class Index extends React.Component {
  render() {
    const strings = [
      "Front End Developer",
      "Digital Nomad",
      "JavaScript Enthusiast",
      "Web Consultant"
    ];

    return (
      <>
        <section className="hero">
          <img className="hero__img" src="/static/me.jpg" alt="Profile Image" />
          <h1 className="hero__title">Hi, I'm Will Fang!</h1>
          <h2 className="hero__subtitle">
            <Cycler duration={4000} strings={strings} typewriter />
          </h2>
          <Link href="/">
            <a>
              <img
                className="hero__icon"
                src="/static/001-pdf.png"
                alt="Resume Icon"
              />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/william-fang-1a4306a1/">
            <a target="_blank">
              <img
                className="hero__icon"
                src="/static/002-linkedin.png"
                alt="Linkedin Icon"
              />
            </a>
          </Link>
          <Link href="https://twitter.com/hiwillfang">
            <a target="_blank">
              <img
                className="hero__icon"
                src="/static/003-twitter.png"
                alt="Twitter Icon"
              />
            </a>
          </Link>
          <Link href="https://www.instagram.com/hiwillfang/">
            <a target="_blank">
              <img
                className="hero__icon"
                src="/static/004-instagram.png"
                alt="Instagram Icon"
              />
            </a>
          </Link>
        </section>
        <section className="content">
          <div className="container-centered">
            <p>
              Hi, I'm Will Fang and I want to personally thank you for stopping
              by my site! Since you're here, please have a look around and get
              to know who I am and what I do! If my blinding good looks don't
              get to you, I think you'll find my skills, background, work
              achievements, and personality impressive! Sit back and relax
              because you are about to embark on the Will Fang journey... Enjoy!
            </p>
          </div>
        </section>
      </>
    );
  }
}

export default Index;
