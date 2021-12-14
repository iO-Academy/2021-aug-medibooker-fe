export function getAvailableTimes(appointments) {
  let allTimes = [
    '09:00 - 10:00',
    '10:00 - 11:00',
    '11:00 - 12:00',
    '12:00 - 13:00',
    '13:00 - 14:00',
    '14:00 - 15:00',
    '15:00 - 16:00',
    '16:00 - 17:00',
  ];
  let bookedTimes = [];
  appointments.map((appointment) => {
    bookedTimes.push(appointment.Time);
  });

  let arrayDifference = allTimes.filter((x) => !bookedTimes.includes(x));
  return arrayDifference;
}
