import React from "react";
import "./CommunitySharing.css";

const CommunitySharing = () => {
  return (
    <div className="container">
      <header className="header">
        🤝 Hand to Hand - Community Sharing
      </header>
      <main className="main">
        <h2 className="main-title">It's the small things that matter</h2>
        <div className="grid-container">
          <Section 
            title="🌍 Community Sharing" 
            description="Connecting people to share resources, skills, and kindness." 
            items={["♻️ Resource Exchange & Recycling", "📍 Accountability & Drop Locations", "🆘 Help Center", "🤝 Volunteer & Service Center"]} 
          />
          <Section 
            title="🍲 Food & Assistance" 
            description="Ensuring no one in our community goes hungry." 
            items={["🥡 Surplus Food Pickup & Redistribution", "🏠 Community Food Banks", "💜 Support for Differently Abled & Pregnant Women"]} 
          />
          <Section 
            title="🔄 Ongoing Initiatives" 
            description="Helping hands available at all times." 
            items={["🙋‍♂️ Volunteer Requests", "🚑 Emergency Support (Hotline & Care)", "👴 Support for Seniors & Families"]} 
          />
          <Section 
            title="📢 Special Requests" 
            description="Urgent help requests from the community." 
            items={["🚗 Transport for Emergencies", "👶 Child & Elderly Care", "👩‍👦 Nanny & Caregiving Services"]} 
          />
          <Section 
            title="💡 Awareness & Accessibility" 
            description="Ensuring resources are easy to access for all." 
            items={["🌎 Community Maps", "🔍 Accessibility Assistance", "📖 Educational Programs"]} 
          />
        </div>
      </main>
      <footer className="footer">
        &copy; 2025 Hand to Hand | Building a Stronger Community Together 💚
      </footer>
    </div>
  );
};

const Section = ({ title, description, items }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <ul className="card-list">
        {items.map((item, index) => (
          <li key={index} className="card-list-item">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommunitySharing;
