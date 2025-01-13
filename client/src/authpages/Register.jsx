import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  // States
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Register Control
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/v1/auth/register", { username, email, password });
      toast.success("User Registered Successfully");
      navigate("/login");
    } catch (err) {
      console.log(err);
      if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg p-6 md:p-8 bg-white shadow-lg rounded-lg">
        {error && (
          <div className="mb-4 bg-red-500 text-white p-3 rounded">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Sign Up
          </h3>
          <input
  type="text"
  placeholder="Username"
  autoComplete="username"
  className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
  required
  value={username}
  onChange={(e) => setUsername(e.target.value)}
/>
<input
  type="email"
  placeholder="Email"
  autoComplete="email"
  className="w-full p-3 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
  required
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
<input
  type="password"
  placeholder="Password"
  autoComplete="current-password"
  className="w-full p-3 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
  required
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
          <p className="mt-4 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Please Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
