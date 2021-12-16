import React from 'react';

const NavGrid = ()  => {
    return (
        <div className='flex-1 grid grid-cols-1 md:grid-cols-4 grid-rows-4 md:grid-rows-5 gap-3 md:gap-10 px-6 md:px-24 py-5'>
            <a href='/patient-booking' className='col-span-full row-start-1 row-span-2 md:row-span-3 bg-booking bg-center bg-cover bg-no-repeat bg-blue-700 bg-blend-multiply rounded-md transform duration-500 ease-in-out hover:scale-105'>
                <div className='flex justify-center items-center h-full'>
                    <h1 className='text-2xl lg:text-6xl text-white text-center'>Book an appointment</h1>
                </div>
            </a>
            <a href='#' className='col-start-1 col-span-full md:col-span-3 row-start-3 md:row-start-4 md:row-span-2 bg-diary bg-center bg-cover bg-no-repeat bg-blue-400 bg-blend-multiply rounded-md transform duration-500 ease-in-out hover:scale-105'>
                <div className='flex justify-center items-center h-full'>
                    <h1 className='text-2xl lg:text-6xl text-white text-center'>Change appointment</h1>
                </div>
            </a>
            <a href='#' className='col-start-1 md:col-start-4 col-span-full md:col-span-1 row-start-4 md:row-span-2 bg-doctor bg-center bg-cover bg-no-repeat bg-blue-400 bg-blend-multiply rounded-md transform duration-500 ease-in-out hover:scale-105'>
                <div className='flex justify-center items-center h-full'>
                    <h1 className='text-xl lg:text-4xl text-white text-center'>Doctor's Portal</h1>
                </div>
            </a>
        </div>
    );
};

export default NavGrid;