import "./App.scss";
import Login from "./pages/login/index";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
