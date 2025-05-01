import { useState } from "react";
import "./Accordion.css";

export default function Accordion({ sections }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (i) => {
    setActiveIndex(i === activeIndex ? null : i);
  };

  return (
    <div className="accordion">
      {sections.map(({ title, content }, i) => (
        <div key={title} className="accordion-item">
          <div
            className={`accordion-title ${i === activeIndex ? "active" : ""}`}
            onMouseEnter={() => toggle(i)}
            onClick={() => toggle(i)}
          >
            {title}
          </div>
          {i === activeIndex && (
            <div className="accordion-panel">{content}</div>
          )}
        </div>
      ))}
    </div>
  );
}
