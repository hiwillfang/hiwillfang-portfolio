import { Cycler } from "react-text-scrambler";
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
        </section>
      </>
    );
  }
}

export default About;
