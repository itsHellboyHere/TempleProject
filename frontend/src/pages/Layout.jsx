// src/components/Layout.js
import React, { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


const Layout = () => {
  const location = useLocation();
  const [isPageLoading, setIsPageLoading] = useState(false);

  useEffect(() => {
    setIsPageLoading(true);
    const handleLoading = () => {
      setIsPageLoading(false);
    };

    // Simulate a delay to show the loading spinner
    const timeout = setTimeout(handleLoading, 500);

    // Clean up timeout on unmount or location change
    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      <Navbar />
      {isPageLoading ? <Loading /> : <Outlet />}
      {/* <Footer /> */}
    </>
  );
};

export default Layout;
