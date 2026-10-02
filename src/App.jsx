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
import ScrollUp from "./components/ScrollUp";

export default function App() {
  return (
    <div className="app">
      <div className="app__background" aria-hidden="true">
        <span className="app__glow app__glow--one"></span>
        <span className="app__glow app__glow--two"></span>
        <span className="app__grid"></span>
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

        <main className="appContainer" id="main-content" tabIndex={-1}>
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
