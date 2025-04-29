import React from "react";
import "./App.css";

import mail from "./assets/images/note.gif";
import hello from "./assets/images/hello.gif";

export default function BioPanel() {
  return (
    <aside className="column left">
      <h2>About Me</h2>
      <img src={hello} alt="Hello" />
      <br />
      <p>
        I’m a Brazilian software engineer who loves retro web design,
        cryptography, and kendo. Browse my portfolios below!
      </p>
      <hr />
      <a href="mailto:hello@felipegraeff.com">
        <img src={mail} width="40%" alt="Email me" />
        <br />
        Contact Me
      </a>
    </aside>
  );
}
