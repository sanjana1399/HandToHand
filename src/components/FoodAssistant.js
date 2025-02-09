import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { ButtonWithNavigation } from "../components/ui/button";
import "./FoodAssistant.css";

const FoodAssistant = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    department: "",
    date: "",
    location: [],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        location: checked
          ? [...prev.location, value]
          : prev.location.filter((loc) => loc !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted: ", formData);
  };

  return (
    <div className="donation-container">
      <h1 className="donation-title">Food & Grocery Donation Form</h1>
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

            <label>Donation Location: *</label>
            <div className="checkbox-group">
              <input
                type="checkbox"
                id="directly"
                value="Directly"
                onChange={handleChange}
              />
              <label htmlFor="directly">Directly</label>
              <input
                type="checkbox"
                id="office"
                value="Our office"
                onChange={handleChange}
              />
              <label htmlFor="office">Our office</label>
            </div>

            <ButtonWithNavigation to="/thank-you">Donate</ButtonWithNavigation>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default FoodAssistant;
