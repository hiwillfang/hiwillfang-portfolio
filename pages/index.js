import { Scrambler, Cycler } from "react-text-scrambler";
import "../scss/style.scss";

class Index extends React.Component {
  render() {
    const strings = [
      "Front End Developer",
      "Digital Nomad",
      "JavaScript Enthusiast",
      "UX Activist"
    ];

    return (
      <section className="hero">
        <img className="hero__img" src="/static/me.jpg" alt="Profile Image" />
        <h1 className="hero__title">Hi, I'm Will Fang!</h1>
        <h2 className="hero__subtitle">
          <Cycler duration={4000} strings={strings} />
        </h2>
        <p>{process.env.TEST}</p>
      </section>
    );
  }
}

export default Index;
