import React from "react"
import TopOfHeader from "./TopOfHeader";
import MiddleOfHeader from "./MiddleOfHeader";
import TabPanel from '../base/TabPanel';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <TopOfHeader/>
                <MiddleOfHeader/>
                <TabPanel />
            </div>
        </header>
    )
}

export default Header;