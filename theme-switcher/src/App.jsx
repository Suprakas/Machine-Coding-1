import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./ThemeContext";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        {/* Navbar */}
        <Navbar />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
