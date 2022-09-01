import React from "react";
import logo from "../../images/logo-black.svg";
const MidleOfHeader = () => {
  const [search, setSearch] = React.useState("");

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // props.handlesearch(search);
  }
  return (
    <div className="header__midle">
      <img src={logo} alt="Логотип" className="header__logo" />
      <div className="header__search-conteiner">
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
    </div>
  );
};
export default MidleOfHeader;
