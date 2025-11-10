import React, { Suspense } from "react";
import ErrorBoundary from "@components/common/ErrorBoundary";
import Loading from "@components/common/Loading";
import BallOnlyMorphing from "@components/features/ComingSoon/BallOnlyMorphing";
import TypewriterText from "@components/features/ComingSoon/TypewriterText";
import Logo from "@components/common/Logo";
import { CustomCursor } from "@components/CustomCursor";
import { ThemeToggle } from "@components/ThemeToggle";
import barragaLogo from "@assets/logos/onlyBarraga.svg";
import dragonflyLogo from "@assets/logos/dragonfly.svg";
import { BRAND_TEXT } from "@constants";
import "./App.css";

const App: React.FC = () => {
  const [theme, setTheme] = React.useState<"dark" | "light">("dark");

  React.useEffect(() => {
    // Sync with theme changes
    const updateTheme = () => {
      const currentTheme = document.documentElement.getAttribute("data-theme") || "dark";
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
    <ErrorBoundary>
      <Suspense fallback={<Loading fullScreen message="Loading Barraga..." />}>
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
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
