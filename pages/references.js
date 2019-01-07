import { Cycler } from "react-text-scrambler";
import Link from "next/link";
import "../scss/style.scss";

class References extends React.Component {
  render() {
    const strings = [
      "Reliable",
      "Outgoing",
      "Forward Thinking",
      "Personable",
      "Charismatic"
    ];

    return (
      <>
        <section className="hero">
          <img
            className="hero__img"
            src="/static/me4.jpg"
            alt="Profile Image"
          />
          <h1 className="hero__title">References</h1>
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
        <section className="references content">
          <div className="container-left">
            <div className="references__block">
              <div className="references__person">
                <img
                  className="references__img"
                  src="/static/brian.jpeg"
                  alt="Brian Asquith"
                />
                <h2 className="title-secondary">
                  Brian Asquith
                  <span className="references__title">
                    Software Engineer @ Meet Hitch
                  </span>
                  <span className="references__contact">
                    Email: basquithcpt@gmail.com
                  </span>
                </h2>
              </div>
              <p>
                "Will is extremely professional, he is early to work every day,
                extremely organized, and he is a great boost to office morale.
                Will is constantly striving to learn more and do more, always
                asking to take on new tasks and add skills to his repertoire.
                This leads to one of his most admirable qualities, that no
                matter how much you throw on his plate, he's on top of it. He is
                one of those people who just gets things done. When it comes to
                communicating with co-workers and clients, you will not find
                anyone better and I can stand by that statement without
                hesitation. Just interview him and you'll immediately know what
                I mean. If given the opportunity, I believe he will be an asset
                to any team that brings him aboard as a developer. *TL:DR
                version - Reliable, motivated, curious, perceptive, intelligent"
              </p>
            </div>

            <div className="references__block">
              <div className="references__person">
                <img
                  className="references__img"
                  src="/static/eric.jpeg"
                  alt="Eric Fraze"
                />
                <h2 className="title-secondary">
                  Eric Fraze
                  <span className="references__title">
                    Software Developer @ USA Today Sports Media Group
                  </span>
                  <span className="references__contact">
                    Email: magnilucent@gmail.com
                  </span>
                </h2>
              </div>
              <p>
                "Will has been a wonderful inspiration to me in my professional
                and personal life. He's an informative individual who inspires
                people with his charismatic personalty and was a great asset to
                our team at BrandCo. His larger than life personality (ENTJ)
                allows him to work through any situation, ask questions, and
                work asynchronously with fellow team members. Will is
                resourceful, continuously learning, and uplifting. A great
                addition to any team!"
              </p>
            </div>

            <div className="references__block">
              <div className="references__person">
                <img
                  className="references__img"
                  src="/static/jeremy.jpeg"
                  alt="Jeremy Hutchcraft"
                />
                <h2 className="title-secondary">
                  Jeremy Hutchcraft
                  <span className="references__title">
                    Senior Web Engineer @ Renters Warehouse
                  </span>
                  <span className="references__contact">
                    Email: hutch78@me.com
                  </span>
                </h2>
              </div>
              <p>
                "Will has been a tremendous pleasure to work with. He and I held
                the same position while I was at Partnercomm, and he was a great
                mentor. He trained me my first week and did an amazing job of
                giving me the "lay of the land". Many things he told me during
                training allowed me to become effective in my role immediately.
                As my time at Partnercomm progressed, Will and I worked closely
                on numerous projects. He was always a positive influence, has a
                contagious passion for his work, and stays ahead of the latest
                trends! Will was instrumental in pushing the front end
                engineering team at Partnercomm forward in finding new ways to
                be efficient, finding new tools to use, and finding new ways to
                make our products more profitable. Will is a determined leader
                who is creative in his approaches to problem solving, as well as
                a supportive team mate. He would be a positive addition to any
                team. Cannot recommend highly enough."
              </p>
            </div>

            <div className="references__block">
              <div className="references__person">
                <img
                  className="references__img"
                  src="/static/dylan.jpeg"
                  alt="Dylan Scherpf"
                />
                <h2 className="title-secondary">
                  Dylan Scherpf
                  <span className="references__title">
                    Front End Developer @ PartnerComm
                  </span>
                  <span className="references__contact">
                    Email: dscherpf@partnercomm.net
                  </span>
                </h2>
              </div>
              <p>
                "Will's a talented developer with a clear interest in
                continuously pushing his skill set forward. He's the type of
                person that will fully apply himself to any endeavor that
                captures his interest; be it personal or professional. During
                his time at PartnerComm, Will put that focus to use bringing new
                ideas to our team and working to improve our practices. Where
                Will sets himself apart though is his dedication to team
                building and networking. When others may get complacent with a
                stale work environment, Will jumps at the chance to connect with
                his team and share knowledge and resources. He's a credit to the
                front-end community, and undoubtedly a valuable asset to any
                team."
              </p>
            </div>

            <div className="references__block">
              <div className="references__person">
                <img
                  className="references__img"
                  src="/static/west.jpeg"
                  alt="Westley Ferguson"
                />
                <h2 className="title-secondary">
                  Westley Ferguson
                  <span className="references__title">
                    Web Designer @ PartnerComm
                  </span>
                  <span className="references__contact">
                    Email: westley.ferguson@icloud.com
                  </span>
                </h2>
              </div>
              <p>
                "Will is one of the most dedicated and successful web developers
                I have met and had the pleasure to work with. I’ve seen Will
                grow rapidly and take on large projects during his web
                development career. His can-do attitude is nothing like I’ve
                ever seen and this can be noticed by his success in his career.
                Will has a lot of passion in his career which allows him to
                excel and go the extra mile in his work. I’ve worked on many
                large projects for large clients with Will and can say I’ve had
                some of the best collaboration with him. Will has the ability to
                execute tasks efficiently and accurately, so I can ensure you
                that he will be a very valuable asset for any development team.
                I would recommend Will for any company that is looking to
                strengthen their development and bring their web development
                work to the next level. He is easy-going, personable, and a
                great colleague to be around."
              </p>
            </div>

            <div className="references__block">
              <div className="references__person">
                <img
                  className="references__img"
                  src="/static/jessica.jpeg"
                  alt="Jessica Stewart"
                />
                <h2 className="title-secondary">
                  Westley Ferguson
                  <span className="references__title">
                    Product Developer @ Purple, Rock, Scissors
                  </span>
                  <span className="references__contact">
                    Email: jstewart140.15@gmail.com
                  </span>
                </h2>
              </div>
              <p>
                "William is the embodiment of tenacity! Dedicated and driven-
                Will is not only a talented developer, but a charismatic leader.
                He immediately earned respect and praise with his stellar
                performance amongst everyone in the company, especially his
                direct coworkers. Will's goal-oriented work ethic will make him
                thrive in any position he is put in to! If you are looking for
                someone who is always ready to step up and accept a challenge,
                look no further!"
              </p>
            </div>

            <div className="references__block">
              <div className="references__person">
                <img
                  className="references__img"
                  src="/static/jack.jpeg"
                  alt="Jack Ross"
                />
                <h2 className="title-secondary">
                  Jack Ross
                  <span className="references__title">
                    DevOps Engineer @ PartnerComm
                  </span>
                  <span className="references__contact">
                    Email: mrjackross@gmail.com
                  </span>
                </h2>
              </div>
              <p>
                "Will and I worked together for close to a year at PartnerComm
                and it was definitely a pleasure. Will is very attentive to
                what's going on in the industry and making sure that he keeps
                up-to-date with his skills and abilities. He is a person who
                always knows what the industry standard is and how trends are
                moving. He is VERY dedicated to the job and it's not uncommon to
                see him working either late at night or early in the morning. He
                was continuously pushing the company to adopt newer and better
                standards and processes. He was not afraid to tell people when
                he felt that they could be doing a better job and strives to
                raise people up. Will is also really good at networking. He is
                very social and good at making personal connections. He is
                frequently the center of the conversation and people seem to
                gravitate towards him. I have never met anyone more passionate
                about going to conferences, local meet ups, and overall
                contributing to the developer community. I really enjoyed
                getting to know Will on a personal and professional level. Would
                highly recommend Will as a positive addition to any team."
              </p>
            </div>

            <div className="references__block">
              <div className="references__person">
                <img
                  className="references__img"
                  src="/static/vinnie.jpeg"
                  alt="Vincenzo Marconi"
                />
                <h2 className="title-secondary">
                  Vincenzo Marconi
                  <span className="references__title">
                    Front End Developer @ Red Ventures
                  </span>
                  <span className="references__contact">
                    Email: vincenzorm117@gmail.com
                  </span>
                </h2>
              </div>
              <p>
                "Will is a company driving force. Will is the kind of individual
                that meets deadlines like no other. There has not been a time
                when Will has not done what he said he would do. At the same
                time, Will is the guy you can count on to bring the team
                together. No details ever leave Will, and you can count on him
                as a friend and a colleague. With his ambition and excitement
                for technology, its a real pleasure to work with Will. He would
                be an incredible asset to any company."
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default References;
