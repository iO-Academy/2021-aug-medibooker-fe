import React, {useEffect, useState} from "react";
import { getDoctors } from "../../../Services/doctors";
import { getAppointments } from "../../../Services/appointments";

const PatientBooking = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    let mounted = true;
    getDoctors()
      .then(doctor => {
        if(mounted) {
          setDoctors(doctor)
        }
      })
    return () => mounted = false;
   }, [])

    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        let mounted = true;
        getAppointments()
            .then(appointment => {
                if(mounted) {
                    setAppointments(appointment)
                }
            })
        return () => mounted = false;
    }, [])

  const [appointment, setAppointment] = useState([]);
  const [value, setValue] = useState('default');

  const formChangeHandler = (e) => {
      setAppointment((appointment) => ({
          ...appointment,
          [e.target.name]: e.target.value,
      }));

      setValue(e.target.value);
  }

  let times = ["09:00 - 10:00", "10:00 - 11:00", "11:00 - 12:00", "12:00 - 13:00", "13:00 - 14:00", "14:00 - 15:00", "15:00 - 16:00", "16:00 - 17:00"]

    return (
        <>
            <h1>Patient Booking Page</h1>
            <form>
              <label htmlFor="doctor">Doctor:</label>
              <select name="doctor" id="doctor" defaultValue="default" onChange={formChangeHandler}>
                  <option value="default" disabled hidden>Select...</option>
                  {doctors.map(doctor => <option key={doctor.id}>{doctor.name}</option>)}
              </select>
              <br/>
              <label htmlFor="date">Date:</label>
              <input type="date" name="date" id="date" onChange={formChangeHandler} />
                <br/>
              <label htmlFor="time">Time:</label>
              <select name="time" id="time" defaultValue="default">
                  <option value="default" disabled hidden>Select...</option>
                  {times.map(time => <option key={time}>{time}</option>)}
              </select>
              <br/>
              <button type="submit">Continue</button>
            </form>
        </>
    )

}

export default PatientBooking;