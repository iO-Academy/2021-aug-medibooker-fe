import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SelectDoctor from '../../SelectDoctor';
import SelectDate from '../../SelectDate';
import SelectTime from '../../SelectTime';

const PatientBooking = (props) => {
  const [doctor, setDoctor] = useState();
  const [date, setDate] = useState('default');
  const navigate = useNavigate();

  const returnInputState = () => {
    console.log('changing page');
    console.log(props.input);
    return props.input;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    returnInputState();
    navigate('/patient-details');
  };

  const handleResetForm = (e) => {
    navigate('/patient-booking');
  };

  return (
    <>
      <h1>TO MAKE AN APPOINTMENT, COMPLETE THE FORM BELOW</h1>
      <form>
        <SelectDoctor
          doctor={doctor}
          setDoctor={setDoctor}
          input={props.input}
          setInput={props.setInput}
        />
        <SelectDate
          date={date}
          setDate={setDate}
          input={props.input}
          setInput={props.setInput}
        />
        <SelectTime
          doctor={doctor}
          date={date}
          input={props.input}
          setInput={props.setInput}
        />
        <button onClick={handleResetForm}>Reset form</button>
        <br />
        <button type="submit" onClick={handleSubmit}>
          Continue to add patient details
        </button>
      </form>
    </>
  );
};

export default PatientBooking;
