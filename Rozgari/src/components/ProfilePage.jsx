import React, { useState, useEffect } from 'react';

const ProfilePage = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [userData, setUserData] = useState({});

  // Retrieve user details and applied jobs from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    const storedAppliedJobs = JSON.parse(localStorage.getItem('appliedJobs')) || [];

    if (storedUser) {
      setUserData({
        username: storedUser.username||'virat kohli', // Assuming 'username' is the name in localStorage
        email: storedUser.email || 'viratkohli@gmail.com', // Default email placeholder
        phoneNumber: storedUser.phoneNumber || '9414970569', // Default phone placeholder
      });
    }

    // Set applied jobs from localStorage
    setAppliedJobs(storedAppliedJobs);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profile Page</h1>
      
      {/* User Details */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-2">User Details</h2>
        <p><strong>Name:</strong> {userData.username}</p>
        <p><strong>Email:</strong> {userData.email}</p>
        <p><strong>Phone Number:</strong> {userData.phoneNumber}</p>
      </div>

      {/* Applied Jobs Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Applied Jobs</h2>
        {appliedJobs.length > 0 ? (
          <table className="min-w-full bg-white border-collapse border">
            <thead>
              <tr>
                <th className="border px-4 py-2">Job Type</th>
                <th className="border px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {appliedJobs.map((job, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{job.title}</td>
                  <td
                    className={`border px-4 py-2 ${
                      job.status === 'Selected'
                        ? 'text-green-600'
                        : job.status === 'Rejected'
                        ? 'text-red-600'
                        : 'text-yellow-600'
                    }`}
                  >
                    {job.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-600">You haven't applied for any jobs yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
