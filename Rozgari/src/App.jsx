import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';
import Layout from './components/Layout'; // Use layout to include the footer across all pages
import Footer from './components/Footer';
import Jobs from './components/Jobs';
import ProfilePage from './components/ProfilePage';
import RecruiterProfilePage from './components/RecruiterProfilePage';

// Define routes
const appRouter = createBrowserRouter([
  {
    path: '/', 
    element: <Layout />, // Layout for shared components like Footer
    children: [
      { path: '/', element: <HomePage /> }, // Home with multiple sections
      { path: '/login', element: <Login /> }, // Login page
      { path: '/signup', element: <Signup /> }, // Signup page
      {path:'/jobs',element:<Jobs/>},
      {
        path:'/profile',element:<ProfilePage/>
      },
      {
        path:'/recruiter-profile' , element:<RecruiterProfilePage/>
      },
    ],
  },
]);

function App() {
  return(
    <>
    
    <RouterProvider router={appRouter} />;
    
    </>
  ) 
}

export default App;
