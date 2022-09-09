import SwiperImages from "./SwiperImages";
import {Button, IconButton} from "@mui/material";
import CardColors from "./CardColors";
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import React, {useEffect, useState} from "react";
import CardMark from "./CardMark";
import WhiteTooltip from "../WhiteTooltip/WhiteTooltip";
import {Link} from "react-router-dom";
import {setProduct, getFirstColor} from "../../redux/product/productSlice"
import {openAlertBar} from "../../redux/other/otherSlice"
import {useDispatch, useSelector} from "react-redux";
import {getPriceWithFormat} from "../../utils/getPriceWithFormat"
import {homeSelector, postFavoriteItem, deleteFavoriteItem} from "../../redux/home/homeSlice";

const Card = ({item}) => {
    const [visible, setVisible] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const dispatch = useDispatch();
    const {favoriteData} = useSelector(homeSelector)

    useEffect(() => {
        if (!isLiked) {
            dispatch(postFavoriteItem(item))
        }
        dispatch(deleteFavoriteItem({item, favoriteData}))

    },[])

    const onClickBuyButton = () => {
        dispatch(setProduct(item))
        dispatch(getFirstColor(item.colors))
    }

    const handleIsFavorite = (id) => {
        return favoriteData.find((item) => item.id === id)
    }


    const onClickFavoriteButton = () => {
        setIsLiked(handleIsFavorite(item.id))
        dispatch(openAlertBar({message: item.title}))
    }

    return (
        <article
            className="card"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            <CardMark mark={item.mark}/>
            <SwiperImages images={item.cardImages} visible={visible}/>
            <p className="card__title">{item.title}</p>
            <div className="card__desc-wrapper">
                <div className="card__price-wrapper">
                    <div></div>
                    <p><span className="old-price">{getPriceWithFormat(item.oldPrice)}</span> &#8381;</p>
                    <em>{getPriceWithFormat(item.price)} &#8381;</em>
                </div>
                <CardColors colorPalette={item.colors} visible={visible}/>
                <div className="card__buttons-wrapper">
                    <Link to={`product/${item.id}`} className="card__link-buy" onClick={() => onClickBuyButton()}>
                        <Button style={{width: '100%'}} size="medium" variant="outlined">купить</Button>
                    </Link>
                    <WhiteTooltip title="Добавить в избранное" placement="top-start">
                        <IconButton color="error" onClick={() => onClickFavoriteButton()}>
                            {isLiked ? <Favorite/> : <FavoriteBorder/>}
                        </IconButton>
                    </WhiteTooltip>
                </div>
            </div>
        </article>
    )
}

export default Card;