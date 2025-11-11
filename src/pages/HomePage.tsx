import React from "react";
import BallOnlyMorphing from "@components/features/ComingSoon/BallOnlyMorphing";
import TypewriterText from "@components/features/ComingSoon/TypewriterText";
import Logo from "@components/common/Logo";
import { CustomCursor } from "@components/CustomCursor";
import { ThemeToggle } from "@components/ThemeToggle";
import IdleRibbonOverlay from "@components/FloatingRibbon/IdleRibbonOverlay";
import { useMouseIdle } from "@hooks/useMouseIdle";

import barragaLogo from "@assets/logos/onlyBarraga.svg";
import dragonflyLogo from "@assets/logos/dragonfly.svg";
import { BRAND_TEXT } from "@constants";
import "../App.css";

const HomePage: React.FC = () => {
  const [theme, setTheme] = React.useState<"dark" | "light">("dark");
  const [showRibbonOverlay, setShowRibbonOverlay] = React.useState(false);

  // Mouse idle detection - show ribbon after 3 seconds of inactivity (for testing)
  useMouseIdle({
    idleTime: 3000, // 3 seconds for testing
    onIdle: () => {
      console.log("🎭 Showing ribbon overlay");
      setShowRibbonOverlay(true);
    },
    onActive: () => {
      console.log("🏠 Hiding ribbon overlay");
      setShowRibbonOverlay(false);
    },
  });

  // Debug: Log overlay state changes
  React.useEffect(() => {
    console.log("🎯 Ribbon overlay state changed:", showRibbonOverlay);
  }, [showRibbonOverlay]);

  React.useEffect(() => {
    // Sync with theme changes
    const updateTheme = () => {
      const currentTheme =
        document.documentElement.getAttribute("data-theme") || "dark";
      setTheme(currentTheme as "dark" | "light");
    };

    // Initial theme
    updateTheme();

    // Watch for theme changes
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Idle Ribbon Overlay - shows when mouse is idle for 3 seconds */}
      <IdleRibbonOverlay isVisible={showRibbonOverlay} />

      {/* Custom Cursor */}
      <CustomCursor theme={theme} />

      {/* Theme Toggle */}
      <ThemeToggle />

      <div className="App">
        <BallOnlyMorphing /> {/* Top brand logo */}
        <div className="brand-logo">
          <Logo
            src={dragonflyLogo}
            alt={BRAND_TEXT.ALT_TEXTS.DRAGONFLY}
            className="dragonfly-logo"
            size="medium"
          />
        </div>
        {/* Center main logo */}
        <div className="logo-overlay">
          <Logo
            src={barragaLogo}
            alt={BRAND_TEXT.ALT_TEXTS.BARRAGA}
            className="barraga-logo"
            size="large"
          />
        </div>
        {/* Subtitle text with typewriter effect */}
        <TypewriterText />
      </div>
    </>
  );
};

export default HomePage;
