import React from "react";
import { useNavigate } from "react-router-dom";
import "./VolunteerForm.css"; 

const VolunteerForm = () => {
  const navigate = useNavigate();

  return (
    <div><button className="back-button" onClick={() => navigate("/ongoing-initiatives")}>
    ⬅ Back to Ongoing Initiatives
  </button>
    <div className="container">
      
      <form className="form">
      
      <h2 className="title">🙋‍♂️ Volunteer Submission Form</h2>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name" required />

        <label>Email:</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Skills / Availability:</label>
        <textarea placeholder="Describe your skills and availability" required></textarea>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default VolunteerForm;
