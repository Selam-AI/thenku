import React, { useState } from "react";
import { FaComments, FaCog, FaHeartbeat, FaShoppingCart, FaNewspaper, FaHandsHelping } from "react-icons/fa";

function Hnavbar() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const Card = ({ title, text, gradient, icon }) => (
    <div
      className="card bg-base-100 shadow-xl transition-transform transform hover:scale-105"
      style={{
        width: "18rem",
        height: "20rem",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        borderRadius: "15px",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Background Shape */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: gradient,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 80%)",
          zIndex: 0,
        }}
      />
      {/* Title and Text Section */}
      <div className="card-body p-4" style={{ height: "100%", position: "relative", zIndex: 1 }}>
        <div className="icon-container text-center mb-4 text-3xl text-bold">{icon}</div>
        <h2 className="card-title text-center text-2xl font-bold mb-2">{title}</h2>
        <p className="text-sm text-justify mb-4">{text}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline">Learn More</button>
        </div>
      </div>
    </div>
  );

  const cardData = [
    {
      title: "Consultations",
      text: "Engage with professionals for tailored consultations, including text, audio, and video formats, to address your specific requirements.",
      gradient: "linear-gradient(135deg, #e0f7fa, #b2ebf2)",
      icon: <FaComments />,
    },
    {
      title: "Utility",
      text: "Discover reliable utility service providers offering comprehensive solutions to meet your everyday necessities.",
      gradient: "linear-gradient(135deg, #fff3e0, #ffe0b2)",
      icon: <FaCog />,
    },
    {
      title: "Delve",
      text: "Facilitate meaningful connections by matching individuals based on psychological traits and anticipated compatibility.",
      gradient: "linear-gradient(135deg, #e8f5e9, #c8e6c9)",
      icon: <FaHeartbeat />,
    },
    {
      title: "Shop",
      text: "Experience an exceptional shopping journey with a diverse range of authentic and high-quality products.",
      gradient: "linear-gradient(135deg, #fce4ec, #f8bbd0)",
      icon: <FaShoppingCart />,
    },
    {
      title: "News",
      text: "Stay informed with the latest developments, featuring curated news and updates personalized to your interests.",
      gradient: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
      icon: <FaNewspaper />,
    },
    {
      title: "Foundation",
      text: "Empowering underprivileged individuals to access the services above, ensuring inclusivity and equal opportunities.",
      gradient: "linear-gradient(135deg, #f1f8e9, #dcedc8)",
      icon: <FaHandsHelping />,
    },
  ];

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="bg-base-200 px-4 py-2 shadow-md flex justify-between items-center">
        <button onClick={handleChange} className="btn text-2xl text-bold">
          {isChecked ? "Direct Chat" : "At A Glance"}
        </button>
        <h1 className="text-4xl font-bold">Hnavbar</h1>
      </nav>

      {/* Dropdown Section */}
      {isChecked && (
        <div className="dropdown-content absolute top-full left-0 w-full bg-base-200 p-6 shadow-lg z-50 transition-transform duration-300 ease-in-out">
          <div className="flex flex-wrap justify-center gap-4">
            {/* Render Cards */}
            {cardData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                text={card.text}
                gradient={card.gradient}
                icon={card.icon}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Hnavbar;