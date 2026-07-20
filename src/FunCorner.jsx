import { useState, useEffect } from "react";
import "./App.css";
import baby from "./assets/images/baby.gif";
import keyboard from "./assets/images/keyboard.gif";
import dialup from "./assets/audios/dial-up.mp3";

const ANSWERS = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful.",
];

export default function FunCorner() {
  const [glitter, setGlitter] = useState(true);
  const [dialPlaying, setDialPlaying] = useState(false);
  const [answer, setAnswer] = useState(null);
  const [shaking, setShaking] = useState(false);
  const [nokia, setNokia] = useState(false);
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const onChange = (e) => setIsMobile(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const playDialup = () => {
    const audio = new Audio(dialup);
    setDialPlaying(true);
    audio.onended = () => setDialPlaying(false);
    audio.play().catch(() => setDialPlaying(false));
  };

  // MouseTrail reads this body class each mousemove — laziest cross-component channel.
  const toggleGlitter = () => {
    const next = !glitter;
    setGlitter(next);
    document.body.classList.toggle("glitter-off", !next);
  };

  // PhoneFrame.css gates the Nokia overlay on body.nokia-on. Off by default.
  const toggleNokia = () => {
    const next = !nokia;
    setNokia(next);
    document.body.classList.toggle("nokia-on", next);
  };

  const shake = () => {
    if (shaking) return;
    setShaking(true);
    setAnswer(null);
    setTimeout(() => {
      setAnswer(ANSWERS[Math.floor(Math.random() * ANSWERS.length)]);
      setShaking(false);
    }, 600);
  };

  return (
    <aside className="column right">
      <h2>Fun Stuff</h2>
      <img src={baby} alt="Fun baby" />

      <ul className="fun-list">
        <li>
          <button className="fun-toggle" onClick={toggleNokia} disabled={!isMobile}>
            {nokia ? "✔️" : "▢"} Nokia 3310 Mode
          </button>
          {!isMobile && <span className="fun-note"> (mobile only)</span>}
        </li>
        <li>
          <button className="fun-toggle" onClick={playDialup}>
            {dialPlaying ? "🔊" : "🔈"} Dial-up Sound
          </button>
        </li>
        <li>
          <button className="fun-toggle" onClick={toggleGlitter}>
            {glitter ? "✔️" : "▢"} Glitter Cursor
          </button>
        </li>
      </ul>

      <div className="oracle">
        <p className="oracle-label">Ask the Magic 8-Ball</p>
        <div
          className={`eight-ball ${shaking ? "shaking" : ""}`}
          onClick={shake}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") shake();
          }}
          role="button"
          tabIndex={0}
          aria-label="Magic 8-ball, click to ask"
        >
          {answer && !shaking ? (
            <div className="eight-window">
              <span>{answer}</span>
            </div>
          ) : (
            <div className="eight-8">8</div>
          )}
        </div>
      </div>

      <div className="badges">
        <span className="badge88">Netscape Now!</span>
        <span className="badge88">Made with Notepad</span>
        <span className="badge88">HTML 3.2</span>
        <span className="badge88">Best viewed 800×600</span>
      </div>

      <p className="webring">« prev | random | next »</p>

      <a href="/guestbook.html">
        <img src={keyboard} alt="Sign Guestbook" width="30%" />
        <br />
        Sign Guestbook
      </a>

      <div className="counter-block">
        <span>You are visitor #</span>
        <br />
        <img src="/assets/gifs/counter.gif" alt="Counter" className="counter" />
      </div>
    </aside>
  );
}
