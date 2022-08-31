import React from "react"
import TopOfHeader from "./TopOfHeader";
import BasicTabs from "./TabPanel";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
            <TopOfHeader />
            <BasicTabs />
            </div>
        </header>
    )
}

export default Header;