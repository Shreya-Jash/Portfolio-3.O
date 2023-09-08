import React, { useState } from "react";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { name, email, message } = data;

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch("https://v1.nocodeapi.com/shreyajash/google_sheets/boqDdACYLErAsJWc?tabId=Sheet1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([[name, email, message]]),
      });
      await Response.json()
      setData({...data,name: " ",email: "",message: " "})
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div
      className="contact h-screen pt-24 flex flex-col md:flex-row md:justify-between"
      id="contact"
    >
      <div className="contact-det text-center">
        <h1>Want to connect?</h1>
        <p className="contact-p">
          I would love to hear from you...😊
          <br />
          Email -{" "}
          <a href="shreyajash2001@gmail.com">shreyajash2001@gmail.com</a>
          <div className="links justify-center">
            <a
              href="https://github.com/Shreya-Jash"
              className="a2"
              target="_blank"
              rel="noreferrer"
            >
              <i class="devicon-github-original"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/shreya-jash-a140191b8/"
              className="a2"
              target="_blank"
              rel="noreferrer"
            >
              <i class="devicon-linkedin-plain"></i>
            </a>
            <a
              href="https://twitter.com/jash_shre"
              className="a2"
              target="_blank"
              rel="noreferrer"
            >
              <i class="devicon-twitter-original"></i>
            </a>
          </div>
        </p>
      </div>
      <form className="form-con" onSubmit={handleSubmit}>
        <section className="contact-det2 flex justify-center md:justify-between">
          <input
            type="text"
            placeholder="Name"
            className="contact-ne w-full md:w-72 "
            name="name"
            value={name}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="contact-ne w-full md:w-72"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </section>
        <textarea
          type="text"
          placeholder="Your Note"
          className="note w-full"
          name="message"
          value={message}
          onChange={handleChange}
        />
        <section className="button-sec">
          <button className="button">
            <span>Send</span>
          </button>
        </section>
      </form>
    </div>
  );
}
