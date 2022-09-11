import React from "react"
import {HeaderMiddle, HeaderTop, HeaderNav} from "./index";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <HeaderTop/>
                <HeaderMiddle/>
                <HeaderNav/>
            </div>
        </header>
    )
}

export default Header;