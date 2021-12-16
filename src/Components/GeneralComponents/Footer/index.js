import React from 'react';
import Aardvarks from '../../../Assets/Images/Angry Aardvarks Logo.svg'

const Footer = ()  => {
    return (
        <footer className='bg-blue-100 h-12 md:h-16 flex justify-center items-center'>
            <img src={Aardvarks} alt='Angry Aardvarks logo' className='max-h-full w-100 py-1'/>
            <p className='text-blue-900'>&copy; 2021</p>
        </footer>
    );
};

export default Footer;
