import React from "react";

const CommunitySharing = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 to-green-700 text-white font-sans min-h-screen flex flex-col">
      <header className="py-8 text-center text-5xl font-extrabold shadow-md">
        🤝 Hand to Hand - Community Sharing
      </header>
      <main className="max-w-7xl mx-auto p-10 bg-white shadow-2xl mt-10 rounded-2xl text-gray-900">
        <h2 className="text-4xl font-bold mb-8 text-center text-green-800">
          Making a Difference, One Share at a Time
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
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
      <footer className="text-center py-6 mt-10 text-gray-100 bg-green-800 text-lg font-medium shadow-lg">
        &copy; 2025 Hand to Hand | Building a Stronger Community Together 💚
      </footer>
    </div>
  );
};

const Section = ({ title, description, items }) => {
  return (
    <section className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h3 className="text-3xl font-bold mb-4 text-green-700">{title}</h3>
      <p className="mb-4 text-gray-700 text-lg font-medium">{description}</p>
      <ul className="list-disc pl-6 text-gray-800 text-lg space-y-2">
        {items.map((item, index) => (
          <li key={index} className="mb-2">{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default CommunitySharing;
