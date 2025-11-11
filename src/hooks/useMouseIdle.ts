import { useState, useEffect, useCallback, useRef } from "react";

interface UseMouseIdleProps {
  idleTime?: number; // in milliseconds
  onIdle?: () => void;
  onActive?: () => void;
}

export const useMouseIdle = ({
  idleTime = 10000, // 10 seconds default
  onIdle,
  onActive,
}: UseMouseIdleProps) => {
  const [isIdle, setIsIdle] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const isIdleRef = useRef(false);
  const gracePeriodRef = useRef(false);

  // Update refs when state changes
  useEffect(() => {
    isIdleRef.current = isIdle;
  }, [isIdle]);

  const resetIdleTimer = useCallback(() => {
    console.log(
      "🖱️ Resetting idle timer, current idle state:",
      isIdleRef.current,
      "grace period:",
      gracePeriodRef.current
    );

    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // If user was idle, mark as active (but only if grace period has passed)
    if (isIdleRef.current && !gracePeriodRef.current) {
      console.log("⚡ User became active, calling onActive");
      setIsIdle(false);
      onActive?.();
    } else if (isIdleRef.current && gracePeriodRef.current) {
      console.log("🛡️ Grace period active, ignoring user activity");
    }

    // Set new timeout (only if not in grace period)
    if (!gracePeriodRef.current) {
      timeoutRef.current = setTimeout(() => {
        console.log("😴 User went idle, calling onIdle");
        setIsIdle(true);
        gracePeriodRef.current = true; // Start grace period
        onIdle?.();

        // End grace period after 1 second
        setTimeout(() => {
          console.log("🔓 Grace period ended");
          gracePeriodRef.current = false;
        }, 1000);
      }, idleTime);
    }
  }, [idleTime, onIdle, onActive]);

  useEffect(() => {
    console.log("🔧 Setting up idle detection hook");

    const events = [
      "mousedown",
      "mousemove",
      "keypress",
      "scroll",
      "touchstart",
      "click",
    ];

    const resetTimer = () => {
      console.log("👆 User activity detected");
      // If we're in grace period and user is active, end grace period and dismiss
      if (gracePeriodRef.current && isIdleRef.current) {
        console.log("🏃 User wants to dismiss during grace period");
        gracePeriodRef.current = false;
        setIsIdle(false);
        onActive?.();
        return;
      }
      resetIdleTimer();
    };

    // Add event listeners
    events.forEach((event) => {
      document.addEventListener(event, resetTimer, true);
    });

    // Start the timer immediately
    resetIdleTimer();

    // Cleanup
    return () => {
      console.log("🧹 Cleaning up idle detection");
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      events.forEach((event) => {
        document.removeEventListener(event, resetTimer, true);
      });
    };
  }, [resetIdleTimer]);

  return isIdle;
};
