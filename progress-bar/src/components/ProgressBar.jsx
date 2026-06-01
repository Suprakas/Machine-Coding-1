import { useState, useEffect } from "react";
export default function ProgressBar() {
  const [bar, setBar] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Clock is running");
      setBar((prevbar) => {
        if (prevbar >= 100) {
          clearInterval(interval);
        }
        return Math.min(prevbar + 5, 100);
      });
    }, 200);
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
