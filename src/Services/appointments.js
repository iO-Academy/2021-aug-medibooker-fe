export async function getAppointments(doctor, date) {
  const response = await fetch('http://localhost:3001/appointments');
  const appointments = await response.json();
  let selectedAppointments = [];
  appointments.map((appointment) => {
    if (appointment.Doctor === doctor && appointment.Date === date) {
      selectedAppointments.push(appointment);
    }
  });
  return selectedAppointments;
}
