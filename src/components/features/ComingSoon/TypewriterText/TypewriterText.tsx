import React from "react";
import "./TypewriterText.css";

const TypewriterText: React.FC = () => {
  const creationText = "BARRAḠA is in creation.";
  const descriptionText =
    "a modern Indian luxury Fashion house shaping quiet detail, thoughtful silhouettes, and evolving palettes. A vision unfolding step by step";

  return (
    <div className="subtitle-text">
      <span className="creation-text glow-text">{creationText}</span>
      <span className="description-text static-text">
        {descriptionText}
        <span className="cursor-color-dot">.</span>
      </span>
    </div>
  );
};

export default TypewriterText;
