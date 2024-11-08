import React from 'react';

const JobSearchPage = () => {
  return (
    <div className="bg-gray-100 rounded-xl shadow-lg p-6 mt-16 mb-12 h-auto">
      <h2 className="text-2xl font-bold text-center mb-4">
        Search jobs on Rozgari
      </h2>
      <div className="flex justify-center space-x-6 mb-4">
        <div className="flex items-center space-x-6">
          {/* Jobs by profession dropdown */}
          <select className="bg-gray-200 px-6 py-4 rounded-lg text-lg">
            <option value="" disabled selected>
              Jobs by profession
            </option>
            <option value="home-helper">Home help, maid services</option>
            <option value="electrician">Electrician jobs</option>
            <option value="plumbing">Plumbing jobs</option>
            <option value="construction">Construction, labor jobs</option>
            <option value="driver">Driver jobs</option>
            <option value="mechanic">Mechanic jobs</option>
            <option value="security">Security guard jobs</option>
            <option value="gardener">Gardener, landscaping jobs</option>
            <option value="cleaner">Cleaner, janitorial jobs</option>
          </select>

          {/* Jobs by city dropdown */}
          <select className="bg-gray-200 px-6 py-4 rounded-lg text-lg">
            <option value="" disabled selected>
              Jobs by city
            </option>
            <option value="New Delhi">New Delhi</option>
            <option value="Jaipur">Jaipur</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bengaluru">Bengaluru</option>
            <option value="Chennai">Chennai</option>
          </select>

          {/* Search jobs button */}
          <button className="bg-blue-100 bg-opacity-80 text-blue-900 px-6 py-4 rounded-lg text-lg hover:bg-blue-200 transition duration-300 ease-in-out">
            Search jobs
          </button>
        </div>
      </div>

      {/* Popular Searches */}
      
    </div>
  );
};

export default JobSearchPage;
