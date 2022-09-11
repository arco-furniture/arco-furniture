import SwiperImages from "./SwiperImages";
import {Button, IconButton} from "@mui/material";
import CardColors from "./CardColors";
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import React, {useEffect, useState} from "react";
import CardMark from "./CardMark";
import BlackTooltip from "../BlackTooltip/BlackTooltip";
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
    const isFavorite = favoriteData.some((favorite) => favorite.id === item.id)

    useEffect(() => {
        if (isFavorite){
            setIsLiked(true)
        }
    }, [])

    const onClickBuyButton = () => {
        dispatch(setProduct(item))
        dispatch(getFirstColor(item.colors))
    }

    const handleIsFavorite = () => {
        if (!isFavorite) {
            dispatch(postFavoriteItem(item))
            return true
        }
        const withoutItemsFavorite = favoriteData.filter((favorite) => favorite.id !== item.id)
        dispatch(deleteFavoriteItem(withoutItemsFavorite))
        return false
    }

    const onClickFavoriteButton = () => {
        setIsLiked(handleIsFavorite())
        dispatch(openAlertBar({
            message: item.title,
            type: 'favorite'
        }))
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
                    <Link to={`/product/${item.id}`} className="card__link-buy" onClick={() => onClickBuyButton()}>
                        <Button style={{width: '100%'}} size="medium" variant="outlined">купить</Button>
                    </Link>
                    <BlackTooltip title="Добавить в избранное" placement="top-start">
                        <IconButton color="error" onClick={() => onClickFavoriteButton()}>
                            {isLiked ? <Favorite/> : <FavoriteBorder/>}
                        </IconButton>
                    </BlackTooltip>
                </div>
            </div>
        </article>
    )
}

export default Card;