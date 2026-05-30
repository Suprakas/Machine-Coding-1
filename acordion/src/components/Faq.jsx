import { useState } from "react";
import Accordion from "./Accordion";
import data from "../data.json";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <h1>FAQ's</h1>

      {data.faqs.map((obj, index) => (
        <Accordion
          key={index}
          qna={obj}
          isOpen={activeIndex === index}
          onToggle={() =>
            setActiveIndex(
              activeIndex === index ? null : index
            )
          }
        />
      ))}
    </div>
  );
}