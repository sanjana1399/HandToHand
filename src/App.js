import React from "react";
import { Routes, Route } from "react-router-dom";
import CommunitySharing from "./components/CommunitySharing";
import SpecialRequests from "./components/SpecialRequests";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CommunitySharing />} />
      <Route path="/special-requests" element={<SpecialRequests />} />
    </Routes>
  );
}

export default App;
