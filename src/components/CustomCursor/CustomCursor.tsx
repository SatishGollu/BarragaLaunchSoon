import { useEffect, useRef, useState } from "react";
import "./CustomCursor.css";

const TRAIL_COUNT = 15;
const CURSOR_EASING = 0.2;
const TRAIL_OPACITY_SCALE = 0.8;

const THEME_COLORS = {
  dark: "#F24B42",
  light: "#F24B42", // Keep same coral color for both modes
} as const;

interface Trail {
  x: number;
  y: number;
  speed: number;
  size: number;
}

interface CustomCursorProps {
  theme?: "dark" | "light" | "auto";
  darkColor?: string;
  lightColor?: string;
}

const CustomCursor = ({
  theme = "auto",
  darkColor = THEME_COLORS.dark,
  lightColor = THEME_COLORS.light,
}: CustomCursorProps) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const trailsRef = useRef<Trail[]>([]);
  const [currentColor, setCurrentColor] = useState(darkColor);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkDevice  = () => {
      const hasTouch =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        // @ts-ignore
        navigator.msMaxTouchPoints > 0;
      const isMobileScreen = window.innerWidth <= 1024;
      const isActualMobile = hasTouch && isMobileScreen;
      
      setIsMobile(isActualMobile);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    const detectTheme = () => {
      if (theme === "auto") {
        const isDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        setCurrentColor(isDark ? darkColor : lightColor);
      } else {
        setCurrentColor(theme === "dark" ? darkColor : lightColor);
      }
    };

    detectTheme();

    if (theme === "auto") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e: MediaQueryListEvent) => {
        setCurrentColor(e.matches ? darkColor : lightColor);
      };

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme, darkColor, lightColor]);

  useEffect(() => {
    trailsRef.current = Array(TRAIL_COUNT)
      .fill(null)
      .map(() => ({
        x: 0,
        y: 0,
        size: Math.random() * 4 + 4,
        speed: 0.1 + Math.random() * 0.1,
      }));

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseDown = () => {
      cursorRef.current?.classList.add("expand");
    };

    const handleMouseUp = () => {
      cursorRef.current?.classList.remove("expand");
    };

    const animate = () => {
      cursorPos.current.x +=
        (mousePos.current.x - cursorPos.current.x) * CURSOR_EASING;
      cursorPos.current.y +=
        (mousePos.current.y - cursorPos.current.y) * CURSOR_EASING;

      if (cursorRef.current) {
        cursorRef.current.style.left = cursorPos.current.x + "px";
        cursorRef.current.style.top = cursorPos.current.y + "px";
      }

      let prevX = cursorPos.current.x;
      let prevY = cursorPos.current.y;

      trailsRef.current.forEach((trail, index) => {
        const trailElement = trailRefs.current[index];
        if (!trailElement) return;

        trail.x += (prevX - trail.x) * trail.speed;
        trail.y += (prevY - trail.y) * trail.speed;

        trailElement.style.left = trail.x + "px";
        trailElement.style.top = trail.y + "px";

        const opacity = 1 - index / trailsRef.current.length;
        trailElement.style.opacity = opacity.toString();

        const scale =
          1 - (index / trailsRef.current.length) * TRAIL_OPACITY_SCALE;
        trailElement.style.width = `${trail.size * scale}px`;
        trailElement.style.height = `${trail.size * scale}px`;

        prevX = trail.x;
        prevY = trail.y;
      });

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    animate();

    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (cursorRef.current) cursorRef.current.style.opacity = "0";
        trailRefs.current.forEach((trail) => {
          if (trail) trail.style.opacity = "0";
        });
      } else {
        if (cursorRef.current) cursorRef.current.style.opacity = "1";
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  if (isMobile) {
    return null;
  }

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor"
        style={{
          background: currentColor,
          boxShadow: `0 0 20px ${currentColor}, 0 0 40px ${currentColor}`,
        }}
      />
      {Array(TRAIL_COUNT)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) trailRefs.current[index] = el;
            }}
            className="trail"
            style={{
              background: currentColor,
              boxShadow: `0 0 15px ${currentColor}`,
            }}
          />
        ))}
    </>
  );
};

export default CustomCursor;
