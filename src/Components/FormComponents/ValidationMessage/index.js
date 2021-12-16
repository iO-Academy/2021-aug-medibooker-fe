import React, { useEffect, useState } from 'react';

const ValidationMessage = (props) => {
  return (
    <>
      <div>
        <h1 className='text-red-700 text-xl block text-center w-full'>Please fill in all the fields</h1>
      </div>
    </>
  );
};

export default ValidationMessage;
