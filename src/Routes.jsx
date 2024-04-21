import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/index";
import Home from "./pages/home/index";

function Zroute() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default Zroute;
