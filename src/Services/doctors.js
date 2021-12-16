export function getDoctors() {
  return fetch('http://localhost:3001/doctors')
    .then(data => data.json())
}