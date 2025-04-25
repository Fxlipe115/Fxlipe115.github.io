import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import MouseTrail from "./MouseTrail.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <MouseTrail />
  </StrictMode>
);
