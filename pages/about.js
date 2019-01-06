import { Cycler } from "react-text-scrambler";
import Link from "next/link";
import "../scss/style.scss";

class About extends React.Component {
  render() {
    const strings = ["World Traveler", "Photographer", "Hiker", "Boxing Fan"];

    return (
      <>
        <section className="hero">
          <img
            className="hero__img"
            src="/static/me2.jpg"
            alt="About Me Profile Image"
          />
          <h1 className="hero__title">About Me</h1>
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
        <section className="about content">
          <div className="container-left">
            <h2 className="title-secondary">About The Developer...</h2>
            <p>
              Hi, I'm Will Fang! By day, I'm a full-time Front End Developer at
              Red Ventures, which is one the largest performance digital
              marketing companies in the world. My daily workflow consists of
              working with the latest technologies available for the modern web
              such as Vue, React, PHP, Node, AWS, Next.js, Hexo, ES6, Sass, and
              other amazing tech depending on business needs.
            </p>
            <p>
              I also have experience in consulting for and developing amazing
              web experiences for some of the world's largest Fortune 100 and
              500 companies, Remax and Keller Williams realtors, and small
              businesses.
            </p>
            <h2 className="title-tertiary">About The Man...</h2>
            <p>
              When I'm not hard at work pushing pixels, you can find me planning
              my next travel destination (world traveler), taking my photography
              skills to the next level, hanging out at local tech meet-ups,
              hiking, snorkeling, working out, or spending time with friends and
              family.
            </p>
          </div>
        </section>
        <section className="skills content">
          <div className="container-left">
            <h2 className="title-tertiary">About The Skills...</h2>
            <p>
              <span className="skills__group">FRONT END : </span>
              HTML5, Hexo, Next, Nuxt, Gatsby, GraphQL, Apollo
            </p>
            <p>
              <span className="skills__group">Languages : </span>
              JavaScript (ES6), PHP
            </p>
            <p>
              <span className="skills__group">CSS Pre-Processors : </span>
              Sass(scss), LESS
            </p>
            <p>
              <span className="skills__group">CSS Libraries/Tools : </span>
              Bootstrap, Material-UI, Susy 2, Materialize CSS, Bulma
            </p>
            <p>
              <span className="skills__group">JS Frameworks/Libraries : </span>
              Angular, Vue.js, React.js, AWS Amplify, jQuery
            </p>
            <p>
              <span className="skills__group">Tools : </span>
              Gulp.js, Webpack, Docker
            </p>
            <p>
              <span className="skills__group">Dependency Management : </span>
              Composer, Yarn, npm
            </p>
            <p>
              <span className="skills__group">Design Tools : </span>
              Sketch, Photoshop, Illustrator
            </p>
            <p>
              <span className="skills__group">CMS : </span>
              Wordpress, Netlify CMS
            </p>
            <p>
              <span className="skills__group">Text Editors/IDE's : </span>
              Visual Studio Code, PHP Storm, Sublime Text, Atom, Cloud 9 IDE
            </p>
            <p>
              <span className="skills__group">AWS : </span>
              S3, AppSync, IAM, Cognito Auth
            </p>
          </div>
        </section>
        <section className="opportunities content">
          <div className="container-left">
            <h2 className="title-tertiary">About The Opportunities...</h2>
            <p>
              I relocated to Charlotte, NC as of July 2018 from Orlando, FL. I
              have also been a part of a remotely distrubuted team for
              approximately 2 years. I believe in setting goals and constantly
              progressing my professioanl career, knowledge, and entertaining
              all opportunites (no matter where that opportunity may be). I'm
              always up for a challenge and looking for ways to expand my skills
              as a tech professional, so don't hesitate to drop me a line!
            </p>
          </div>
        </section>
      </>
    );
  }
}

export default About;
