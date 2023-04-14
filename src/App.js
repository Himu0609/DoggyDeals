import "./App.css";
import Home from "./Componets/Home";
import Navbar from "./Componets/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Componets/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
