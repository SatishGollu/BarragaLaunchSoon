import React, { useState, useEffect } from "react";
import { FloatingRibbon } from "@components/FloatingRibbon";
import "./IdleRibbonOverlay.css";

interface IdleRibbonOverlayProps {
  isVisible: boolean;
}

const IdleRibbonOverlay: React.FC<IdleRibbonOverlayProps> = ({ isVisible }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [animationState, setAnimationState] = useState<"fade-in" | "fade-out">(
    "fade-in"
  );
  console.log(
    "🎭 IdleRibbonOverlay render, isVisible:",
    isVisible,
    "shouldRender:",
    shouldRender
  );

  useEffect(() => {
    if (isVisible) {
      // Show component and start fade-in
      setShouldRender(true);
      setAnimationState("fade-in");

      // Delay title change to sync with fade-in visibility
      const titleTimer = setTimeout(() => {
        console.log("📝 Changing title to: we miss you 😢");
        document.title = "😢 We Miss You";
      }, 500); // Change title when ribbon becomes more visible

      return () => clearTimeout(titleTimer);
    } else if (shouldRender) {
      // Start fade-out animation
      setAnimationState("fade-out");

      // Hide component after animation completes
      const timer = setTimeout(() => {
        setShouldRender(false);
        // Restore to constant BARRAGA title
        console.log("🔄 Restoring title to: BARRAGA");
        document.title = "BARRAGA";
      }, 500); // Match the CSS animation duration (0.5s)

      return () => clearTimeout(timer);
    }
  }, [isVisible, shouldRender]);

  if (!shouldRender) return null;

  return (
    <div className={`idle-ribbon-overlay ${animationState}`}>
      {/* Full screen ribbon */}
      <div className="idle-ribbon-content">
        <FloatingRibbon />
      </div>
    </div>
  );
};

export default IdleRibbonOverlay;
