import { useState } from "react";
export default function Tabs({ TabsData, onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  return (
    <div className="tabs">
      <div className="tabs__container">
        {TabsData.map((tabs, index) => {
          return (
            <button
              key={index}
              className={`${currentTabIndex === index ? "active" : ""}`}
              onClick={() => {
                setCurrentTabIndex(index);
                onChange(index);
              }}
            >
              {tabs.label}
            </button>
          );
        })}
      </div>
      <div className="tabs__content">{TabsData[currentTabIndex].content}</div>
    </div>
  );
}
