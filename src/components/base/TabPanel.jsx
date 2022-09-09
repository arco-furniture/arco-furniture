import React from "react";
import { Link, useLocation } from "react-router-dom";
import initialTabs from "../../utils/constants";

export default function TabPanel(props) {
  const location = useLocation();
  function isActive(path) {
    return location.pathname === "/" + path;
  }
  return (
    <div className="header__tabs">
      {Object.entries(initialTabs).map((i) => {
        return (
          <Link
            to={i[0]}
            key={i}
            className={`header__tab ${
              isActive(i[0]) ? "header__tab_active" : ""
            }`}
          >
            <span>{i[1].toUpperCase()}</span>
          </Link>
        );
      })}
    </div>
  );
}
