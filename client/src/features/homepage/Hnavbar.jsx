import React, { useState } from "react";
import {
  FaVideo,
  FaWrench,
  FaUsers,
  FaShoppingBag,
  FaRegNewspaper,
  FaHandHoldingHeart,
  FaUserFriends,
  FaUserPlus,
  FaUserClock,
} from "react-icons/fa";

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
      <div className="card-body p-4" style={{ height: "100%", position: "relative", zIndex: 1 }}>
        <div className="icon-container text-center mb-4 text-4xl text-bold">{icon}</div>
        <h2 className="card-title text-center text-3xl font-bold mb-2">{title}</h2>
        <p className="text-m text-justify mb-4">{text}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline">Explore</button>
        </div>
      </div>
    </div>
  );

  const cardData = [
    {
      title: "Consultations",
      text: "Engage with professionals for tailored consultations, including text, audio, and video formats, to address your specific requirements.",
      gradient: "linear-gradient(135deg, #e0f7fa, #b2ebf2)",
      icon: <FaUserClock />,
    },
    {
      title: "Utility",
      text: "Discover reliable utility service providers offering comprehensive solutions to meet your everyday necessities.",
      gradient: "linear-gradient(135deg, #fff3e0, #ffe0b2)",
      icon: <FaWrench />,
    },
    {
      title: "Delve",
      text: "Get connected to people based on psychological profiles and expected characteristics.",
      gradient: "linear-gradient(135deg, #e8f5e9, #c8e6c9)",
      icon: <FaUsers />,
    },
    {
      title: "Shop",
      text: "Experience an exceptional shopping journey with authentic and high-quality products.",
      gradient: "linear-gradient(135deg, #fce4ec, #f8bbd0)",
      icon: <FaShoppingBag />,
    },
    {
      title: "News",
      text: "Stay informed with the latest developments, featuring curated news and updates personalized to your interests.",
      gradient: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
      icon: <FaRegNewspaper />,
    },
    {
      title: "Foundation",
      text: "Empowering underprivileged individuals to access the services above, ensuring inclusivity and equal opportunities.",
      gradient: "linear-gradient(135deg, #f1f8e9, #dcedc8)",
      icon: <FaHandHoldingHeart />,
    },
  ];

  return (
    <div className="relative">
      {/* Navbar */}
      <nav className="bg-base-200 px-4 py-2 shadow-md flex justify-between items-center">
        <button onClick={handleChange} className="btn text-base md:text-2xl font-extrabold">
          {isChecked ? "DIRECT CHAT" : "AT A GLANCE"}
        </button>

      {/* Searchbar */}
      <div className="w-40 md:w-80">
<label className="input input-bordered flex items-center gap-2">
  <input type="text" className="flex-grow w-24 md:w-40" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>
</div>


 {/* Sign Up button */}
        <button className="btn bg-base-200 flex items-center gap-2">
  <FaUserPlus className="text-lg" />
  <span className="hidden md:inline">Sign Up</span>
</button>

      </nav>

      {/* Dropdown Section */}
      <div
        className={`dropdown-content absolute top-full left-0 w-full bg-base-200 p-6 shadow-lg z-50 transition-all duration-500 ease-in-out ${
          isChecked ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
        }`}
        style={{ overflow: "hidden" }}
      >
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
    </div>
  );
}

export default Hnavbar;
