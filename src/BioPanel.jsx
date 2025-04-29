import React from "react";
import "./App.css";

export default function BioPanel() {
  return (
    <aside className="column left">
      <h2>About Me</h2>
      <img src="/images/hello.gif" alt="Hello" />
      <br />
      <p>
        I’m a Brazilian software engineer who loves retro web design,
        cryptography, and kendo. Browse my portfolios below!
      </p>
      <hr />
      <a href="mailto:felipe@example.com">
        <img src="/images/note.gif" alt="Email me" />
        <br />
        Contact Me
      </a>
    </aside>
  );
}
