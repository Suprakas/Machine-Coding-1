import Post from "./components/Post"
import './App.css'
import { useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className="App">
      <h1>Pagination</h1>
      <Post />
    </div>
  )
}

export default App
