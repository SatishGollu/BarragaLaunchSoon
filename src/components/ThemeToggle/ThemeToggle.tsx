import { useState, useEffect } from "react";
import "./ThemeToggle.css";
import lightModeIcon from "./assets/lightmode.svg";
import nightModeIcon from "./assets/nightmode.svg";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect touch device and screen size for proper mobile detection
    const checkTouchDevice = () => {
      const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isMobileScreen = window.innerWidth <= 1024;
      const isActualMobile = hasTouch && isMobileScreen;

      // Only treat as touch device if it's actually a mobile device
      setIsTouchDevice(isActualMobile);
    };

    checkTouchDevice();
    window.addEventListener("resize", checkTouchDevice);

    return () => window.removeEventListener("resize", checkTouchDevice);
  }, []);

  useEffect(() => {
    // Apply theme on mount and when it changes
    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    console.log("Theme changed to:", theme);
  }, [isDark]);

  const handleToggle = (mode: "dark" | "light") => {
    const newIsDark = mode === "dark";
    setIsDark(newIsDark);
    setIsExpanded(false); // Collapse after selection
    console.log("Mode selected:", mode);
  };

  const handleActiveClick = () => {
    if (isTouchDevice) {
      // On touch devices, clicking the active button toggles theme
      handleToggle(isDark ? "light" : "dark");
    } else {
      // On desktop, clicking active button does nothing (hover to expand)
      handleToggle(isDark ? "dark" : "light");
    }
  };

  return (
    <div
      className={`theme-toggle ${isExpanded ? "expanded" : ""} ${
        isTouchDevice ? "touch-device" : ""
      }`}
      onMouseEnter={() => !isTouchDevice && setIsExpanded(true)}
      onMouseLeave={() => !isTouchDevice && setIsExpanded(false)}
    >
      {/* Active mode (always visible in circle) */}
      <button
        className={`theme-toggle__option active ${!isExpanded ? "solo" : ""}`}
        onClick={handleActiveClick}
        aria-label={`Current mode: ${isDark ? "dark" : "light"}. ${
          isTouchDevice ? "Tap to toggle" : ""
        }`}
      >
        <img
          src={isDark ? nightModeIcon : lightModeIcon}
          alt={isDark ? "Night mode" : "Light mode"}
          className="theme-toggle__icon"
        />
      </button>

      {/* Inactive mode (shown only when expanded on desktop) */}
      {isExpanded && !isTouchDevice && (
        <button
          className="theme-toggle__option inactive"
          onClick={() => handleToggle(isDark ? "light" : "dark")}
          aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
          <img
            src={isDark ? lightModeIcon : nightModeIcon}
            alt={isDark ? "Light mode" : "Night mode"}
            className="theme-toggle__icon"
          />
        </button>
      )}
    </div>
  );
};

export default ThemeToggle;
