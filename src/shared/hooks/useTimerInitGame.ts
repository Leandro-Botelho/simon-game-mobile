import { useFocusEffect } from "expo-router";
import { useState, useEffect, useCallback } from "react";

export const useTimerInitGame = () => {
  const [timer, setTimer] = useState(3);
  const [isGameStarted, setIsGameStarted] = useState(false);

  useFocusEffect(
    useCallback(() => {
      let countdown: NodeJS.Timeout;
      setTimer(3);
      setIsGameStarted(false);

      countdown = setInterval(() => {
        setTimer((prev) => {
          if (prev === 0) {
            clearInterval(countdown);
            setIsGameStarted(true);
            return prev;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(countdown);
    }, [])
  );

  return {
    timer,
    isGameStarted,
  };
};
