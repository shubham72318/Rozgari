import React from "react";

const jobsList = [
  {
    title: "Electrician",
    salary: "₹500/day",
    city: "Jaipur",
    description: "Fix electrical issues and install wiring in new buildings.",
    poster: "Rahul Sharma",
  },
  {
    title: "Gardener",
    salary: "₹400/day",
    city: "Delhi",
    description: "Maintain gardens, prune plants, and manage landscapes.",
    poster: "Sunita Singh",
  },
  {
    title: "Driver",
    salary: "₹600/day",
    city: "Mumbai",
    description: "Drive clients to different locations around the city.",
    poster: "Ajay Kumar",
  },
  {
    title: "Plumber",
    salary: "₹550/day",
    city: "Pune",
    description: "Repair and install pipes, faucets, and water systems.",
    poster: "Ramesh Verma",
},
{
    title: "Welder",
    salary: "₹700/day",
    city: "Chennai",
    description: "Weld and repair metal structures in construction sites.",
    poster: "Anil Gupta",
},
{
    title: "Carpenter",
    salary: "₹600/day",
    city: "Bangalore",
    description: "Build and repair wooden structures and furniture.",
    poster: "Suresh Patil",
},
{
    title: "Painter",
    salary: "₹500/day",
    city: "Kolkata",
    description: "Paint walls, doors, and other surfaces in homes and offices.",
    poster: "Manoj Das",
},
{
    title: "Housekeeper",
    salary: "₹450/day",
    city: "Hyderabad",
    description: "Clean and maintain residential and commercial spaces.",
    poster: "Priya Nair",
},
{
    title: "Security Guard",
    salary: "₹550/day",
    city: "Delhi",
    description: "Ensure safety and security of premises at night shifts.",
    poster: "Vikram Singh",
},
{
    title: "Cook",
    salary: "₹400/day",
    city: "Jaipur",
    description: "Prepare meals for families or small catering services.",
    poster: "Pooja Mehta",
},
{
    title: "AC Technician",
    salary: "₹750/day",
    city: "Ahmedabad",
    description: "Install and repair air conditioning systems.",
    poster: "Ravi Sharma",
},
{
    title: "Tailor",
    salary: "₹500/day",
    city: "Lucknow",
    description: "Stitch and alter clothes for customers in a boutique.",
    poster: "Geeta Kumari",
},
{
    title: "Mason",
    salary: "₹600/day",
    city: "Kanpur",
    description: "Construct walls and buildings using bricks and mortar.",
    poster: "Kiran Yadav",
},
{
    title: "Gardener",
    salary: "₹400/day",
    city: "Chandigarh",
    description: "Maintain gardens, prune plants, and manage landscapes.",
    poster: "Suman Thakur",
},
{
    title: "Delivery Boy",
    salary: "₹450/day",
    city: "Mumbai",
    description: "Deliver packages to customers in various parts of the city.",
    poster: "Amit Jain",
},
{
    title: "Construction Laborer",
    salary: "₹550/day",
    city: "Delhi",
    description: "Assist in construction work by carrying materials and tools.",
    poster: "Rajesh Khanna",
},
{
    title: "Mechanic",
    salary: "₹600/day",
    city: "Bhopal",
    description: "Repair and service vehicles, including cars and bikes.",
    poster: "Satish Kulkarni",
},
{
    title: "Electrician",
    salary: "₹650/day",
    city: "Surat",
    description: "Fix electrical issues and install wiring in homes and offices.",
    poster: "Alok Mishra",
},
{
    title: "Painter (Industrial)",
    salary: "₹700/day",
    city: "Vadodara",
    description: "Paint large structures and equipment in factories.",
    poster: "Arun Chauhan",
},
  // Add more job entries here...
];

const Jobs = () => {
  const handleApply = (job) => {
    // Retrieve existing applied jobs from localStorage
    const existingJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];

    // Check if the job is already applied
    const isJobAlreadyApplied = existingJobs.some((appliedJob) => appliedJob.title === job.title);

    if (!isJobAlreadyApplied) {
      // Add new job with 'Pending' status
      const updatedJobs = [...existingJobs, { ...job, status: "Pending" }];

      // Save updated jobs list to localStorage
      localStorage.setItem('appliedJobs', JSON.stringify(updatedJobs));

      alert(`Applied for ${job.title} successfully!`);
    } else {
      alert(`You've already applied for ${job.title}.`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Available Jobs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {jobsList.map((job, index) => (
          <div key={index} className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-2">{job.title}</h2>
            <p className="text-gray-700 mb-1">Salary: {job.salary}</p>
            <p className="text-gray-700 mb-1">City: {job.city}</p>
            <p className="text-gray-700 mb-4">Description: {job.description}</p>
            <p className="text-gray-500 italic">Posted by: {job.poster}</p>
            <button
              className="md:inline-block bg-transparent text-blue-800 border border-blue-800 px-4 py-2 rounded-md"
              onClick={() => handleApply(job)}
            >
              Apply
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
