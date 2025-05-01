import React from "react";
import "./App.css";
import enter from "./assets/images/enter.gif";
import camera from "./assets/images/camera.gif";
import construction from "./assets/images/construction.gif";
import welcome from "./assets/images/welcome.png";

export default function PortalsPanel() {
  return (
    <main className="column center">
      <h2>Portfolios</h2>
      <div className="portfolio-links">
        <a
          href="https://software.felipegraeff.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={enter} alt="Enter Software" />
          <br />
          <span>Software</span>
        </a>
        <a
          href="https://photo.felipegraeff.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={camera} alt="Enter Photo" width="30%" />
          <br />
          <span>Photography</span>
        </a>
      </div>
      <img
        src={welcome}
        alt="Welcome to the internet"
        className="welcome"
        width="60%"
      />
      <img
        src={construction}
        alt="Under Construction"
        className="construction"
        width="10%"
      />
      <div className="under-construction">
        <h3>Under Construction</h3>
        <p>
          This section is under construction. Please check back later for
          updates.
        </p>
      </div>
    </main>
  );
}
