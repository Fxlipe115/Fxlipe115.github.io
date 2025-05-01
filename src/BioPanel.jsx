import React from "react";
import "./App.css";

import mail from "./assets/images/note.gif";
import hello from "./assets/images/hello.gif";
import AboutMe from "./AboutMe";

export default function BioPanel() {
  return (
    <aside className="column left">
      <h2>About Me</h2>
      <img src={hello} alt="Hello" />
      <br />
      Hi, I'm Felipe Graeff. Below are some of my interests and hobbies. I hope
      you enjoy exploring my website and learning more about me!
      <br />
      <AboutMe />
      <p>Explore my portfolios to see more about my passions and my work.</p>
      <hr />
      <a href="mailto:hello@felipegraeff.com">
        <img src={mail} width="40%" alt="Email me" />
        <br />
        Contact Me
      </a>
    </aside>
  );
}
