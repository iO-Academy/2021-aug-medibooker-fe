export function getAppointments() {
    return fetch('http://localhost:3001/appointments')
        .then(data => data.json())
}
