import { Routes, Route } from "react-router-dom";
import LandingView from "../LandingPage/LandingView";
import Login from "../Auth/Login";
import AdminDashboard from "../Admin/Dashboard/AdminDashboard";
import UserDashboard from "../User/Dashboard/UserDashboard";

export default function RouteIndex() {
  return (
    <Routes>
      //landing page
      <Route path="/" element={<LandingView />} />


      //login 
      <Route path="/Auth/Login" element={<Login/>} />




      //admin
      <Route path="/AdminDashboard" element={<AdminDashboard/>} />


      //user
      <Route path="/UserDashboard" element={<UserDashboard/>} />
    </Routes>
  );
}
