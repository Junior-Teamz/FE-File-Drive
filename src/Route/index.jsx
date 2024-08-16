import { Routes, Route } from "react-router-dom";
import LandingView from "../LandingPage/LandingView";
import Login from "../Auth/Login";

export default function RouteIndex() {
  return (
    <Routes>
      <Route path="/" element={<LandingView />} />

      <Route path="/Auth/Login" element={<Login/>} />
    </Routes>
  );
}
