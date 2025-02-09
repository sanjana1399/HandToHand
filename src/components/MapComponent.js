import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function AddMarker({ setMarkers }) {
  const map = useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      const description = prompt("Enter a description for this location:");

      if (description) {
        const newMarker = { lat, lng, description };
        setMarkers((prevMarkers) => [...prevMarkers, newMarker]);
      }
    },
  });

  return null;
}

const MapComponent = () => {
  const [markers, setMarkers] = useState([]);

  return (
    <div style={{ height: "500px" }}>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ width: "100%", height: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <AddMarker setMarkers={setMarkers} />
        {markers.map((marker, index) => (
          <Marker key={index} position={[marker.lat, marker.lng]} icon={new L.Icon.Default()}>
            <Popup>{marker.description}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapComponent;
