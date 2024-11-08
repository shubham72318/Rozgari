import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from "../utils/constant";
import axios from "axios";
import { ClipLoader } from "react-spinners"; 

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "student",
  });
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Replace with your API endpoint
      const res = await axios.post(`${USER_API_END_POINT}/login`, formData);

      if (res.status === 200) {
        const { token, username } = res.data; // Destructure token and username from response

      // Save token and user info in localStorage
      localStorage.setItem('user', JSON.stringify({ username, token }));
        alert("Login successful!");
        
        // Redirect to homepage after successful login
        setTimeout(() => {
          navigate("/"); // Navigate to the homepage
        }, 2000); // Optional: delay for 2 seconds to show the alert
      }
    } catch (error) {
      console.error("Login failed:", error.response ? error.response.data : error.message);
      alert(`Login failed! ${error.response?.data?.message || "Please try again."}`);
    }
    finally {
      setLoading(false); // Set loading to false after request is complete
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {loading ? (
          <div className="flex justify-center">
            {/* You can replace this with any loading animation */}
            <ClipLoader color="#4A90E2" loading={loading} size={50} />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
              placeholder="Password"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Role</label>
            <div className="flex space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={formData.role === "student"}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">Job Seeker</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={formData.role === "recruiter"}
                  onChange={handleChange}
                  className="form-radio"
                />
                <span className="ml-2">Recruiter</span>
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700"
          >
            Login
          </button>
          <span>
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600">
              Signup
            </Link>
          </span>
        </form>
        )}
      </div>
    </div>
  );
};

export default Login;
