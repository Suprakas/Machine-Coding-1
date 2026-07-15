import { useEffect, useRef, useState } from "react";
import Grid from "./Grid";

export default function InteractiveShape() {
  const [grid, setGrid] = useState(
    Array.from({ length: 3 }, () => new Array(3).fill(false))
  );
  const queue = useRef([]);
  const timerId = useRef([]);

  const handleOnClick = (rowIdx, colIdx, flag) => {
    if (timerId.current.length > 0 && flag) {
      return;
    }
    if (grid[rowIdx][colIdx] && flag) {
      return;
    }
    setGrid((prevGrid) => {
      const gridDeepCopy = prevGrid.map((row) => [...row]);
      gridDeepCopy[rowIdx][colIdx] = flag;
      if (flag) queue.current.push([rowIdx, colIdx]);
      return gridDeepCopy;
    });
  };

  useEffect(() => {
    if (queue.current.length === 9) {
      queue.current.forEach(([rowIdx, colIdx], idx) => {
        timerId.current[idx] = setTimeout(() => {
          handleOnClick(rowIdx, colIdx, false);
          if (idx === timerId.current.length - 1) timerId.current = [];
        }, 1000 * (idx + 1));
      });
      queue.current = [];
    }
  }, [grid]);

  useEffect(() => {
    return () => {
      timerId.current.forEach((id) => clearTimeout(id));
    };
  }, []);

  return <Grid grid={grid} handleOnClick={handleOnClick} />;
}
