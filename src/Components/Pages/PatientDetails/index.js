import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PatientDetails = (props) => {
  const navigate = useNavigate();

  async function addAppointment(input) {
    let response = await fetch('http://localhost:3001/appointments', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(props.input),
    });
    console.log(props.input);
  }

  const addAppointmentHandler = (ev) => {
    ev.preventDefault();
    console.log('addAppointmentHandler worked'); // for debugging
    addAppointment(props.input);
    navigate('/booking-confirmed');
  };

  const NameChangeHandler = (e) => {
    props.setInput({
      ...props.input,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const EmailChangeHandler = (e) => {
    props.setInput({
      ...props.input,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const SymptomsChangeHandler = (e) => {
    props.setInput({
      ...props.input,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleCancelButton = (e) => {
    navigate('/patient-booking');
  };

  return (
    <>
      <h1>
        Patient Details For Appointment With {props.input.Doctor} at{' '}
        {props.input.Time} on {props.input.Date}
      </h1>
      <form onSubmit={addAppointmentHandler}>
        <label htmlFor="name">Full name</label>
        <br />
        <input
          name="Patient"
          id="name"
          type="text"
          placeholder="Type here..."
          onChange={NameChangeHandler}
        ></input>
        <br />
        <label htmlFor="email">Email</label>
        <br />
        <input
          name="Patient Email"
          id="email"
          type="email"
          placeholder="Type here..."
          onChange={EmailChangeHandler}
        ></input>
        <br />
        <label htmlFor="symptoms">
          Reason For Appointment (please provide as much detail as possible)
        </label>
        <br />
        <input
          name="Symptoms"
          id="symptoms"
          type="text"
          placeholder="Type here..."
          onChange={SymptomsChangeHandler}
        ></input>
        <br />
        <button onClick={handleCancelButton}>Cancel</button>
        <br />
        <button type="submit">Book Appointment</button>
      </form>
    </>
  );
};

export default PatientDetails;
