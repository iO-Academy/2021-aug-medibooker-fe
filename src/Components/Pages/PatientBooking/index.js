import React, { useEffect, useState } from 'react';
import { getDoctors } from '../../../Services/doctors';
import { getAppointments } from '../../../Services/appointments';
import { getAvailableTimes } from '../../../Services/times';

const PatientBooking = () => {
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [doctor, setDoctor] = useState();
  const [date, setDate] = useState('default');

  // Fetches all of the doctors - only when the page first loads
  useEffect(() => {
    let mounted = true;
    getDoctors().then((doctor) => {
      if (mounted) {
        setDoctors(doctor);
      }
    });
    return () => (mounted = false);
  }, []);

  // Updates the doctor state each time a different Doctor is selected in the dropdown
  const DoctorChangeHandler = (e) => {
    setDoctor(e.target.value);
  };

  // Updates the date state each time a different Date is selected in the dropdown
  const DateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  // Calls getAppointments and setAppointments each time the doctor or date state changes
  useEffect(() => {
    let mounted = true;
    getAppointments(doctor, date).then((appointment) => {
      if (mounted) {
        setAppointments(appointment);
      }
    });
    return () => (mounted = false);
  }, [doctor, date]);

  let times = getAvailableTimes(appointments);

  return (
    <>
      <h1>Patient Booking Page</h1>
      <form>
        <label htmlFor="doctor">Doctor:</label>
        <select
          name="doctor"
          id="doctor"
          defaultValue="default"
          onChange={DoctorChangeHandler}
        >
          <option value="default" disabled hidden>
            Select...
          </option>
          {doctors.map((doctor) => (
            <option key={doctor.id}>{doctor.name}</option>
          ))}
        </select>
        <br />
        <label htmlFor="date">Date:</label>
        <input type="date" name="date" id="date" onChange={DateChangeHandler} />
        <br />
        <label htmlFor="time">Time:</label>
        <select name="time" id="time" defaultValue="default">
          <option value="default" disabled hidden>
            Select...
          </option>
          {times.map((time) => (
            <option key={time}>{time}</option>
          ))}
        </select>
        <br />
        <button type="submit">Continue</button>
      </form>
    </>
  );
};

export default PatientBooking;
