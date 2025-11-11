import React from "react";
import "./GlassButton.css";

interface GlassButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

const GlassButton: React.FC<GlassButtonProps> = ({
  href,
  onClick,
  children,
  className = "",
  disabled = false,
}) => {
  const classes = `glass-button ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={disabled ? (e) => e.preventDefault() : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default GlassButton;
