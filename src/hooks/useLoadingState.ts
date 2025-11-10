import { useState, useCallback } from "react";

interface LoadingState {
  isLoading: boolean;
  startLoading: () => void;
  stopLoading: () => void;
  toggleLoading: () => void;
  setIsLoading: (value: boolean) => void;
}

/**
 * Custom hook to manage loading state
 * @param initialState - Initial loading state
 * @returns { isLoading, startLoading, stopLoading, toggleLoading, setIsLoading }
 */
const useLoadingState = (initialState = false): LoadingState => {
  const [isLoading, setIsLoading] = useState(initialState);

  const startLoading = useCallback(() => {
    setIsLoading(true);
  }, []);

  const stopLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  const toggleLoading = useCallback(() => {
    setIsLoading((prev) => !prev);
  }, []);

  return {
    isLoading,
    startLoading,
    stopLoading,
    toggleLoading,
    setIsLoading,
  };
};

export default useLoadingState;
