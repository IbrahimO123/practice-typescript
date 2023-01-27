import { useState, useEffect, useRef, useCallback } from "react";

export const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null>(null);

  // const x = new MutationObserver(function (e) {
  //   if (e[0].removedNodes) console.log(1);
  // });

  // x.observe(document.getElementById("parent") as HTMLDivElement, {
  //   childList: true,
  // });

  // Select the target node (the element you want to observe)
  const targetNode = document.getElementById("parent") as HTMLDivElement;;

  // Create an observer instance
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.removedNodes.length > 0) {
        console.log("Element has been removed from the document");
        stopTimer();
      }
    });
  });

  // Configure the observer
  const config = { childList: true };

  // Start observing the target node
  setTimeout(()=> (observer.observe(targetNode, config)), 5000);

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
      <div id="parent">
        {timer >= 7 && timer <= 9 ? (
          <h2>Almost time to Submit</h2>
        ) : timer === 10 ? (
          <h2 id="child" onInvalid={stopTimer}>
            Exam Closed
          </h2>
        ) : null}
      </div>
      <p>
        <button onClick={starTimer}>Start</button>
      </p>
      <p>
        <button onClick={stopTimer}>Stop</button>
      </p>
    </div>
  );
};
