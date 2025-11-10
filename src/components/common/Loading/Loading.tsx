import React from "react";
import "./Loading.css";

interface LoadingProps {
  message?: string;
  size?: "small" | "medium" | "large";
  fullScreen?: boolean;
}

const Loading: React.FC<LoadingProps> = ({
  message = "Loading...",
  size = "medium",
  fullScreen = false,
}) => {
  const spinnerClass = `loading-spinner loading-spinner--${size}`;

  if (fullScreen) {
    return (
      <div className="loading-fullscreen">
        <div className="loading-content">
          <div className={spinnerClass}></div>
          {message && <p className="loading-message">{message}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="loading-inline">
      <div className={spinnerClass}></div>
      {message && <p className="loading-message">{message}</p>}
    </div>
  );
};

export default Loading;
