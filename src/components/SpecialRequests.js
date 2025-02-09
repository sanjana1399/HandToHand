import React, { useState } from "react";
import './SpecialRequests.css';

const SpecialRequests = () => {
  const [formData, setFormData] = useState({
    transport: { request: "", name: "", contact: "" },
    care: { request: "", name: "", contact: "" },
    nanny: { request: "", name: "", contact: "" },
  });

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  // Handle form data change
  const handleChange = (e, field, key) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      [field]: {
        ...formData[field],
        [key]: value,
      },
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form data:", formData); // Log the form data for debugging

    try {
      const response = await fetch("http://localhost:5000/api/special-requests", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Response from backend:", data); // Log the response from the server
      setResponse(data);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error("Error:", error);
      setError("There was an issue submitting your request.");
    }
  };

  return (
    <div className="special-requests-container">
      <h2>📢 Special Requests</h2>
      <p>Urgent help requests from the community.</p>

      {/* Debugging content */}
      <p>Test Content: Page Loaded</p>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {["transport", "care", "nanny"].map((field) => (
          <div key={field}>
            <label>
              {field === "transport" && "🚗 Transport for Emergencies:"}
              {field === "care" && "👶 Child & Elderly Care:"}
              {field === "nanny" && "👩‍👦 Nanny & Caregiving Services:"}
              <input
                type="text"
                placeholder="Request details"
                value={formData[field].request}
                onChange={(e) => handleChange(e, field, "request")}
              />
            </label>
            <br />

            <label>
              Name:
              <input
                type="text"
                placeholder="Your name"
                value={formData[field].name}
                onChange={(e) => handleChange(e, field, "name")}
              />
            </label>
            <br />

            <label>
              Contact:
              <input
                type="text"
                placeholder="Phone or email"
                value={formData[field].contact}
                onChange={(e) => handleChange(e, field, "contact")}
              />
            </label>
            <br />
            <hr />
          </div>
        ))}

        <button type="submit">Submit Request</button>
      </form>

      {/* Display backend response */}
      {response && (
        <div className="response">
          <h4>Response from backend:</h4>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}

      {/* Display error message */}
      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
};
export default SpecialRequests;
