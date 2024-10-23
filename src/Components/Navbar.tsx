import React from 'react';

const NavBar: React.FC = () => {
    return (
        <nav className='h-fit shadow-custom-red rounded-b-lg'>
            <span className='text-black inline-block bg-white hover:text-white hover:bg-mainRed px-3 py-5 rounded-bl-lg'>Home</span>
            <span className='text-black inline-block bg-white hover:text-white hover:bg-mainRed px-3 py-5'>Games</span>
            <span className='text-black inline-block bg-white hover:text-white hover:bg-mainRed px-3 py-5'>Careers</span>
            <span className='text-black inline-block bg-white hover:text-white hover:bg-mainRed px-3 py-5'>About</span>
            <span className='text-black inline-block bg-white hover:text-white hover:bg-mainRed px-3 py-5'>Contact</span>
            <span className='text-black inline-block bg-white hover:text-white hover:bg-mainRed px-3 py-5'>Blog</span>
            <span className='text-black inline-block bg-white hover:text-white hover:bg-mainRed px-3 py-5 rounded-br-lg'>More</span>
        </nav>
    );
};

export default NavBar;
