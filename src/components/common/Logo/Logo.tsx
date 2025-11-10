import React from "react";
import "./Logo.css";

interface LogoProps {
  src: string;
  alt: string;
  className?: string;
  onClick?: () => void;
  size?: "small" | "medium" | "large";
}

const Logo: React.FC<LogoProps> = ({
  src,
  alt,
  className,
  onClick,
  size = "medium",
}) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`logo logo--${size} ${className || ""}`}
      onClick={onClick}
      loading="lazy"
    />
  );
};

export default Logo;
