import React from "react";
import logo from "../../images/logo-black.svg";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PermIdentitySharpIcon from "@mui/icons-material/PermIdentitySharp";
import InputWithIcon from "./HeaderInput";

const MiddleOfHeader = () => {
  const [search, setSearch] = React.useState("");

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // props.handlesearch(search);
  }
  return (
    <div className="header__middle">
      <Link to="/">
        <img src={logo} alt="Логотип" className="header__logo" />
      </Link>
      <InputWithIcon />
      {/* <div className="header__search-container">
        <div className="header__search_logo"></div>
        <label className="header__form-field">
          <input
            type="text"
            className="header__input"
            id="search-input"
            name="search"
            required
            placeholder="Поиск по сайту"
            value={search}
            onChange={handleSearchChange}
          />
        </label>
      </div> */}
      <div className="header__middle-nav-content">
        <Link to="/" className="header__middle-item">
          <PermIdentitySharpIcon color="primary" />
          <span className="header__middle-item-span">Личный кабинет</span>
        </Link>
        <Link to="/" className="header__middle-item">
          <Badge badgeContent={1} color="error">
            <FavoriteBorderIcon color="primary" />
          </Badge>
          <span className="header__middle-item-span">Избранное</span>
        </Link>
        <Link to="/basket" className="header__middle-item">
          <Badge badgeContent={4} color="error">
            <ShoppingCartOutlinedIcon color="primary" />
          </Badge>
          <span className="header__middle-item-span">Корзина</span>
        </Link>
      </div>
    </div>
  );
};
export default MiddleOfHeader;
