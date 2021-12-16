import React from 'react';
import Logo from '../../../Assets/Images/mb-logo.svg'

const Navbar = (props, {style})  => {
    return (
        <nav className='h-24 md:h-32 bg-blue-100 flex px-6 md:px-24 gap-5 items-center'>
            <img src={Logo} alt='MediBooker logo' className='max-h-full w-100 py-2'/>
            <h1 className='text-blue-900 text-2xl lg:text-5xl'>{ props.heading }</h1>
            <button className={props.style} onClick={props.link}>{props.content}</button>
        </nav>
    );
};

export default Navbar;