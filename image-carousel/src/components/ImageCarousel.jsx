import { useState, useEffect, useRef } from "react";
import data from "../data.json";
// console.log(data);

const data_length = data.length;

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);
  //   console.log(index + "On render");

  const ref = useRef(null);
  console.log(ref);

  const handleNext = () => {
    // console.log(index + "on cb");

    setIndex((prevIndex) => {
      if (prevIndex == data_length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
    // if (index == data_length - 1) {
    //   setIndex(0);
    // } else {
    //   setIndex(index + 1);
    // }
  };
  const handlePrev = () => {
    if (index == 0) {
      setIndex(data_length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  useEffect(() => {
    ref.current = setInterval(handleNext, 1000);
    console.log(ref.current, "on fun call");
    return () => {
      clearInterval(ref.current);
    };
  }, []);

  return (
    <div
      onMouseEnter={() => clearInterval(ref.current)}
      onMouseLeave={() => {
        ref.current = setInterval(handleNext, 1000);
      }}
      className="container"
    >
      <div className="left-btn" onClick={handlePrev}>
        {"<"}
      </div>
      <img src={data[index].download_url} alt="" />
      <div className="right-btn" onClick={handleNext}>
        {">"}
      </div>
    </div>
  );
}
