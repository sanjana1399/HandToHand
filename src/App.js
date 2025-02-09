import React from "react";
<<<<<<< HEAD
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
=======
import { Routes, Route } from "react-router-dom";
import CommunitySharing from "./components/CommunitySharing";
import SpecialRequests from "./components/SpecialRequests";

function App() {
  return (
<<<<<<< HEAD
    <Routes>
      <Route path="/" element={<CommunitySharing />} />
      <Route path="/special-requests" element={<SpecialRequests />} />
    </Routes>
=======
    <div>
      <Routes>
        <Route path="/" element={<CommunitySharing />} />
        <Route path="/special-requests" element={<SpecialRequests />} />
      </Routes>
    </div>
>>>>>>> b480771 (Your commit message describing the changes)
>>>>>>> 903ff206e57b8c663ca6bb2f8c3d3c6aad03420d
  );
}

export default App;
