import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      {/* Container for all footer content */}
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo and description */}
        <div className="flex flex-col items-center sm:flex-row sm:justify-between mb-8">
          <div className="mb-4 sm:mb-0">
            <h1 className="text-3xl font-bold text-white">Rozgari</h1>
            <p className="mt-2 text-gray-400">
              Your trusted platform for personalized job recommendations and career tools.
            </p>
          </div>

          {/* Links section */}
          <div className="flex space-x-8">
            <a href="/about" className="hover:text-white transition duration-200">
              About Us
            </a>
            <a href="/jobs" className="hover:text-white transition duration-200">
              Browse Jobs
            </a>
            <a href="/contact" className="hover:text-white transition duration-200">
              Contact Us
            </a>
            <a href="/privacy" className="hover:text-white transition duration-200">
              Privacy Policy
            </a>
          </div>
        </div>

        {/* Divider line */}
        <div className="border-t border-gray-600 mb-6"></div>

        {/* Social media and contact section */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-center sm:text-left mb-4 sm:mb-0">
            <p className="text-gray-400">Follow us on</p>
            <div className="flex justify-center sm:justify-start space-x-4 mt-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="fab fa-facebook fa-lg text-white hover:text-gray-400 transition duration-200"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <i className="fab fa-twitter fa-lg text-white hover:text-gray-400 transition duration-200"></i>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <i className="fab fa-linkedin fa-lg text-white hover:text-gray-400 transition duration-200"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <i className="fab fa-instagram fa-lg text-white hover:text-gray-400 transition duration-200"></i>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-right">
            <p className="text-gray-400">Contact Us:</p>
            <p className="text-gray-400">support@rozgari.com</p>
            <p className="text-gray-400">+123-456-7890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
