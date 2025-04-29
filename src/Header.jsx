import React from "react";
import Marquee from "react-fast-marquee";
import "./App.css";

export default function Header() {
  return (
    <header className="header">
      <h1>⚡ Welcome to Felipe Graeff’s Retro Hub ⚡</h1>
      <Marquee gradient={false} speed={50} className="header-marquee">
        “Hello, I'm Felipe — back-end dev & linguistics nerd & photography
        enthusiast & kendo practitioner!”
      </Marquee>
    </header>
  );
}
