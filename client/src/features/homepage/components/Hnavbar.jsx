import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
  FaComment,
  FaFileAlt,
} from "react-icons/fa";

function Hnavbar() {
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));
  const [isChecked, setIsChecked] = useState(false);
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleChange = () => {
    setIsChecked(!isChecked);
  };
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        localStorage.removeItem("authToken");
        toast.success("Logout successfully");
        navigate("/login");
      } else {
        console.error("Failed to logout:", response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const Card = ({ title, text, gradient, icon }) => (
    <div
      className="card bg-base-100 shadow-xl transition-transform transform hover:scale-105"
      style={{
        width: "17rem",
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
      <div
        className="card-body p-4"
        style={{ height: "100%", position: "relative", zIndex: 1 }}
      >
        <div className="icon-container text-center mb-1 text-4xl text-bold">
          {icon}
        </div>
        <h2 className="card-title text-center text-3xl font-bold mb-1">
          {title}
        </h2>
        <p className="text-m text-justify mb-2">{text}</p>
        <div className="card-actions justify-center">
          <Link to="/shop">
            <button className="btn btn-outline m-2">Explore</button>
          </Link>
        </div>
      </div>
    </div>
  );

  const cardData = [
    {
      title: "Consultations",
      text: "Engage with professionals for tailored consultations, including text, audio, and video formats, to address your specific requirements.",
      gradient: "linear-gradient(135deg, #a8edea, #fed6e3)",
      icon: <FaUserClock />,
    },
    {
      title: "Utility",
      text: "Discover reliable utility service providers offering comprehensive solutions to meet your everyday necessities.",
      gradient: "linear-gradient(135deg, #fce2ce, #f7c9d8)",
      icon: <FaWrench />,
    },
    {
      title: "Delve",
      text: "Get connected to people based on psychological profiles and expected characteristics.",
      gradient: "linear-gradient(135deg, #e0c3fc, #8ec5fc)",
      icon: <FaUsers />,
    },
    {
      title: "Shop",
      text: "Experience an exceptional shopping journey with authentic and high-quality products.",
      gradient: "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
      icon: <FaShoppingBag />,
    },
    {
      title: "News",
      text: "Stay informed with the latest developments, featuring curated news and updates personalized to your interests.",
      gradient: "linear-gradient(135deg, #84fab0, #8fd3f4)",
      icon: <FaRegNewspaper />,
    },
    {
      title: "Foundation",
      text: "Empowering underprivileged individuals to access the services above, ensuring inclusivity and equal opportunities.",
      gradient: "linear-gradient(135deg, #ffecd2, #fcb69f)",
      icon: <FaHandHoldingHeart />,
    },
    {
      title: "About Us",
      text: "We connect people to essential services, information, and community, ensuring inclusivity for all.",
      gradient: "linear-gradient(135deg, #f5f7fa, #c3cfe2)",
      icon: <FaFileAlt />,
    },
    {
      title: "Contact Us",
      text: "Contact us for feedback or assistance of any problems using the Thenku platform.",
      gradient: "linear-gradient(135deg, #c1dfc4, #deecdd)",
      icon: <FaComment />,
    },
  ];

  return (
    <div className={` fixed top-0 w-full bg-gray-300 ${
          sticky
            ? "shadow-md bg-gray-500 dark:bg-slate-700 dark:text-white duration-300 transition-all ease-in-out"
            : ""
        }`}
      >
      {/* Navbar */}
      <nav className=" px-4 py-2 shadow-md flex justify-between items-center">
        <button
          onClick={handleChange}
          className="btn text-base md:text-2xl font-extrabold"
        >
          {isChecked ? "DIRECT CHAT" : "AT A GLANCE"}
        </button>

        {/* Searchbar */}
        <div className="w-40 md:w-80">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="flex-grow w-24 md:w-40"
              placeholder="Search"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>

        {/* Sign Up button */}
        <div>
          {loggedIn ? (
            <>
              <NavLink
                to="/login"
                onClick={handleLogout}
                className=" btn md:text-xl font-bold"
              >
                Logout
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/register" className="btn md:text-xl font-bold mr-2">
                Sign Up
              </NavLink>
              <NavLink to="/login" className="btn md:text-xl font-bold">
                Sign In
              </NavLink>
            </>
          )}
        </div>
      </nav>

      {/* Dropdown Section */}
      {isChecked && (
        <div className="dropdown-content absolute top-full left-0 w-full bg-base-200 p-6 shadow-lg z-50">
          <div className="flex flex-wrap justify-center gap-4">
            {cardData.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                text={card.text}
                gradient={card.gradient}
                icon={card.icon}
              />
            ))}

            <button
              onClick={handleChange}
              className="btn btn-square m-20"
              style={{ width: "80px", height: "80px" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Hnavbar;
