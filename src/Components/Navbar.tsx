import React from 'react';

const NavBar: React.FC = () => {
    return (
        <nav className='h-fit shadow-custom-red rounded-b-xl min-w-72' style={{ fontFamily: 'sans-serif' }}>
            <span className='text-black inline-block bg-white hover:text-white hover:bg-mainRed px-4 py-4 cursor-pointer rounded-bl-xl'>Home</span>
            <span className='text-black inline-block bg-white hover:text-white hover:bg-mainRed px-4 py-4 cursor-pointer'>Games</span>
            <span className='text-black inline-block bg-white hover:text-white hover:bg-mainRed px-4 py-4 cursor-pointer'>Careers</span>
            <span className='text-black inline-block bg-white hover:text-white hover:bg-mainRed px-4 py-4 cursor-pointer'>About</span>
            <span className='text-black inline-block bg-white hover:text-white hover:bg-mainRed px-4 py-4 cursor-pointer'>Contact</span>
            <span className='text-black inline-block bg-white hover:text-white hover:bg-mainRed px-4 py-4 cursor-pointer'>Blog</span>
            <span className='text-black inline-block bg-white hover:text-white hover:bg-mainRed px-4 py-4 cursor-pointer rounded-br-xl'>More</span>
        </nav>
    );
};

export default NavBar;
