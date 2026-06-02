import { useState, useEffect } from "react";

export default function ProgressBar() {
  const [bar, setBar] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("clock is running");
      setBar((prevVal) => {
        const nextVal = prevVal + 5;
        if (nextVal >= 100) {
          clearInterval(interval);
          return 100;
        }
        return nextVal;
      });
      return () => {
        clearInterval(interval);
      };
    }, 250);
  }, []);

  return (
    <div className="container">
      <div
        className="progress"
        style={{ transform: `translateX(${bar - 100}%)` }}
      ></div>
    </div>
  );
}
