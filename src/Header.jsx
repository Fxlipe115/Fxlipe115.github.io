import React from "react";
import Marquee from "react-fast-marquee";
import "./App.css";

export default function Header() {
  return (
    <header className="header">
      <h1>⚡ Welcome to Felipe Graeff’s Retro Hub ⚡</h1>
      <Marquee
        gradient
        gradientColor={[0, 0, 0]}
        gradientWidth={80}
        speed={40}
        pauseOnHover
        pauseOnClick
        className="header-marquee"
      >
        Hello, I'm Felipe — back-end dev • linguistics nerd • amateur
        photographer • kendō & iaidō practitioner • aviation enthusiast •
        urbanism aficionado!
      </Marquee>
    </header>
  );
}
