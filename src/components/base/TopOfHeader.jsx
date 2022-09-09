import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";

const TopOfHeader = () => {
  return (
    <div className="header__top">
        <div className="header__content">
            <div className="header__nav-container">
                <div className="header__place">
                    <PlaceOutlinedIcon color="primary" />
                    <p className="header__place_city">Москва</p>
                    <div className="header__place_arrow"></div>
                </div>
                <ul className="header__nav">
                    <li className="header__nav_item">Сборка</li>
                    <li className="header__nav_item">Оплата</li>
                    <li className="header__nav_item">Доставка</li>
                </ul>
            </div>
            <div className="header__phone">
                <div className="header__phone_logo"></div>
                <a href="tel: +79615259191" className="header__phone_number">
                    8 (961) 525 91 91
                </a>
            </div>
        </div>
    </div>
  );
};
export default TopOfHeader;
