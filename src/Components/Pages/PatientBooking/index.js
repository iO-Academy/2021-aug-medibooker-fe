import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SelectDoctor from '../../FormComponents/SelectDoctor';
import SelectTime from '../../FormComponents/SelectTime';
import ValidationMessage from '../../FormComponents/ValidationMessage';
import DatePicker from '../../FormComponents/DatePicker';
import Navbar from "../../GeneralComponents/Navbar";
import Footer from "../../GeneralComponents/Footer";

const PatientBooking = (props) => {
  const [doctor, setDoctor] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const navigate = useNavigate('');
  const [showResults, setShowResults] = React.useState(false);

  const returnInputState = () => {
    console.log('changing page');
    console.log(props.input);
    return props.input;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    returnInputState();
    if (doctor == '' || date == '' || time == '') {
      setShowResults(true);
      console.log('Please fill in all the fields');
      navigate('/patient-booking');
    } else {
      navigate('/patient-details');
    }
  };

  const handleResetForm = (e) => {
    setShowResults(false);
    navigate('/patient-booking');
  };

  const handleAppointmentClick = (e) => {
    navigate('/');
  };

  return (
    <div className='bg-blue-100 flex flex-col justify-between'>
      <Navbar heading='Appointment booking' link={handleAppointmentClick} content='Cancel' style='ml-auto px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500' />
      <section className='p-6 mx-6 md:mx-auto bg-white rounded-md shadow-md my-4'>
        <h1 className='text-blue-900 text-2xl'>To begin booking an appointment, complete the form below</h1>
        <form>
          <div className='grid grid-cols-1 gap-6 mt-4'>
            <div>
              <SelectDoctor
                doctor={doctor}
                setDoctor={setDoctor}
                input={props.input}
                setInput={props.setInput}
              />
            </div>
            <div>
            <DatePicker
                date={date}
                setDate={setDate}
                input={props.input}
                setInput={props.setInput}
            />
            </div>
            <div>
              <SelectTime
                doctor={doctor}
                date={date}
                time={time}
                setTime={setTime}
                input={props.input}
                setInput={props.setInput}
              />
            </div>
            {showResults ? <ValidationMessage /> : null}
            <div className='flex flex-col md:flex-row gap-2 justify-evenly'>
              <button className='px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600' onClick={handleResetForm}>Reset form</button>
              <button className='px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500' type="submit" onClick={handleSubmit}>
                Continue to add patient details
              </button>
            </div>
          </div>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default PatientBooking;
