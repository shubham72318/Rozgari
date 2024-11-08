// Layout.js
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();

  // Define the paths where the footer should be hidden
  const hideFooterPaths = ['/login', '/signup'];

  return (
    <>
      {/* Render the content of the page */}
      <Outlet />

      {/* Conditionally render Footer based on the current path */}
      {!hideFooterPaths.includes(location.pathname) && <Footer />}
    </>
  );
};

export default Layout;
