import React, { useEffect, useState } from "react";
import "./MouseTrail.css";

export default function MouseTrail() {
  const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const onResize = () => setIsMobile(window.innerWidth <= 768);
  //   onResize();
  //   window.addEventListener("resize", onResize);
  //   return () => window.removeEventListener("resize", onResize);
  // }, []);

  useEffect(() => {
    if (isMobile) return;
    const scales = [1, 0.9, 0.8, 0.5, 0.2];
    const handleMouseMove = (e) => {
      scales.forEach((scale) => {
        const range = (1 - scale) * 75;
        const x = e.pageX + Math.round(Math.random() * range - range / 2);
        const y = e.pageY + Math.round(Math.random() * range - range / 2);
        const star = document.createElement("div");
        star.className = "star";
        star.style.top = `${y}px`;
        star.style.left = `${x}px`;
        document.body.appendChild(star);
        const ttl = Math.round(Math.random() * scale * 600);
        setTimeout(() => {
          document.body.removeChild(star);
        }, ttl);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile]);

  return null;
}
