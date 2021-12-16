import React, { useEffect, useState } from 'react';
import { getAvailableAppointments } from '../../../Services/appointments';
import { getAvailableTimes } from '../../../Services/times';

const SelectTime = (props) => {
  const [appointments, setAppointments] = useState([]);

  const TimeChangeHandler = (e) => {
    props.setTime(e.target.value);
    props.setInput({
      ...props.input,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  // Calls getAppointments and setAppointments each time the doctor or date state changes
  useEffect(() => {
    let mounted = true;
    getAvailableAppointments(props.doctor, props.date).then((appointment) => {
      if (mounted) {
        setAppointments(appointment);
      }
    });
    return () => (mounted = false);
  }, [props.doctor, props.date]);

  let times = getAvailableTimes(appointments);

  return (
    <>
      <label htmlFor="time">Choose time of appointment:</label>
      <select
        required={true}
        name="Time"
        id="time"
        defaultValue="default"
        onChange={TimeChangeHandler}
        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
      >
        <option value="default" disabled hidden>
          Select...
        </option>
        {times.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
    </>
  );
};

export default SelectTime;
