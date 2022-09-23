import SwiperImages from "./SwiperImages";
import {Button, IconButton} from "@mui/material";
import CardColors from "./CardColors";
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import React, {useEffect, useState} from "react";
import Tag from "../tag/Tag";
import BlackTooltip from "../BlackTooltip/BlackTooltip";
import {Link} from "react-router-dom";
import {setProduct, getFirstColor} from "../../redux/product/productSlice"
import {openAlertBar} from "../../redux/other/otherSlice"
import {useDispatch, useSelector} from "react-redux";
import {getPriceWithFormat} from "../../utils/getPriceWithFormat"
import {homeSelector, postFavoriteItem, deleteFavoriteItem} from "../../redux/home/homeSlice";
import {addItemForBasket} from "../../redux/basket/basketSlice";

const Card = ({item}) => {
    const [visible, setVisible] = useState(false);
    const [isLiked, setIsLiked] = useState(false);
    const dispatch = useDispatch();
    const {favoriteData} = useSelector(homeSelector)
    const isFavorite = favoriteData.some((favorite) => favorite.id === item.id)
    const [selectedColor, setSelectedColor] = useState('');

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

    const basketItem = {
        id: item.id,
        title: item.title,
        price: item.price,
        oldPrice: item.oldPrice,
        image: item.cardImages.find((item) => item).image || '',
        specs: item.specs,
        color: selectedColor,
        article: item.article,
    }

    const handlerOnSubmit = () => {
        dispatch(openAlertBar({
            message: item.title,
            type: 'cart'
        }))

        console.log(basketItem)
        dispatch(addItemForBasket(basketItem))
    }

    return (
        <article
            className="card"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            <Tag tag={item.mark} isCard={true}/>
            <SwiperImages images={item.cardImages} visible={visible}/>
            <p className="card__title">{item.title}</p>
            <div className="card__desc-wrapper">
                <div className="card__price-wrapper">
                    <div></div>
                    <p><span className="old-price">{getPriceWithFormat(item.oldPrice)}</span> &#8381;</p>
                    <em>{getPriceWithFormat(item.price)} &#8381;</em>
                </div>
                <CardColors
                    colorPalette={item.colors}
                    visible={visible}
                    selectedColor={selectedColor}
                    setSelectedColor={setSelectedColor}
                    setVisible={setVisible}
                />
                <form className="card__buttons-wrapper">
                    {
                        selectedColor ?
                            <Button
                                style={{width: '100%'}}
                                size="medium"
                                variant="contained"
                                onClick={() => handlerOnSubmit()}
                            >
                                в корзину
                            </Button>
                            :
                            <>
                                <Link to={`/product/${item.id}`} className="card__link-buy" onClick={() => onClickBuyButton()}>
                                    <Button style={{width: '100%'}} size="medium" variant="outlined">купить</Button>
                                </Link>
                                <BlackTooltip title="Добавить в избранное" placement="top-start">
                                    <IconButton color="error" onClick={() => onClickFavoriteButton()}>
                                        {isLiked ? <Favorite/> : <FavoriteBorder/>}
                                    </IconButton>
                                </BlackTooltip>
                            </>
                    }
                </form>
            </div>
        </article>
    )
}

export default Card;