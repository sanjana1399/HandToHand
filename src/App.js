import React from "react";
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
  );
}

export default App;
