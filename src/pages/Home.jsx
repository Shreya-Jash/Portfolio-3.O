import React from "react";
import myPic from "../assets/myPic.png";
import "../styles/home.css";
import myPic2 from "../assets/myPic2.png";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="home flex justify-between h-screen" id="home">
      <div className="main--text pt-44">
        <h1 className="text-3xl mb-4">
          Hi, I'm <span className="myname text-amber-300">Shreya Jash</span>
          <span className="wave">👋</span>
        </h1>
        <section className="mypicmobile">
          <img src={myPic2} className="myPicmobile" alt="myPicture" />
        </section>
        <h1 className="text-5xl mb-4 bg-gradient-to-r from-yellow-200 to-yellow-600 bg-clip-text text-transparent">
          <Typewriter
            options={{
              strings: [
                "Full-Stack Developer",
                "Graphics Designer",
                "Problem Solver",
                "Painter",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>{" "}
        <p className="main-para italic text-lg">What truly sets me apart is my love for blending art with code 💛</p>
        <a
          className="text-white "
          href="https://drive.google.com/file/d/1DPqNwvmLAKWJuKZiaZPinjpXfQkqRBYT/view?usp=sharing"
        >
          <button className="rounded-lg w-32 h-9 mt-3 bg-gradient-to-r from-blue-500 to-yellow-500 hover:from-blue-800 hover:to-yellow-800">Resume</button>
        </a>
      </div>
      <section className="myPic-sec">
        <img src={myPic} className="myPic" alt="myPicture" />
      </section>
    </div>
  );
}
