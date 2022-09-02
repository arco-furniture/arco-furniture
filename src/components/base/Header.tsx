import React from "react"
import TopOfHeader from "./TopOfHeader";
import BasicTabs from "./TabPanel";
import MidleOfHeader from "./MidleOfHeader";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
            <TopOfHeader />
            <MidleOfHeader />
            <BasicTabs />
            </div>
        </header>
    )
}

export default Header;