import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { Icon } from 'leaflet'; 
import "leaflet/dist/leaflet.css";

const MapPage = () => {
  const [markers, setMarkers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  // Default icon for markers
  const defaultIcon = new Icon({
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  // Custom hook to handle map events (for adding markers)
  function MapEvents({ setMarkers }) {
    const map = useMapEvents({
      click(e) {
        const { lat, lng } = e.latlng;
        setMarkers((prev) => [...prev, { lat, lng, name: "", description: "" }]);
      },
    });
    return null;
  }

  const handleDescriptionChange = (index, field, value) => {
    const updatedMarkers = [...markers];
    updatedMarkers[index][field] = value;
    setMarkers(updatedMarkers);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveMarker = (index) => {
    const updatedMarkers = [...markers];
    updatedMarkers[index] = {
      ...updatedMarkers[index],
      name: formData.name,
      description: formData.description,
    };
    setMarkers(updatedMarkers);
    // Clear the form after saving
    setFormData({ name: "", description: "" });
  };

  return (
    <div>
      <div style={{ width: "100%", height: "500px" }}>
        <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "100%", width: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <MapEvents setMarkers={setMarkers} />
          {markers.map((marker, index) => (
            <Marker
              key={index}
              position={[marker.lat, marker.lng]}
              icon={defaultIcon}
            >
              <Popup>
                <p><strong>{marker.name || "No name provided"}</strong></p>
                <p>{marker.description || "No description provided"}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      {/* Form below the map */}
      <div style={{ padding: "20px", backgroundColor: "#f9f9f9", marginTop: "20px", borderRadius: "8px" }}>
        <h3>Add Marker Details</h3>
        <form onSubmit={(e) => { e.preventDefault(); handleSaveMarker(markers.length - 1); }}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter name"
              style={{ width: "100%", padding: "10px", margin: "8px 0", borderRadius: "4px" }}
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter description"
              style={{ width: "100%", height: "100px", padding: "10px", margin: "8px 0", borderRadius: "4px" }}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Save Marker
          </button>
        </form>
      </div>
    </div>
  );
};

export default MapPage;
