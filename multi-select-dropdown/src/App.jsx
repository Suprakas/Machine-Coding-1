import MultiSelectDropdown from "./components/MultiSelectDropdown";
import "./App.css";

const OPTIONS = [
  { id: 1, label: "JavaScript", value: "javascript" },
  { id: 2, label: "Python", value: "python" },
  { id: 3, label: "Java", value: "java" },
  { id: 4, label: "C++", value: "cpp" },
  { id: 5, label: "Ruby", value: "ruby" },
  { id: 6, label: "Go", value: "go" },
  { id: 7, label: "Rust", value: "rust" },
  { id: 8, label: "TypeScript", value: "typescript" },
  { id: 9, label: "Swift", value: "swift" },
  { id: 10, label: "Kotlin", value: "kotlin" },
];

export default function App() {
  return <MultiSelectDropdown options={OPTIONS} />;
}
