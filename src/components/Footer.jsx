import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-div">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <a href="#home">Back to top <span aria-hidden="true">↑</span></a>
      </div>
    </footer>
  );
}
