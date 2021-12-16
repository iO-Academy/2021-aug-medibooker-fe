import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../../GeneralComponents/Navbar";
import Footer from "../../GeneralComponents/Footer";

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

  const handleHomeButton = (e) => {
    navigate('/');
  };

  return (
    <section className='bg-blue-100 flex flex-col justify-between h-full'>
      <Navbar heading='Patient details' link={handleHomeButton} content='Cancel booking' style='ml-auto px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500'/>
        <section className='p-6 mx-6 md:mx-auto bg-white rounded-md shadow-md my-4'>
          <h1 className='text-blue-900 text-2xl'>
          Patient Details For Appointment With {props.input.Doctor} at{' '}
          {props.input.Time} on {props.input.Date}
          </h1>
          <form className='flex-1' onSubmit={addAppointmentHandler}>
            <div className='grid grid-cols-1 gap-6 mt-4'>
              <div>
                <label htmlFor="name">Full name:</label>
                <input
                    name="Patient"
                    id="name"
                    type="text"
                    placeholder="Type here..."
                    onChange={NameChangeHandler}
                    required
                    className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                ></input>
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  name="Patient Email"
                  id="email"
                  type="email"
                  placeholder="Type here..."
                  onChange={EmailChangeHandler}
                  required
                  className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                ></input>
              </div>
              <div>
                <label htmlFor="symptoms">
                  Reason For Appointment (please provide as much detail as possible):
                </label>
                <textarea
                    name="Symptoms"
                    id='symptoms'
                    placeholder="Type reason for appointment here..."
                    rows='5'
                    onChange={SymptomsChangeHandler}
                    required
                    className='form-control resize-none block w-full mt-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
                ></textarea>
              </div>
              <div className='flex flex-col md:flex-row gap-2 justify-evenly mt-2 md:mt-6'>
                <button className='px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600' onClick={handleCancelButton}>Change appointment details</button>
                <button className='px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500' type="submit">Book Appointment</button>
              </div>
            </div>
          </form>
        </section>
      <Footer />
    </section>
  );
};

export default PatientDetails;
