import React from "react";
import { useNavigate } from "react-router-dom";
import "./OngoingInitiatives.css";

const OngoingInitiatives = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button className="back-button" onClick={() => navigate("/")}>
        ⬅ Back to Home
      </button>
    
    <div className="container">
      
      <div className="content">
        <h2 >🔄 Ongoing Initiatives</h2>
        <p >Helping hands available at all times.</p>
        <ul className="list">
        <li>🚑 Emergency Support (Hotline & Care)</li>
        <li>👴 Support for Seniors & Families</li>
          <button className="submit-button" onClick={() => navigate("/volunteer-form")}>🙋‍♂️ Volunteer Submissions</button>
          
        </ul>
      </div>
    </div>
    </div>
  );
};

export default OngoingInitiatives;

