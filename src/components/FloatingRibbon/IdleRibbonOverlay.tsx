import React, { useState, useEffect } from "react";
import { FloatingRibbon } from "@components/FloatingRibbon";
import barragaLogo from "@assets/logos/BarragaLogo.svg";
import "./IdleRibbonOverlay.css";

interface IdleRibbonOverlayProps {
  isVisible: boolean;
}

const IdleRibbonOverlay: React.FC<IdleRibbonOverlayProps> = ({ isVisible }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [animationState, setAnimationState] = useState<"fade-in" | "fade-out">(
    "fade-in"
  );

  useEffect(() => {
    if (isVisible) {
      setShouldRender(true);
      setAnimationState("fade-in");

      const titleTimer = setTimeout(() => {
        document.title = "😢 We Miss You";
      }, 500);

      return () => clearTimeout(titleTimer);
    } else if (shouldRender) {
      setAnimationState("fade-out");

      const timer = setTimeout(() => {
        setShouldRender(false);
        document.title = "BARRAḠA";
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isVisible, shouldRender]);

  if (!shouldRender) return null;

  return (
    <div className={`idle-ribbon-overlay ${animationState}`}>
      <div className="idle-ribbon-content">
        <FloatingRibbon />
      </div>
      <div className="idle-footer-logo">
        <img src={barragaLogo} alt="BARRAḠA" className="subtle-logo" />
      </div>
    </div>
  );
};

export default IdleRibbonOverlay;
