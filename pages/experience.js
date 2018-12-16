import { Cycler } from "react-text-scrambler";
import "../scss/style.scss";

class Experience extends React.Component {
  render() {
    const strings = [
      "JavaScript Ninja",
      "Digital Nomad",
      "JavaScript Enthusiast",
      "UX Activist"
    ];

    return (
      <>
        <section className="hero">
          <img className="hero__img" src="/static/me.jpg" alt="Profile Image" />
          <h1 className="hero__title">Experience</h1>
          <h2 className="hero__subtitle">
            <Cycler duration={4000} strings={strings} typewriter />
          </h2>
        </section>
        <section className="content">
          <div className="container-centered">
            <p>
              Hi, I'm Will Fang and I want to personally thank you for stopping
              by my site! Since you're already here, please have a look around
              and get to know me a little better! If my blinding good looks
              don't get to you, I think you'll find my skills, background, work
              achievements, and personality a definite winner! If not, then
              you're impossible. Just Kidding! Enjoy!
            </p>
          </div>
        </section>
      </>
    );
  }
}

export default Experience;
