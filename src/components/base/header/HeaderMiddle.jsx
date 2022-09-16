import React from "react";
import logo from "../../../images/logo-black.svg";
import {Badge} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {Link} from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PermIdentitySharpIcon from "@mui/icons-material/PermIdentitySharp";
import Search from "./components/Search";
import {useSelector} from "react-redux";
import {homeSelector} from "../../../redux/home/homeSlice";
import {basketSelector} from "../../../redux/basket/basketSlice";
import {getPriceWithFormat} from "../../../utils/getPriceWithFormat";

const HeaderMiddle = () => {
    const {favoriteData} = useSelector(homeSelector)
    const {dataBasketItems, totalPrice} = useSelector(basketSelector);
    const badgeBasketPrice = totalPrice ? `${getPriceWithFormat(totalPrice)}  ₽` : 'Корзина';
    const countBasketItems =  dataBasketItems.reduce((sum, currentItem) => {
        return sum + currentItem.count
    },0)


    return (
        <div className="header__middle">
            <div className="header__content">
                <Link to="/">
                    <img src={logo} alt="Логотип" className="header__logo"/>
                </Link>
                <Search />
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
                        <Badge badgeContent={countBasketItems} color="error">
                            <ShoppingCartOutlinedIcon color="primary"/>
                        </Badge>
                        <span className="header__middle-item-span">
                            {badgeBasketPrice}
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
};
export default HeaderMiddle;
