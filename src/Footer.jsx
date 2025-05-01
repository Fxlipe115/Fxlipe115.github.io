import React from "react";
import "./App.css";

export default function Footer() {
  return (
    <footer className="footer retro-footer">
      <hr className="retro-hr" />
      <div className="footer-inner">
        <p className="footer-text">
          © 2025 Felipe Graeff |
          <a href="/sitemap.xml" className="retro-link">
            Site Map
          </a>{" "}
          |
          <a href="/robots.txt" className="retro-link">
            Robots.txt
          </a>
        </p>
        <p className="footer-text pgp-info">
          🔐 <strong>PGP:</strong>
          <a
            href="https://graeffsoftware.com/pgp.asc"
            target="_blank"
            rel="noopener noreferrer"
            className="retro-link"
          >
            BB06 EA81 3AB6 1ACF 3D78 88C5 D48F 2706 1FB4 8287
          </a>
        </p>
      </div>
    </footer>
  );
}
