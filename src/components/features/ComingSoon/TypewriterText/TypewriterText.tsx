import React from "react";
import "./TypewriterText.css";

const TypewriterText: React.FC = () => {
  const creationText = "Barraga is in creation.";
  const descriptionText =
    "We're shaping timeless clothing — to live with you, and move with your journey.";

  return (
    <div className="subtitle-text">
      <span className="creation-text glow-text">{creationText}</span>
      <span className="description-text static-text">{descriptionText}</span>
    </div>
  );
};

export default TypewriterText;
