import { useRef } from "react";
import "./PhoneFrame.css";

// Nokia 3310 photo backdrop (mobile only, toggled via body.nokia-on in
// PhoneFrame.css). The .app content shows through the green LCD. Invisible
// hotspots over the keypad play DTMF tones; the navi rocker scrolls the LCD.

// Standard DTMF frequency pairs (low, high) per key.
const KEYS = [
  { k: "1", f: [697, 1209] },
  { k: "2", f: [697, 1336] },
  { k: "3", f: [697, 1477] },
  { k: "4", f: [770, 1209] },
  { k: "5", f: [770, 1336] },
  { k: "6", f: [770, 1477] },
  { k: "7", f: [852, 1209] },
  { k: "8", f: [852, 1336] },
  { k: "9", f: [852, 1477] },
  { k: "*", f: [941, 1209] },
  { k: "0", f: [941, 1336] },
  { k: "#", f: [941, 1477] },
];

export default function PhoneFrame() {
  const ctxRef = useRef(null);

  const playDTMF = ([low, high]) => {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    const ctx = (ctxRef.current ||= new Ctx());
    if (ctx.state === "suspended") ctx.resume();
    const t = ctx.currentTime;
    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.15, t);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);
    gain.connect(ctx.destination);
    [low, high].forEach((freq) => {
      const osc = ctx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = freq;
      osc.connect(gain);
      osc.start(t);
      osc.stop(t + 0.18);
    });
  };

  const scrollApp = (dir) => {
    const app = document.querySelector(".app");
    if (app) app.scrollBy({ top: dir * app.clientHeight * 0.7, behavior: "smooth" });
  };

  return (
    <div className="phone-frame">
      <button
        className="arrow-up"
        onClick={() => scrollApp(-1)}
        aria-label="Scroll up"
      />
      <button
        className="arrow-down"
        onClick={() => scrollApp(1)}
        aria-label="Scroll down"
      />
      <div className="phone-keys">
        {KEYS.map(({ k, f }) => (
          <button
            key={k}
            className="phone-key"
            onClick={() => playDTMF(f)}
            aria-label={`Key ${k}`}
          />
        ))}
      </div>
    </div>
  );
}
