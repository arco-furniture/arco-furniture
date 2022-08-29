import React from "react"
import DeleteIcon from '@mui/icons-material/Delete';
import SvgIcon from '@mui/material/SvgIcon';
import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <Link to={"/"}>
                    <SvgIcon>
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </SvgIcon>
                </Link>
                <Link to={"/basket"}>
                    <DeleteIcon />
                </Link>
                header
            </div>
        </header>
    )
}

export default Header;