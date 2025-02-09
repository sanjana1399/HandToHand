import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../components/ui/card";
import "./FoodAssistant.css";

const FoodAssistant = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    date: "",
  });

  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Function to fetch donations
  const fetchDonations = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5001/api/donations");
      if (response.ok) {
        const data = await response.json();
        console.log("Fetched donations:", data);  // Log the fetched data

        if (data.length > 0) {
          setDonations(data);
        } else {
          setMessage("No donations available.");
        }
      } else {
        setMessage("Failed to fetch donations.");
      }
    } catch (error) {
      console.error("Error fetching donations:", error);
      setMessage("Error fetching donations.");
    }
    setLoading(false);
  };

  // Fetch donations from the backend on component mount
  useEffect(() => {
    fetchDonations();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:5001/api/donations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setMessage("Donation submitted successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          date: "",
        });
        // After submission, re-fetch donations to update the list
        fetchDonations();
      } else {
        setMessage("Failed to submit donation. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="donation-container">
      <h1 className="donation-title">Food & Grocery Donation Form</h1>

      {/* Urging people to donate */}
      <div className="urgency-message">
        <p>
          Your donation can make a real difference in someone's life. By donating food, groceries, or other resources, you help support those in need within our community. Every small act of kindness adds up to a bigger impact. Join us in helping build a more connected, compassionate community!
        </p>
        <p>
          Together, we can ensure that no one goes hungry, and we can support families facing hardships with the help they need.
        </p>
      </div>

      {/* Display donation data in a table */}
      <div className="donation-table">
        <h2>Donation List</h2>
        {loading ? (
          <p>Loading donations...</p>
        ) : donations.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Donation Date</th>
              </tr>
            </thead>
            <tbody>
              {donations.map((donation) => (
                <tr key={donation.id}>
                  <td>{donation.id}</td>
                  <td>{donation.first_name} {donation.last_name}</td>
                  <td>{donation.phone}</td>
                  <td>{donation.email}</td>
                  <td>{new Date(donation.donation_date).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>{message}</p>
        )}
      </div>

      <Card className="donation-card">
        <CardContent>
          <form onSubmit={handleSubmit} className="donation-form">
            <label>Name: *</label>
            <div className="name-fields">
              <input
                type="text"
                name="firstName"
                placeholder="First*"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last*"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>

            <label>Phone Number: *</label>
            <input
              type="tel"
              name="phone"
              placeholder="### ### ####"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label>Email Address: *</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Donation Date: *</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />

            <button type="submit" disabled={loading} className="submit-button">
              {loading ? "Submitting..." : "Donate"}
            </button>

            {message && <p className="message">{message}</p>}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FoodAssistant;
