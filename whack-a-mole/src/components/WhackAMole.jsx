import { useEffect, useState } from "react";
import { generateMolePosition } from "../utils/moleUtils";
import Cell from "./Cell";

export default function WhackAMole({ size, delay }) {
  const [molePos, setMolPos] = useState(generateMolePosition(size));
  const [score, setScore] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setMolPos(generateMolePosition(size));
    }, delay);
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  return (
    <>
      <h1>Score : {score}</h1>
      <div>
        {Array.from({ length: size }).map((value, row) => {
          return (
            <div className="row" key={row}>
              {Array.from({ length: size }).map((_, col) => {
                return (
                  <Cell
                    key={`${row},${col}`}
                    molePos={molePos}
                    row={row}
                    col={col}
                    setScore={setScore}
                    setMolPos={setMolPos}
                    size={size}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
