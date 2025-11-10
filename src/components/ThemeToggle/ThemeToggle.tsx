import { useState, useEffect } from "react";
import "./ThemeToggle.css";
import lightModeIcon from "./assets/lightmode.svg";
import nightModeIcon from "./assets/nightmode.svg";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

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

  return (
    <div
      className={`theme-toggle ${isExpanded ? "expanded" : ""}`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Active mode (always visible in circle) */}
      <button
        className={`theme-toggle__option active ${!isExpanded ? "solo" : ""}`}
        onClick={() => handleToggle(isDark ? "dark" : "light")}
        aria-label={`Current mode: ${isDark ? "dark" : "light"}`}
      >
        <img
          src={isDark ? nightModeIcon : lightModeIcon}
          alt={isDark ? "Night mode" : "Light mode"}
          className="theme-toggle__icon"
        />
      </button>

      {/* Inactive mode (shown only when expanded) */}
      {isExpanded && (
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
