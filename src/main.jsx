import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MouseTrail from "./MouseTrail.jsx";
import Header from "./Header.jsx";
import BioPanel from "./BioPanel.jsx";
import PortalsPanel from "./PortalsPanel.jsx";
import FunCorner from "./FunCorner.jsx";
import Footer from "./Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="app">
      <Header />
      <main className="main">
        <BioPanel />
        <PortalsPanel />
        <FunCorner />
      </main>
      <Footer />
    </div>
    {/* <App /> */}
    <MouseTrail />
  </StrictMode>
);
