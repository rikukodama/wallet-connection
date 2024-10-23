import React from "react";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import NavBar from "./Navbar";

const Header: React.FC = () => {
    return (
        <div className="px-28 flex w-full justify-between">
            <Logo />
            <SearchBox />
            <NavBar />
        </div>
    );
};

export default Header;