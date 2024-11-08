import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import JobSearchPage from './JobSearchPage';
import BrowseJobs from './BrowseJobs';
import AssurancesSection from './AssurencesSection';


const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for tracking login
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false); // State for profile menu
  const navigate = useNavigate();

  // Check login status on component mount
  useEffect(() => {
    const user = localStorage.getItem('user'); // Assuming user info is stored in localStorage
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('user'); // Clear the user info
    setIsLoggedIn(false); // Update state
    navigate('/login'); // Redirect to login page
  };

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Detect scroll to apply header effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Sticky Header */}
      <header
        className={`z-20 fixed top-0 w-full flex justify-between items-center transition-all duration-300 ${scrolled ? 'bg-blue-800 shadow-lg py-2' : 'bg-white py-2'
          }`}
        style={{ transition: 'background-color 0.3s ease, height 0.3s ease, box-shadow 0.3s ease' }}
      >
        <h1 className={`text-3xl ml-4 font-bold transition-all ${scrolled ? 'text-white' : 'text-blue-800'}`}>
          ROZGARI
        </h1>
        <div className="flex items-center space-x-4 mr-4">
          {/* Toggle Sidebar Button for mobile */}
          <button className="md:hidden text-blue-800" onClick={toggleSidebar}>
            &#9776;
          </button>
          
          {/* Jobs Button */}
          <Link to="/jobs">
            <button className="hidden md:inline-block bg-transparent text-blue-800 border border-blue-800 px-4 py-2 rounded-md">
              Jobs
            </button>
          </Link>

          {/* If user is logged in, show profile icon, otherwise show login/signup */}
          {isLoggedIn ? (
            <div className="relative">
              {/* Dummy User Icon */}
              <div
                className="w-10 h-10 rounded-full bg-gray-300 cursor-pointer"
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
              >
                <img
                  src="/admin.jpg"
                  alt="User"
                  className="rounded-full object-cover w-full h-full"
                />
              </div>

              {/* Dropdown Profile Menu */}
              {isProfileMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2">
  {/* Get user from localStorage */}
  {(() => {
    const user = localStorage.getItem('user'); // Retrieve user data from localStorage

    if (user) {
      const parsedUser = JSON.parse(user); // Parse the stored string into an object
      console.log('Parsed user data:', parsedUser); // Debugging: Check what's inside localStorage

      if (parsedUser.role === 'recruiter') {
        // If the user role is 'recruiter', show recruiter profile link
        return (
          <Link to="/recruiter-profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            View Recruiter Profile
          </Link>
        );
      } else if (parsedUser.role === 'student') {
        // If the user role is 'jobSeeker', show job seeker profile link
        return (
          <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            View Job Seeker Profile
          </Link>
        );
      } else {
        // If no role is defined or invalid role, show job seeker profile as default
        return (
          <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
            View Profile
          </Link>
        );
      }
    } else {
      // If no user data is found in localStorage
      return (
        <Link to="/login" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
          Login
        </Link>
      );
    }
  })()}
  
  <button
    onClick={handleLogout}
    className="w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
  >
    Logout
  </button>
</div>

             
              )}
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="hidden md:inline-block bg-transparent text-blue-800 border border-blue-800 px-4 py-2 rounded-md">
                  Login
                </button>
              </Link>
              <Link to="/signup">
                <button className="hidden md:inline-block bg-yellow-800 text-white px-4 py-2 rounded-md">
                  Signup
                </button>
              </Link>
            </>
          )}
        </div>
      </header>

      {/* Sidebar for mobile */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-30 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <button className="text-blue-800 mt-4 ml-4" onClick={toggleSidebar}>
          &#10005;
        </button>
        <ul className="mt-8 space-y-4 px-4">
          {isLoggedIn ? (
            <>
              <li>
                <Link to="/profile">
                  <button className="w-full bg-transparent text-blue-800 border border-blue-800 px-4 py-2 rounded-md">
                    Profile
                  </button>
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} className="w-full bg-yellow-800 text-white px-4 py-2 rounded-md">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">
                  <button className="w-full bg-transparent text-blue-800 border border-blue-800 px-4 py-2 rounded-md">
                    Login
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/signup">
                  <button className="w-full bg-yellow-800 text-white px-4 py-2 rounded-md">
                    Signup
                  </button>
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Fullscreen Background Video */}
      <div className="relative h-screen">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/backGround.mp4" type="video/mp4" />
        </video>

        {/* Content Overlay */}
        <div className="relative z-10 text-center text-white p-6 flex flex-col justify-center items-center h-full">
          <main>
            <h1 className="text-5xl font-bold text-white mb-4">
              Best Platform For Blue-collar Jobs
            </h1>
            <p className="text-lg text-white mb-8">
              Tired of traditional job boards? Join thousands of professionals and accelerate your career growth with Rozgari.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
              <div className="text-center bg-blue-100 bg-opacity-80 shadow-lg p-6 rounded-lg">
                <h2 className="text-lg font-semibold text-blue-900">Find a job</h2>
                <p className="text-blue-600 mt-2">2,465 open vacancies</p>
                <button className="mt-4 bg-yellow-800 text-white px-4 py-2 rounded-md">
                  Explore Jobs
                </button>
              </div>
              <div className="text-center bg-blue-100 bg-opacity-80 shadow-lg p-6 rounded-lg">
                <h2 className="text-lg font-semibold text-blue-900">Learn new skills</h2>
                <p className="text-blue-600 mt-2">34 online courses</p>
                <button className="mt-4 bg-yellow-800 text-white px-4 py-2 rounded-md">
                  Start Learning
                </button>
              </div>
              <div className="text-center bg-blue-100 bg-opacity-80 shadow-lg p-6 rounded-lg">
                <h2 className="text-lg font-semibold text-blue-900">Join a community</h2>
                <p className="text-blue-600 mt-2">1K+ Rozgari users</p>
                <button className="mt-4 bg-yellow-800 text-white px-4 py-2 rounded-md">
                  Join Now
                </button>
              </div>
            </div>

            {/* Search Section */}
            <div className="bg-blue-100 bg-opacity-80 shadow-md p-6 rounded-md max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-blue-900 mb-4">
                Search jobs on Rozgari
              </h2>
              <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
                <a href="#" className="text-blue-600">Jobs in Jaipur</a>
                <a href="#" className="text-blue-600">Jobs in Mumbai</a>
                <a href="#" className="text-blue-600">Jobs in Delhi</a>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Other sections */}
      <JobSearchPage />
      <BrowseJobs />
      <AssurancesSection />
    </div>
  );
};

export default HomePage;
