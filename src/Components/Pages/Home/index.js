import React from 'react';
import Footer from "../../GeneralComponents/Footer";
import Navbar from "../../GeneralComponents/Navbar";
import NavGrid from "../../HomeComponents/NavGrid";

const Home = () => {
  return (
      <div className='h-screen flex justify-between flex-col bg-blue-100'>
        <Navbar heading='Welcome to MediBooker' style='hidden' />
        <NavGrid />
        <Footer />
      </div>
  );
};

export default Home;
