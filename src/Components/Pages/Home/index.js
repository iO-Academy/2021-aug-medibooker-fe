import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleAppointmentClick = (e) => {
    navigate('/patient-booking');
  };

  return (
    <>
      <h1>WELCOME TO MEDIBOOKER</h1>
      <button onClick={handleAppointmentClick}>BOOK AN APPOINTMENT</button>
    </>
  );
};

export default Home;
