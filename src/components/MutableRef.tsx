import { useState, useEffect, useRef } from "react";

export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const stopTimer = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  };
  const starTimer = () => {
    intervalRef.current = window.setInterval(() => {
      setTimer(timer + 1);
    }, 1000);
  };
  useEffect(() => {
    // starTimer();
    return () => stopTimer();
  }, [timer]);
  return (
    <div>
      Hook Timer {timer}
      <p>
        <button onClick={starTimer}>Start</button>
      </p>
      <p>
        <button onClick={stopTimer}>Stop</button>
      </p>
    </div>
  );
};
