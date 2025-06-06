import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Experience from "./pages/experience";
import ProjectDisplay from "./pages/projectDisplay";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/Portfolio">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDisplay />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
