import { useState, useEffect, useRef, useCallback } from "react";

export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null>(null);
    
  //Function to stop the timer
  const stopTimer = () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  };

  //Function to start the timer
  const starTimer = useCallback(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer(timer + 1);
    }, 1000);
  }, [timer]);

  // Start the timer when the component mounts
  useEffect(() => {
    starTimer();
    return () => stopTimer();
  }, [starTimer]);

  return (
    <div>
      Hook Timer {timer}
      <h3>
        {timer >= 7 && timer <= 9 ? (
          <p>Almost time to Submit</p>
        ) : timer === 10 ? (
          <p onInvalid={stopTimer} >Exam Closed</p>
        ) : null }
      </h3>
      <p>
        <button onClick={starTimer}>Start</button>
      </p>
      <p>
        <button onClick={stopTimer}>Stop</button>
      </p>
    </div>
  );
};
