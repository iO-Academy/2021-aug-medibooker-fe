import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SelectDoctor from '../../SelectDoctor';
import SelectTime from '../../SelectTime';
import ValidationMessage from '../../ValidationMessage';
import DatePicker from '../../DatePicker';

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
        <DatePicker
          date={date}
          setDate={setDate}
          input={props.input}
          setInput={props.setInput}
        />
        <SelectTime
          doctor={doctor}
          date={date}
          time={time}
          setTime={setTime}
          input={props.input}
          setInput={props.setInput}
        />
        <button onClick={handleResetForm}>Reset form</button>
        <br />
        <button type="submit" onClick={handleSubmit}>
          Continue to add patient details
        </button>
        {showResults ? <ValidationMessage /> : null}
      </form>
    </>
  );
};

export default PatientBooking;
