import { useState } from 'react';
import Logo from './Logo';
import SearchBox from './SearchBox';
import NavBar from './Navbar';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className="xl:px-28 xl:flex w-full xl:justify-between relative">
                <div className='hidden xl:flex w-full justify-between'>
                    <Logo />
                    <SearchBox />
                    <NavBar />
                </div>
                {/* Hamburger Icon */}
                <div
                    className="fixed xl:hidden top-5 right-5 w-12 h-11 rounded-xl border-mainRed border-2 bg-none items-center flex py-2 flex-col gap-2 cursor-pointer"
                    onClick={toggleMenu}
                >
                    <span className="inline-block w-3/5 h-0.5 rounded-full bg-mainRed" />
                    <span className="inline-block w-3/5 h-0.5 rounded-full bg-mainRed" />
                    <span className="inline-block w-3/5 h-0.5 rounded-full bg-mainRed" />
                </div>
            </div>

            {/* Toggle Menu */}
            {isMenuOpen && (
                <div className="fixed top-20 z-50 right-0 w-full sm:w-1/3 h-vh-20 bg-mainBG shadow-lg rounded-md p-4 border-2 border-mainRed xl:hidden block">
                    <div className='absolute top-0 left-[50%] translate-x-[-50%] xl:hidden block'>
                        <Logo />
                    </div>
                    <div className='mt-20 mb-10 w-3/5 mx-auto xl:hidden block'>
                        <SearchBox />
                    </div>
                    <ul className="space-y-2">
                        <li><a href="#home" className="text-mainRed rounded-full hover:bg-mainRed
             hover:text-white py-3 w-3/5 inline-block">Home</a></li>
                        <li><a href="#games" className="text-mainRed rounded-full hover:bg-mainRed
             hover:text-white py-3 w-3/5 inline-block">Games</a></li>
                        <li><a href="#careers" className="text-mainRed rounded-full hover:bg-mainRed
             hover:text-white py-3 w-3/5 inline-block">Careers</a></li>
                        <li><a href="#about" className="text-mainRed rounded-full hover:bg-mainRed
             hover:text-white py-3 w-3/5 inline-block">About</a></li>
                        <li><a href="#contact" className="text-mainRed rounded-full hover:bg-mainRed
             hover:text-white py-3 w-3/5 inline-block">Contact</a></li>
                        <li><a href="#blog" className="text-mainRed rounded-full hover:bg-mainRed
             hover:text-white py-3 w-3/5 inline-block">Blog</a></li>
                        <li><a href="#more" className="text-mainRed rounded-full hover:bg-mainRed
             hover:text-white py-3 w-3/5 inline-block">More</a></li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default Header;
