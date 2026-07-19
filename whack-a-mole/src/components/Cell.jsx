import { useState } from "react";
import { generateMolePosition } from "../utils/moleUtils";

export default function Cell({ row, col, molePos, setScore, setMolPos, size }) {
  const [hammerFlag, setHammerFlag] = useState(false);

  const handleClick = () => {
    setHammerFlag(true);
    if (row === molePos[0] && col === molePos[1]) {
      setScore((prevScore) => prevScore + 10);
      setTimeout(() => {
        setMolPos(generateMolePosition(size));
      }, 100);
    }
    setTimeout(() => {
      setHammerFlag(false);
    }, 300);
  };

  return (
    <div className="cell" onClick={handleClick}>
      {row === molePos[0] && col === molePos[1] && "👻"}
      {hammerFlag && <div className="hammer">🔨</div>}
    </div>
  );
}
