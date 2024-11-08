import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { USER_API_END_POINT } from "../utils/constant";
import axios from "axios";
import { ClipLoader } from "react-spinners"; 

const Signup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullname: "",  // Changed from fullName to fullname
        email: "",
        phoneNumber: "",
        password: "",
        role: "student",
    });
    const [loading, setLoading] = useState(false); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post(`${USER_API_END_POINT}/register`, formData);
            if (res.status === 201) {
                alert("Signup successful!");
                setTimeout(() => {
                    navigate("/login");
                }, 2000);
            }
        } catch (error) {
            const errorMessage = error.response ? error.response.data.message : error.message;
            alert(`Error: ${errorMessage}`);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                {loading ? (
          <div className="flex justify-center">
            {/* You can replace this with any loading animation */}
            <ClipLoader color="#4A90E2" loading={loading} size={50} />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-gray-700">Full Name</label>
                        <input
                            type="text"
                            name="fullname"  // Updated name attribute
                            value={formData.fullname}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            placeholder="Full Name"
                            required
                        />
                    </div>
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
                        <label className="block text-gray-700">Phone Number</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                            placeholder="Phone Number"
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
                        Sign Up
                    </button>
                    <span>Already have an account? <Link to="/login" className="text-blue-600"> Login</Link></span>
                </form>
                 )}
            </div>
        </div>
    );
};

export default Signup;
