import Tabs from "./components/Tabs";
import "./App.css";

export default function App() {
  const TabsData = [
    {
      label: "Profile",
      content: <div>This is my profile</div>,
    },
    {
      label: "Dashboard",
      content: <div>This is my dashboard.</div>,
    },
    {
      label: "Settings",
      content: <div>This is my settings tab</div>,
    },
    {
      label: "Invoice",
      content: <div>Here is my product Invoice</div>,
    },
  ];

  const onTabChangeHandler = (index) => {
    console.log("Tabs changed");
  };
  return (
    <div className="App">
      <Tabs TabsData={TabsData} onChange={onTabChangeHandler} />
    </div>
  );
}
