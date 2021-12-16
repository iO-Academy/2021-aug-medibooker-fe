import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from '../Components/Pages/Home';
import PatientBooking from '../Components/Pages/PatientBooking';
import PatientDetails from '../Components/Pages/PatientDetails';
import BookingConfirmed from '../Components/Pages/BookingConfirmed';
import DoctorLogin from '../Components/Pages/DoctorLogin';
import DoctorPortal from '../Components/Pages/DoctorPortal';
import React, { useEffect, useState } from 'react';

const Routing = () => {
  const [input, setInput] = useState({});

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/patient-booking"
          element={<PatientBooking input={input} setInput={setInput} />}
        />
        <Route
          path="/patient-details"
          element={<PatientDetails input={input} setInput={setInput} />}
        />
        <Route
          path="/booking-confirmed"
          element={<BookingConfirmed input={input} setInput={setInput} />}
        />
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/doctor-portal" element={<DoctorPortal />} />
      </Routes>
    </Router>
  );
};

export default Routing;
