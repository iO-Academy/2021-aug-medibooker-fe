import React, { useEffect, useState } from 'react';
import { getDoctors } from '../../../Services/doctors';

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
      <label htmlFor="doctor">Doctor's name:</label>
      <select
        required={true}
        name="Doctor"
        id="doctor"
        defaultValue="default"
        onChange={DoctorChangeHandler}
        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'
      >
        <option value="default" disabled hidden>
          Select...
        </option>
        {doctors.map((doctor) => (
          <option key={doctor.id}>{doctor.name}</option>
        ))}
      </select>
    </>
  );
};

export default SelectDoctor;
