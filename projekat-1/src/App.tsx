
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Project from "./pages/Project";
import Workshops from "./pages/Workshops";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="site-shell min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galerija" element={<Gallery />} />
          <Route path="/o-cesmama" element={<About />} />
          <Route path="/o-projektu" element={<Project />} />
          <Route path="/radionice" element={<Workshops />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
