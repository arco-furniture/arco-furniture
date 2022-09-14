import React from "react";
import { Link, useLocation } from "react-router-dom";
import {Button} from "@mui/material";
import {setCategoryParams} from "../../../redux/category/categorySlice";
import {useDispatch} from "react-redux";

const initialCategories = [
  {name: 'Кухни', link: 'kitchens', categoryId: 1},
  {name: 'Гостинные', link: 'living-rooms', categoryId: 2},
  {name: 'Спальни', link: 'bed-rooms', categoryId: 3},
  {name: 'Прихожие', link: 'hallways', categoryId: 4},
  {name: 'Шкафы-купе', link: 'wardrobes', categoryId: 5},
  {name: 'Детские', link: 'childish', categoryId: 6},
  {name: 'Диваны', link: 'sofas', categoryId: 7},
  {name: 'Столы и стулья', link: 'tables-and-chairs', categoryId: 8},
];

const HeaderNav = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  const isActiveCategory = (path) => {
    return location.pathname === `/category/${path}`;
  }

  return (
    <div className="header__tabs">
      <div className="header__content">
        <div className="header__tabs-wrapper">
          {
            initialCategories.map((item) => {
              return (
                  <Link
                      to={`category/${item.link}`}
                      key={item.categoryId}
                      className={`header__tab ${isActiveCategory(item.link) ? "header__tab_active" : ""}`}
                      onClick={() => dispatch(setCategoryParams({id: item.categoryId, name: item.name}))}
                  >
                    <Button style={{color: '#fff', minHeight: '100%', borderRadius: '0', fontSize: '12px'}}>
                      {item.name}
                    </Button>
                  </Link>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default HeaderNav;