import React from "react";
import logo from "../../images/logo-black.svg";
import {Badge} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {Link} from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PermIdentitySharpIcon from "@mui/icons-material/PermIdentitySharp";
import InputWithIcon from "./HeaderInput";
import {useSelector} from "react-redux";
import {homeSelector} from "../../redux/home/homeSlice";
import {arraySelector} from "../../redux/basket/arrayOfCards";

const MiddleOfHeader = () => {
    const [search, setSearch] = React.useState("");
    const {favoriteData} = useSelector(homeSelector)
    const {data} = useSelector(arraySelector)

    function handleSearchChange(e) {
        setSearch(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        // props.handlesearch(search);
    }

    return (
        <div className="header__middle">
            <div className="header__content">
                <Link to="/">
                    <img src={logo} alt="Логотип" className="header__logo"/>
                </Link>
                <InputWithIcon />
                <div className="header__middle-nav-content">
                    <Link to="/" className="header__middle-item">
                        <PermIdentitySharpIcon color="primary"/>
                        <span className="header__middle-item-span">Личный кабинет</span>
                    </Link>
                    <Link to="/favorite" className="header__middle-item">
                        <Badge badgeContent={favoriteData.length} color="error">
                            <FavoriteBorderIcon color="primary"/>
                        </Badge>
                        <span className="header__middle-item-span">Избранное</span>
                    </Link>
                    <Link to="/basket" className="header__middle-item">
                        <Badge badgeContent={data.length} color="error">
                            <ShoppingCartOutlinedIcon color="primary"/>
                        </Badge>
                        <span className="header__middle-item-span">Корзина</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default MiddleOfHeader;
