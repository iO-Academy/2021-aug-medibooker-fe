import React, { useEffect, useState } from 'react';
import { getDoctors } from '../../Services/doctors';

const SelectDoctor = (props) => {
  const [doctors, setDoctors] = useState([]);

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
    props.setDoctor(e.target.value);
    props.setInput({
      ...props.input,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <>
      <label htmlFor="doctor">Doctor's name</label>
      <br />
      <select
        name="Doctor"
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
    </>
  );
};

export default SelectDoctor;
