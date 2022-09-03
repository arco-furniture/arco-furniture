import React from "react"
import TopOfHeader from "./TopOfHeader";
import BasicTabs from "./TabPanel";
import MiddleOfHeader from "./MiddleOfHeader";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <TopOfHeader/>
                <MiddleOfHeader/>
                <BasicTabs/>
            </div>
        </header>
    )
}

export default Header;