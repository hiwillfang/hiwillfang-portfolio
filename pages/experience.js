import { Cycler } from "react-text-scrambler";
import "../scss/style.scss";

class Experience extends React.Component {
  render() {
    const strings = [
      "React.js",
      "Vue.js",
      "Next.js",
      "Nuxt",
      "Angular",
      "Wordpress",
      "PHP",
      "scss"
    ];

    return (
      <>
        <section className="hero">
          <img
            className="hero__img"
            src="/static/me3.jpg"
            alt="Profile Image"
          />
          <h1 className="hero__title">Experience</h1>
          <h2 className="hero__subtitle">
            <Cycler duration={4000} strings={strings} typewriter />
          </h2>
        </section>
        <section className="experience content">
          <div className="container-left">
            <div className="experience__block">
              <h2 className="title-secondary">
                Red Ventures
                <span className="experience__title">(Front End Developer)</span>
              </h2>
              <h3 className="experience__date">July 2018 - PRESENT</h3>
              <p>
                Develop, test, and deploy production-ready applications in the
                deregulated energy sector utilizing the latest web technologies.
                Expand my knowledge of vanilla JavaScript, JS
                libraries/frameworks, consuming API data for various product
                catalogs, and working in a serverless environment.
              </p>
              <div className="experience__badges">
                <span className="experience__badges-tag">HTML5</span>
                <span className="experience__badges-tag">Sass</span>
                <span className="experience__badges-tag">JavaScript (ES6)</span>
                <span className="experience__badges-tag">Hexo</span>
                <span className="experience__badges-tag">React</span>
                <span className="experience__badges-tag">Redux</span>
                <span className="experience__badges-tag">GraphQL</span>
                <span className="experience__badges-tag">Apollo</span>
                <span className="experience__badges-tag">Vue</span>
                <span className="experience__badges-tag">Webpack</span>
                <span className="experience__badges-tag">Docker</span>
                <span className="experience__badges-tag">AWS S3</span>
                <span className="experience__badges-tag">AWS AppSync</span>
                <span className="experience__badges-tag">AWS Amplify</span>
                <span className="experience__badges-tag">Git</span>
                <span className="experience__badges-tag">Postman</span>
                <span className="experience__badges-tag">Segment</span>
                <span className="experience__badges-tag">Mixpanel</span>
                <span className="experience__badges-tag">New Relic</span>
                <span className="experience__badges-tag">NPM</span>
                <span className="experience__badges-tag">Node</span>
                <span className="experience__badges-tag">Jira</span>
                <span className="experience__badges-tag">Slack</span>
              </div>
            </div>

            <div className="experience__block">
              <h2 className="title-secondary">
                PartnerComm
                <span className="experience__title">(Front End Engineer)</span>
              </h2>
              <h3 className="experience__date">December 2016 - June 2018</h3>
              <p>
                Develop, test, and deploy production-ready applications in the
                deregulated energy sector utilizing the latest web technologies.
                Expand my knowledge of vanilla JavaScript, JS
                libraries/frameworks, consuming API data for various product
                catalogs, and working in a serverless environment.
              </p>
              <div className="experience__badges">
                <span className="experience__badges-tag">HTML5</span>
                <span className="experience__badges-tag">Sass</span>
                <span className="experience__badges-tag">JavaScript</span>
                <span className="experience__badges-tag">jQuery</span>
                <span className="experience__badges-tag">PHP</span>
                <span className="experience__badges-tag">Wordpress</span>
                <span className="experience__badges-tag">Susy 2</span>
                <span className="experience__badges-tag">Breakpoints</span>
                <span className="experience__badges-tag">Gulp</span>
                <span className="experience__badges-tag">Bootstrap (v4)</span>
                <span className="experience__badges-tag">Docker</span>
                <span className="experience__badges-tag">Git</span>
                <span className="experience__badges-tag">Node</span>
                <span className="experience__badges-tag">NPM</span>
                <span className="experience__badges-tag">Composer</span>
                <span className="experience__badges-tag">Sketch</span>
                <span className="experience__badges-tag">Photoshop</span>
                <span className="experience__badges-tag">GSAP</span>
                <span className="experience__badges-tag">Anime.js</span>
                <span className="experience__badges-tag">Angular (2 & 4)</span>
                <span className="experience__badges-tag">MySQL</span>
                <span className="experience__badges-tag">Basecamp</span>
                <span className="experience__badges-tag">Jira</span>
                <span className="experience__badges-tag">Slack</span>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Experience;
