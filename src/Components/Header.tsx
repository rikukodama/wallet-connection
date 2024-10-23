import React from "react";
import Logo from "./Logo";

const Header: React.FC = () => {
    return (
        <div className="px-8 flex">
            <Logo/>
        </div>
    );
};

export default Header;