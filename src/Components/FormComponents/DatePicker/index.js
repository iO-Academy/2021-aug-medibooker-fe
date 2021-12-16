import React, { useEffect, useState } from 'react';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const DatePicker = (props) => {
  const [today, setToday] = useState('');
  const [selectedDay, setSelectedDay] = useState('');


  // Converts DayPicker date output to YYYY-M-DD and updates the date state each time a different date is selected in the calender
  const DateChangeHandler = (day, { selected }) => {
    let year = day.getFullYear();
    let month = day.getMonth() + 1;
    let formattedDay = day.getDate();
    let inputDate = year + '-' + month + '-' + formattedDay;
    setSelectedDay(day);
    props.setDate(inputDate);
    props.setInput({
      ...props.input,
      Date: inputDate,
    });
    console.log(inputDate); // for debugging
  };

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      setToday(new Date());
    }
    return () => (mounted = false);
  }, []);

  return (
    <>
      <label>Choose date of appointment:</label>
      <div className='w-full flex justify-center px-4 py-2 mt-2 bg-white border border-gray-300 rounded-md focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring'>
        <DayPicker
          required={true}
          className=''
          selectedDays={selectedDay}
          fromMonth={today}
          fixedWeeks
          onDayClick={DateChangeHandler}
          disabledDays={[{ daysOfWeek: [0, 6] }, { before: today }]}
        />
      </div>
    </>
  );
};

export default DatePicker;
