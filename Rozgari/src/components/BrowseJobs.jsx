import React from 'react';
import Architect from '../assets/archtect.jpg'; // Double-check the spelling here
import Driver from '../assets/driver.jpg';
import Elec from '../assets/electrician.jpg';
import Guard from '../assets/guard.jpg';
import Mop from '../assets/mop.jpg';
import Plum from '../assets/plumber.jpg';
import Tech from '../assets/mechanic.jpg';
import Worker from '../assets/worker.jpg';

const BrowseJobs = () => {
  const jobs = [
    { title: 'Home Maid', image: Worker },
    { title: 'Electrician', image: Elec },
    { title: 'Plumber', image: Plum },
    { title: 'Construction Worker', image: Architect },
    { title: 'Driver', image: Driver },
    { title: 'Mechanic', image: Tech },
    { title: 'Security Guard', image: Guard },
    { title: 'Cleaner', image: Mop },
  ];

  return (
    <div className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Browse Jobs</h2>

      {/* Grid container for job cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 duration-200"
          >
            <img
              src={job.image}
              alt={job.title}
              className="w-full h-48 object-contain" // Keeps the image height consistent
            />
            <div className="p-4 flex flex-col items-center">
              <h3 className="text-xl font-semibold text-center mb-4">{job.title}</h3>

              {/* Details Button */}
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md w-full mb-2 hover:bg-blue-700 transition duration-200">
                Details
              </button>

              {/* Available Jobs Button */}
              <button className="bg-yellow-600 text-white px-4 py-2 rounded-md w-full hover:bg-yellow-700 transition duration-200">
                Available Jobs
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseJobs;
