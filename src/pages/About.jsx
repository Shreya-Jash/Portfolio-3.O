import React from "react";

import c from "../assets/icons_language/c.png";
import cpp from "../assets/icons_language/cpp.png";
import python from "../assets/icons_language/python.png";
import java from "../assets/icons_language/java.png";
import canva from "../assets/icons_graphics/canva.png";

export default function About() {
  return (
    <div className="about h-[1200px] md:h-screen" id="about">
      <h1 className="about-h1 pt-5  text-center">About Me</h1>

      <section className="flex flex-col md:flex-row  justify-between pt-10">
        <div className="skill w-full md:w-[49%]">
          <h2 className="text-2xl mb-3">My Skills -</h2>
          <section className="skill2 mx-3 md:mx-10">
            <h3>Languages-</h3>
            <div className="language grid grid-cols-4 gap-x-1 mb-3">
              <img src={c} alt="c" className="language-icon h-12" />
              <img src={cpp} alt="cpp" className="language-icon h-12" />
              <img src={python} alt="python" className="language-icon h-12" />
              <img src={java} alt="java" className="language-icon h-12" />
            </div>
            <h3>Web Technologies-</h3>
            <div className="frontend-icons grid grid-cols-4 gap-x-1 gap-y-4 mb-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg"
                alt="html"
                className="frontend-icon h-12"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"
                alt="css"
                className="frontend-icon h-12"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                alt="tailwind"
                className="frontend-icon h-12"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="js"
                className="frontend-icon h-12"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                alt="react"
                className="frontend-icon h-12"
              />

              <img
                className="frontend-icon h-12"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg"
              />

              <i class="devicon-express-original-wordmark text-6xl"></i>

              <img
                className="h-12"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
              />
            </div>
            <h3>Tools-</h3>
            <div className="other-icon grid grid-cols-4 gap-x-1 mb-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"
                alt="vscode"
                className="othericon h-12"
              />

              <i class="devicon-github-original-wordmark text-[44px]"></i>

              <img
                className="othericon h-12"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg"
              />
            </div>
            <h3>Graphics-</h3>
            <div className="graphics-icon grid grid-cols-4 gap-x-1 mb-3">
              <img src={canva} alt="canva" className="graphics-icon h-12" />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                className="graphics-icon h-12"
                height="40px"
                alt="figma"
              />

              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
                className="graphics-icon h-12"
                height="40px"
                alt="photoshop"
              />
            </div>
          </section>
        </div>

        <div className="line h-[485px]"></div>
        {/* Education and Experience */}
        <div className="educations ">
          <h1 className="text-2xl md:pl-4">Education-</h1>
          <div className="education">
            <ul>
              <h2> 2020 - Present </h2>
              <li>
                <span>B.Tech in CSE - </span>
                <a
                  href="https://uem.edu.in/uem-kolkata/"
                  target="_blank"
                  rel="noreferrer"
                >
                  University Of Engineering And Management, Kolkata.
                </a>
              </li>
              <h2> 2018 - 2020 </h2>
              <li>
                <span>Class XII - </span>
                <a
                  href="https://web.memaricrystalmodelschool.edu.in/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Memari Crystal Model School.
                </a>
              </li>
              <h2> 2006 - 2018 </h2>
              <li>
                <span>Class X - </span>
                <a
                  href="http://www.claretsahanagar.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Claret Scool, Sahanagar.
                </a>
              </li>
            </ul>
          </div>
            <h1 className="text-2xl md:pl-4">Experience - </h1>
            <div className="education">
              <ul>
                <h2>March, 2023 - August, 2023 </h2>
                <li>
                  <span>Frontend Developer - </span>
                  <a
                    href="https://uem.edu.in/uem-kolkata/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    PepHub
                  </a>
                </li>
              </ul>
            </div>
            <h1 className="text-2xl md:pl-4">Volunteering - </h1>
            <div className="education">
              <ul>
                <h2>June, 2023 - Present </h2>
                <li className="">
                  <span>Chair - </span>
                  <a
                    href="https://uem.edu.in/uem-kolkata/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    IEEE Student Branch UEM Kolkata
                  </a>
                </li>
              </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
