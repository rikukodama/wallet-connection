import React from 'react';

const NavBar: React.FC = () => {
    return (
        <nav className='h-fit shadow-custom-red rounded-b-xl' style={{ fontFamily: 'sans-serif' }}>
            <span className='text-black inline-block bg-white hover:text-white hover:bg-mainRed px-4 py-4 rounded-bl-xl'>Home</span>
            <span className='text-black inline-block bg-white hover:text-white hover:bg-mainRed px-4 py-4'>Games</span>
            <span className='text-black inline-block bg-white hover:text-white hover:bg-mainRed px-4 py-4'>Careers</span>
            <span className='text-black inline-block bg-white hover:text-white hover:bg-mainRed px-4 py-4'>About</span>
            <span className='text-black inline-block bg-white hover:text-white hover:bg-mainRed px-4 py-4'>Contact</span>
            <span className='text-black inline-block bg-white hover:text-white hover:bg-mainRed px-4 py-4'>Blog</span>
            <span className='text-black inline-block bg-white hover:text-white hover:bg-mainRed px-4 py-4 rounded-br-xl'>More</span>
        </nav>
    );
};

export default NavBar;
