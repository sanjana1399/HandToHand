import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"; // Keep only one Router

import CommunitySharing from "./components/CommunitySharing";
import SpecialRequests from "./components/SpecialRequests";
import OngoingInitiatives from "./components/OngoingInitiatives";
import VolunteerForm from "./components/VolunteerForm";
import FoodAssistant from "./components/FoodAssistant";
import MapPage from './components/MapPage'; 

function App() {
  return (
    <Router>  {/* This Router should wrap everything */}
      <Routes>
        <Route path="/" element={<CommunitySharing />} />
        <Route path="/special-requests" element={<SpecialRequests />} />
        <Route path="/ongoing-initiatives" element={<OngoingInitiatives />} />
        <Route path="/volunteer-form" element={<VolunteerForm />} />
        <Route path="/food-assistance" element={<FoodAssistant />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </Router>
  );
}

export default App;
