import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingConfirmed = (props) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate('/');
  };

  return (
    <>
      <h1>APPOINTMENT CONFIRMED</h1>
      <h1>
        {props.input.Patient} seeing {props.input.Doctor} at {props.input.Time}{' '}
        on {props.input.Date}
      </h1>
      <button onClick={handleClick}>Return home</button>
    </>
  );
};

export default BookingConfirmed;
