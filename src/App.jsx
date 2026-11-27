import { useRef } from "react";
import useCardLight from "./hooks/useCardLight";
import useSignalMotion from "./hooks/useSignalMotion";
import "./styles/motion.css";
import "./styles/about.css";
import "./styles/contact.css";
import "./styles/footer.css";
import "./styles/navbar.css";
import "./App.css";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import ThemeCursor from "./components/ThemeCursor";
import ScrollUp from "./components/ScrollUp";

export default function App() {
  const contentRef = useRef(null);
  useSignalMotion(contentRef);
  useCardLight(contentRef);
  return (
    <div className="app">
      <ThemeCursor />
      <div className="app__background" aria-hidden="true">
        <span className="app__glow app__glow--one"></span>
        <span className="app__glow app__glow--two"></span>
        <span className="app__aurora app__aurora--cyan" />
        <span className="app__aurora app__aurora--gold" />
        <span className="app__grid"></span>
        <div className="app__meteors">
          {[0, 1, 2, 3].map((star) => <span key={star} className="app__meteor" style={{
            "--meteor-top": `${8 + star * 17}%`,
            "--meteor-left": `${35 + (star * 19) % 60}%`,
            "--meteor-delay": `${star * 4.3}s`,
            "--meteor-period": `${17 + star * 3}s`,
          }} />)}
        </div>
        <div className="app__particles">
          {Array.from({ length: 14 }, (_, index) => (
            <span className="app__particle" key={index} style={{
              "--x": `${(index * 37 + 7) % 100}%`,
              "--y": `${(index * 23 + 11) % 100}%`,
              "--drift": `${index % 2 ? 35 : -25}px`,
              "--duration": `${18 + (index % 5) * 4}s`,
              "--delay": `${-index * 3.7}s`,
            }} />
          ))}
        </div>
        <span className="app__flow app__flow--one"></span>
        <span className="app__flow app__flow--two"></span>
        <span className="app__node app__node--one"></span>
        <span className="app__node app__node--two"></span>
        <span className="app__node app__node--three"></span>
        <span className="app__pulse app__pulse--one"></span>
        <span className="app__pulse app__pulse--two"></span>
      </div>

      <div className="app__content">
        <a className="skip-link" href="#main-content">Skip to content</a>
        <NavBar />

        <main ref={contentRef} className="appContainer" id="main-content" tabIndex={-1}>
          <Home />
          <Skills />
          <About />
          <Contact />
        </main>

        <ScrollUp />
        <Footer />
      </div>
    </div>
  );
}
