import myPic from "../assets/myPic.png";
import "../styles/home.css";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <div className="home flex justify-between h-[500px]" id="home">
      <div className="div1 flex justify-center items-center">
        <div className="main--text">
          <h1 className="text-3xl mb-4">
            Hi, I'm <span className="myname text-amber-300">Shreya Jash</span>
            <span className="wave">👋</span>
          </h1>
          <section className="mypicmobile flex justify-center items-center my-3 md:my-0 md:hidden">
            <img
              src={myPic}
              className="myPicmobile h-[200px] rounded-xl"
              alt="myPicture"
            />
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
          </h1>
          <p className="main-para leading-8 text-xl italic">
            What truly sets me apart is my love for blending art with code 💛
          </p>
          <a
            className="text-white "
            href="https://drive.google.com/file/d/1ngtjrFGiYnMB44v2g6cNX1iBEO0UlsnM/view?usp=sharing"
            target="_blank" rel="noreferrer"
          >
            <button className="rounded-lg w-32 h-9 mt-3 bg-gradient-to-r from-blue-500 to-yellow-500 hover:from-blue-800 hover:to-yellow-800">
              Resume
            </button>
          </a>
        </div>
      </div>
      <section className="myPic-sec hidden md:flex justify-center items-center">
        <img
          src={myPic}
          className="myPic md: h-1/2 lg:h-[360px] rounded-xl"
          alt="myPicture"
        />
      </section>
    </div>
  );
}
