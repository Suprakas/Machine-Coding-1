import FileExplorer from "./Components/FileExplorer";
import "./App.css";
import data from "./data.json";

export default function App() {
  return <FileExplorer folderData={data} />;
}
