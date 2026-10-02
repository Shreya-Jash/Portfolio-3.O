import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { profile } from "../data/profile";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);
  const { name, email, message } = data;

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;
    setIsSending(true);
    setStatus("Sending your message...");

    try {
      const response = await fetch("https://v1.nocodeapi.com/shreyajash/google_sheets/boqDdACYLErAsJWc?tabId=Sheet1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([[name, email, message]]),
      });

      if (!response.ok) {
        throw new Error("Message could not be sent.");
      }

      setData({ name: "", email: "", message: "" });
      setStatus("Thanks for reaching out. Your message has been sent.");
    } catch {
      setStatus("Something went wrong. Please email me directly instead.");
    } finally {
      setIsSending(false);
    }
  };
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact-det">
        <span className="section-eyebrow">03 / Contact</span>
        <h2 id="contact-title">Let’s make<br />something better.</h2>
        <p className="contact-p">Have an opportunity or an idea? I’d love to hear it.</p>
        <a className="contact__email" href={`mailto:${profile.email}`}><FontAwesomeIcon icon={faEnvelope} aria-hidden="true" /><span>{profile.email}</span><FontAwesomeIcon icon={faArrowRight} aria-hidden="true" /></a>
        <div className="links">
          <a href={profile.linkedin} className="a2" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} />LinkedIn</a>
          <a href={profile.github} className="a2" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} />GitHub</a>
        </div>
      </div>

      <form className="form-con" onSubmit={handleSubmit} aria-busy={isSending}>
        <h3>Send a note</h3>
        <section className="contact-det2">
          <label htmlFor="contact-name">Your name
          <input
            id="contact-name"
            autoComplete="name"
            type="text"
            placeholder="Name"
            className="contact-ne"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
          </label>
          <label htmlFor="contact-email">Email address
          <input
            id="contact-email"
            autoComplete="email"
            type="email"
            placeholder="Your Email"
            className="contact-ne"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          </label>
        </section>
        <label htmlFor="contact-message">Your message
        <textarea
          id="contact-message"
          placeholder="Tell me what you have in mind…"
          className="note"
          name="message"
          value={message}
          onChange={handleChange}
          required
        />
        </label>
        <section className="button-sec">
          <button className="button" type="submit" disabled={isSending}>
            <span>{isSending ? "Sending…" : "Send message"}</span>
          </button>
        </section>
        {status ? <p className="contact__status" role="status" aria-live="polite">{status}</p> : null}
      </form>
    </section>
  );
}
