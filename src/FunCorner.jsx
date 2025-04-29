import React from "react";
import "./App.css";
import baby from "./assets/images/baby.gif";
import keyboard from "./assets/images/keyboard.gif";

export default function FunCorner() {
  return (
    <aside className="column right">
      <h2>Fun Stuff</h2>
      <img src={baby} alt="Fun baby" />
      <br />
      <ul>
        <li>✔️ Dial-up Sound</li>
        <li>✔️ Glitter Cursor</li>
        <li>✔️ Random GIF Counter:</li>
      </ul>
      <br />
      <a href="/guestbook.html">
        <img src={keyboard} alt="Sign Guestbook" width="30%" />
        <br />
        Sign Guestbook
      </a>
      <img src="assets/gifs/counter.gif" alt="Counter" className="counter" />
    </aside>
  );
}
