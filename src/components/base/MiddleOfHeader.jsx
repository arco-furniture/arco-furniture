import React from "react";
import logo from "../../images/logo-black.svg";
import {Badge} from "@mui/material";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from "react-router-dom";

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
      <div className="header__search-container">
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
      </div>
      <Link to='/basket' className="header__middle-item">
        <Badge badgeContent={4} color="error">
          <ShoppingCartOutlinedIcon/>
        </Badge>
        <span className="header__middle-item-span">Корзина</span>
      </Link>
    </div>
  );
};
export default MiddleOfHeader;
