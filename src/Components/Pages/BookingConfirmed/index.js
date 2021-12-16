import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../../GeneralComponents/Navbar";
import Footer from "../../GeneralComponents/Footer";

const BookingConfirmed = (props) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate('/');
  };

  return (
    <div className='flex flex-col justify-between h-screen bg-blue-100'>
      <Navbar heading='Thanks for booking!' link={handleClick} content='Return home' style='ml-auto px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500'/>
      <div className='p-6 mx-auto bg-white rounded-md shadow-md my-4 flex flex-col gap-4'>
        <h1>Appointment confirmed</h1>
          <p>
            {props.input.Patient} seeing {props.input.Doctor} at {props.input.Time}{' '}
            on {props.input.Date}
          </p>
          <h1>See you soon!</h1>
          <button className='px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500' onClick={handleClick}>Return home</button>
      </div>
      <Footer />
    </div>
  );
};

export default BookingConfirmed;
