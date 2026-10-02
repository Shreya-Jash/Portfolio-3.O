import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faFileLines, faRobot, faBrain, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import myPic from "../assets/myPic.png";
import { profile } from "../data/profile";
import "../styles/home.css";

const focusAreas = [
  { title: "Automation", caption: "Simplify everyday tasks", icon: faRobot },
  { title: "Intelligent agents", caption: "Connect tools and workflows", icon: faBrain },
  { title: "Observability", caption: "Turn signals into insight", icon: faChartLine },
];

export default function Home() {
  return (
    <section className="home" id="home" aria-labelledby="home-title">
      <div className="home__intro">
        <div className="home__copy">
          <p className="home__eyebrow"><span aria-hidden="true" />{profile.role} at {profile.company}</p>
          <h1 id="home-title" className="home__title">Hi, I’m Shreya.<br /><span>I make workflows smarter.</span></h1>
          <p className="home__description">Automation, AI agents, and observability — built around real business needs.</p>
          <div className="home__actions">
            <a className="home__button home__button--primary" href="#experience">My experience <FontAwesomeIcon icon={faArrowRight} /></a>
            <a className="home__button home__button--secondary" href={profile.resume} target="_blank" rel="noreferrer">View résumé <FontAwesomeIcon icon={faFileLines} /></a>
          </div>
          <div className="home__socials">
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} />LinkedIn</a>
            <a href={profile.github} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} />GitHub</a>
            <a href="#contact">Let’s connect <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <figure className="home__portrait-card">
          <img src={myPic} className="home__portrait" alt="Shreya Jash" />
          <figcaption><strong>{profile.name}</strong><span>{profile.role}</span></figcaption>
          <span className="home__portrait-label">Code. Automate. Improve.</span>
        </figure>
      </div>
      <div className="home__focus" aria-label="Areas of focus">
        {focusAreas.map((area) => (
          <div className="home__focus-item" key={area.title}>
            <FontAwesomeIcon icon={area.icon} aria-hidden="true" />
            <div><h2>{area.title}</h2><p>{area.caption}</p></div>
          </div>
        ))}
      </div>
    </section>
  );
}
