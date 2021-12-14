import React, { useEffect, useState } from 'react';
import { getAppointments } from '../../Services/appointments';
import { getAvailableTimes } from '../../Services/times';

const SelectTime = (props) => {
  const [appointments, setAppointments] = useState([]);

  const TimeChangeHandler = (e) => {
    props.setInput({
      ...props.input,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  // Calls getAppointments and setAppointments each time the doctor or date state changes
  useEffect(() => {
    let mounted = true;
    getAppointments(props.doctor, props.date).then((appointment) => {
      if (mounted) {
        setAppointments(appointment);
      }
    });
    return () => (mounted = false);
  }, [props.doctor, props.date]);

  let times = getAvailableTimes(appointments);

  return (
    <>
      <label htmlFor="time">Choose time of appointment</label>
      <br />
      <select
        name="Time"
        id="time"
        defaultValue="default"
        onChange={TimeChangeHandler}
      >
        <option value="default" disabled hidden>
          Select...
        </option>
        {times.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
      <br />
    </>
  );
};

export default SelectTime;
