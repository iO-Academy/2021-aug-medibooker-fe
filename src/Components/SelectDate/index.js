import React, { useEffect, useState } from 'react';

const SelectDate = (props) => {
  // Updates the date state each time a different Date is selected in the dropdown
  const DateChangeHandler = (e) => {
    props.setDate(e.target.value);
    props.setInput({
      ...props.input,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <>
      <label htmlFor="date">Choose date of appointment</label>
      <br />
      <input type="date" name="Date" id="date" onChange={DateChangeHandler} />
      <br />
    </>
  );
};

export default SelectDate;
