import React from "react";
import { Link, useLocation } from "react-router-dom";
import initialTabs from "../../../utils/constants";
import {Button} from "@mui/material";

const HeaderNav = () => {
  const location = useLocation();

  function isActive(path) {
    return location.pathname === "/" + path;
  }

  return (
    <div className="header__tabs">
      <div className="header__content">
        <div className="header__tabs-wrapper">
          {Object.entries(initialTabs).map((i) => {
            return (
                <Link
                    to={i[0]}
                    key={i}
                    className={`header__tab ${isActive(i[0]) ? "header__tab_active" : ""}`}
                >
                  <Button
                      style={{color: '#fff', minHeight: '100%', borderRadius: '0', fontSize: '12px'}}
                  >
                    {i[1]}
                  </Button>
                </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HeaderNav;