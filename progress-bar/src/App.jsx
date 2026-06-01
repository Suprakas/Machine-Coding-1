import ProgressBar from "./components/ProgressBar";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      {show && <ProgressBar />}
      <button onClick={() => setShow(!show)}>Toggle</button>
    </div>
  );
}
