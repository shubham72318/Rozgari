import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RecruiterProfilePage = () => {
  const [recruiter, setRecruiter] = useState(null);
  const [jobData, setJobData] = useState({
    title: '',
    description: '',
    requirements: '',
    salary: '',
    location: '',
    jobType: '',
    experienceLevel: '',
    position: '',
    company: '',
  });
  
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (parsedUser.role === 'recruiter') {
        setRecruiter(parsedUser);
      } else {
        navigate('/login'); // If not a recruiter, redirect to login
      }
    } else {
      navigate('/login'); // If no user is logged in, redirect to login
    }
  }, [navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobData({ ...jobData, [name]: value });
  };

  const handleJobPost = () => {
    const { title, description, requirements, salary, location, jobType, experienceLevel, position, company } = jobData;

    const newJob = {
      title,
      description,
      requirements: requirements.split(','),
      salary: Number(salary),
      location,
      jobType,
      experienceLevel,
      position,
      company,
      created_by: recruiter.id, // assuming 'recruiter.id' is available
    };

    // Save job in localStorage for now
    const existingJobs = JSON.parse(localStorage.getItem('jobs')) || [];
    localStorage.setItem('jobs', JSON.stringify([...existingJobs, newJob]));
    alert('Job posted successfully!');
    setJobData({
      title: '',
      description: '',
      requirements: '',
      salary: '',
      location: '',
      jobType: '',
      experienceLevel: '',
      position: '',
      company: '',
    });
  };

  if (!recruiter) return null; // Return nothing if recruiter data is not yet available

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Recruiter Profile</h1>
      <div className="bg-white p-6 rounded-md shadow-md mb-6">
        <h2 className="text-xl font-semibold">Recruiter Details</h2>
        <p>Name: {recruiter.name}</p>
        <p>Email: {recruiter.email}</p>
      </div>

      <div className="bg-white p-6 rounded-md shadow-md">
        <h2 className="text-xl font-semibold mb-4">Post a Job</h2>
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="title"
            value={jobData.title}
            onChange={handleInputChange}
            placeholder="Job Title"
            className="border p-2 rounded-md"
          />
          <input
            type="text"
            name="description"
            value={jobData.description}
            onChange={handleInputChange}
            placeholder="Job Description"
            className="border p-2 rounded-md"
          />
          <input
            type="text"
            name="requirements"
            value={jobData.requirements}
            onChange={handleInputChange}
            placeholder="Requirements (comma-separated)"
            className="border p-2 rounded-md"
          />
          <input
            type="number"
            name="salary"
            value={jobData.salary}
            onChange={handleInputChange}
            placeholder="Salary"
            className="border p-2 rounded-md"
          />
          <input
            type="text"
            name="location"
            value={jobData.location}
            onChange={handleInputChange}
            placeholder="Location"
            className="border p-2 rounded-md"
          />
          <input
            type="text"
            name="jobType"
            value={jobData.jobType}
            onChange={handleInputChange}
            placeholder="Job Type"
            className="border p-2 rounded-md"
          />
          <input
            type="text"
            name="experienceLevel"
            value={jobData.experienceLevel}
            onChange={handleInputChange}
            placeholder="Experience Level"
            className="border p-2 rounded-md"
          />
          <input
            type="text"
            name="position"
            value={jobData.position}
            onChange={handleInputChange}
            placeholder="Position"
            className="border p-2 rounded-md"
          />
          <input
            type="text"
            name="company"
            value={jobData.company}
            onChange={handleInputChange}
            placeholder="Company"
            className="border p-2 rounded-md"
          />
        </div>
        <button
          onClick={handleJobPost}
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Post Job
        </button>
      </div>
    </div>
  );
};

export default RecruiterProfilePage;
