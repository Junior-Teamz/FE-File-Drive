import { Routes, Route } from "react-router-dom";
import LandingView from "../LandingPage/LandingView";


export default function RouteIndex() {
    return(
        <Routes>
            <Route path="/" element={<LandingView />} />
        </Routes>
    )
}