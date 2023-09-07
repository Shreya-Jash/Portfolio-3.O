import React from "react";
import myPic from "../assets/myPic.png";
import "../styles/home.css";
import myPic2 from "../assets/myPic2.png";

export default function Home() {
  return (
    <div className="home flex justify-between h-screen" id="home">
      <div className="main--text pt-44">
        <h1>
          Hi, I'm <span className="myname text-amber-300">Shreya Jash</span>
          <span className="wave">👋</span>
        </h1>
        <section className="mypicmobile">
          <img src={myPic2} className="myPicmobile" alt="myPicture" />
        </section>

        <h1 className="text-5xl bg-gradient-to-r from-yellow-200 to-yellow-600 bg-clip-text text-transparent">
          Designer and a Frontend Developer.
        </h1>
        <p className="main-para">I belive in the art of Programming...💛</p>
        <a className="text-white" href="https://drive.google.com/file/d/1DPqNwvmLAKWJuKZiaZPinjpXfQkqRBYT/view?usp=sharing">
          <button>Download CV</button>
        </a>
      </div>
      <section className="myPic-sec">
        <img src={myPic} className="myPic" alt="myPicture" />
      </section>
    </div>
  );
}
