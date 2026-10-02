import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faGraduationCap, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { experience, education } from "../data/profile";

export default function About() {
  return (
    <section className="experience" id="experience" aria-labelledby="experience-title">
      <div className="section-heading">
        <span className="section-eyebrow">02 / Experience</span>
        <h2 id="experience-title">Where I’ve made an impact.</h2>
      </div>
      <div className="experience-layout">
        <ol className="experience-timeline">
          {experience.map((item) => (
            <li className={`experience-item${item.current ? " experience-item--current" : ""}`} key={item.organization}>
              <div className="experience-item__meta"><span>{item.period}</span>{item.current && <span className="experience-item__badge">Current</span>}</div>
              <h3>{item.role}</h3>
              <a className="experience-item__company" href={item.href} target="_blank" rel="noreferrer">{item.organization}<FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" /></a>
              <p>{item.details}</p>
              <ul className="experience-tags" aria-label="Focus areas">{item.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </li>
          ))}
        </ol>
        <div className="experience-aside">
          <section className="background-card" aria-labelledby="education-title">
            <FontAwesomeIcon className="background-card__icon" icon={faGraduationCap} aria-hidden="true" />
            <h3 id="education-title">Education</h3>
            <h4>{education[0].title}</h4>
            <a href={education[0].href} target="_blank" rel="noreferrer">{education[0].organization}</a>
            <details className="education-details">
              <summary>Earlier education</summary>
              <ul>{education.slice(1).map((item) => <li key={item.title}><span>{item.period} · {item.title}</span><a href={item.href} target="_blank" rel="noreferrer">{item.organization}</a></li>)}</ul>
            </details>
          </section>
          <section className="background-card" aria-labelledby="leadership-title">
            <FontAwesomeIcon className="background-card__icon" icon={faPeopleGroup} aria-hidden="true" />
            <h3 id="leadership-title">Leadership</h3>
            <h4>Chair · IEEE Student Branch</h4>
            <a href="https://uem.edu.in/uem-kolkata/" target="_blank" rel="noreferrer">UEM Kolkata</a>
            <p>Jun 2023 — Jun 2024</p>
          </section>
        </div>
      </div>
    </section>
  );
}
