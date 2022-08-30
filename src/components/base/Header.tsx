import React from "react"
import TopOfHeader from "./TopOfHeader";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
            <TopOfHeader />
            </div>
        </header>
    )
}

export default Header;