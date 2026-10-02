import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { profile } from "../data/profile";

const navItems = [
  { label: "Home", to: "home" },
  { label: "Skills", to: "skills" },
  { label: "Experience", to: "experience" },
  { label: "Contact", to: "contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };
    const closeOnOutsideClick = (event) => {
      if (!navRef.current?.contains(event.target)) setIsOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 861px)");
    const closeOnDesktop = () => { if (desktop.matches) setIsOpen(false); };
    window.addEventListener("keydown", closeOnEscape);
    window.addEventListener("pointerdown", closeOnOutsideClick);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      window.removeEventListener("pointerdown", closeOnOutsideClick);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [isOpen]);

  useEffect(() => {
    const updateActive = () => {
      const current = [...navItems].reverse().find((item) => document.getElementById(item.to)?.getBoundingClientRect().top <= 160);
      setActive(current?.to || "home");
    };
    window.addEventListener("scroll", updateActive, { passive: true });
    updateActive();
    return () => window.removeEventListener("scroll", updateActive);
  }, []);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation" ref={navRef}>
        <a className="site-nav__brand" href="#home" onClick={() => setIsOpen(false)}>
          <span className="site-nav__monogram" aria-hidden="true">SJ<span>.</span></span>
          <span>{profile.name}<small>Developer & automation builder</small></span>
        </a>
        <button className="mobile-responsive" type="button" ref={toggleRef} onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Close navigation" : "Open navigation"} aria-expanded={isOpen} aria-controls="navigation-links">
          <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
        </button>
        <div id="navigation-links" className={`nav-menu${isOpen ? " nav-menu--open" : ""}`}>
          <ul className="nav-links">
            {navItems.map((item) => <li key={item.to}><a href={`#${item.to}`} aria-current={active === item.to ? "location" : undefined} onClick={() => setIsOpen(false)}>{item.label}</a></li>)}
          </ul>
          <a className="site-nav__cta" href={profile.resume} target="_blank" rel="noreferrer" onClick={() => setIsOpen(false)}>Résumé <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" /></a>
        </div>
      </nav>
    </header>
  );
}
