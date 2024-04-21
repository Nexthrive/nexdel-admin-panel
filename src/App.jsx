import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/index";
import Home from "./pages/home/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
