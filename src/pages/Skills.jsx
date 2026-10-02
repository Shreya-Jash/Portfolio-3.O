import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faBrain,
  faChartLine,
  faDiagramProject,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import c from "../assets/icons_language/c.png";
import cpp from "../assets/icons_language/cpp.png";
import python from "../assets/icons_language/python.png";
import java from "../assets/icons_language/java.png";
import canva from "../assets/icons_graphics/canva.png";
import figma from "../assets/icons_graphics/figma.png";
import photoshop from "../assets/icons_graphics/photoshop.png";

const localIcons = {
  C: c,
  "C++": cpp,
  Python: python,
  Java: java,
  Canva: canva,
  Figma: figma,
  Photoshop: photoshop,
};
const focusIcons = {
  "Automation Anywhere": faRobot,
  GenWizard: faBrain,
  Splunk: faChartLine,
  "Agent Development": faDiagramProject,
  "Workflow Automation": faArrowsRotate,
  Agile: faArrowsRotate,
};
const devIcons = {
  "Spring Boot": "spring/spring-original.svg",
  React: "react/react-original.svg",
  JavaScript: "javascript/javascript-original.svg",
  HTML: "html5/html5-original.svg",
  CSS: "css3/css3-original.svg",
  "Tailwind CSS": "tailwindcss/tailwindcss-original.svg",
  "Node.js": "nodejs/nodejs-original.svg",
  Express: "express/express-original.svg",
  MongoDB: "mongodb/mongodb-original.svg",
  GitHub: "github/github-original.svg",
  "VS Code": "vscode/vscode-original.svg",
  Firebase: "firebase/firebase-original.svg",
};

import { skillGroups } from "../data/profile";
import "../styles/skills.css";

export default function Skills() {
  return (
    <section className="skills" id="skills" aria-labelledby="skills-title">
      <div className="section-heading">
        <span className="section-eyebrow">01 / Skills</span>
        <h2 id="skills-title">My toolkit.</h2>
        <p>Current tools first. A solid engineering foundation behind them.</p>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <section className={`skills-group${group.featured ? " skills-group--featured" : ""}`} key={group.title} aria-label={group.title}>
            <div className="skills-group__heading"><h3>{group.title}</h3>{group.subtitle && <span>{group.subtitle}</span>}</div>
            <ul className="skills-tiles">
              {group.skills.map((skill) => (
                <li className="skill-tile" key={skill}>
                  {focusIcons[skill] ? (
                    <FontAwesomeIcon icon={focusIcons[skill]} className="skill-symbol" aria-hidden="true" />
                  ) : (
                    <img src={localIcons[skill] || `https://cdn.jsdelivr.net/gh/devicons/devicon@v2.17.0/icons/${devIcons[skill]}`}
                      className={`skill-symbol${skill === "GitHub" || skill === "Express" ? " skill-symbol--light" : ""}`}
                      alt="" width="28" height="28" loading="lazy" />
                  )}
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </section>
  );
}
