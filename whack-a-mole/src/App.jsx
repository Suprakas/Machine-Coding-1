import WhackAMole from "./components/WhackAMole";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <WhackAMole size={3} delay={1000} />
    </div>
  );
}
