import Chip from "@mui/material/Chip";
import {Button, IconButton} from "@mui/material";
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {productSelector, setCurrentColor} from "../../redux/product/productSlice";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {getPriceWithFormat} from "../../utils/getPriceWithFormat";
import {openAlertBar} from "../../redux/other/otherSlice";
import BlackTooltip from "../../components/BlackTooltip/BlackTooltip";
import {deleteFavoriteItem, homeSelector, postFavoriteItem} from "../../redux/home/homeSlice";
import { addItemForCart } from "../../redux/product/productSlice";

const ProductParams = () => {
    const styleSubmit = {fontSize: '18px', fontWeight: 700};
    const [isLiked, setIsLiked] = useState(false);
    const {product, currentColor} = useSelector(productSelector)
    const {favoriteData} = useSelector(homeSelector)
    const isFavorite = favoriteData.some((favorite) => favorite.id === product.id)
    const dispatch = useDispatch();

    useEffect(() => {
        if (isFavorite){
            setIsLiked(true)
        }
    }, [])

    const handleCurrentColor = (obj, index) => {
        const notExistColor = {
            backgroundColor: 'rgba(0, 0, 0, 0)',
            border: `2px solid ${obj.color}`
        }
        const defaultStylesColor = {
            backgroundColor: obj.color,
            transition: 'transform ease-in-out 0.1s',
            transform: currentColor.index === index ? 'translateY(-4px)' : 'translateY(0)'
        }
        if(!obj.exist) {
            return Object.assign({},defaultStylesColor, notExistColor)
        }
        return defaultStylesColor
    }

    const ChipSuccess = () => {
        return <Chip label="В наличии" color="success" variant="filled"></Chip>
    }

    const ChipError = () => {
        return <Chip label="Под заказ" color="error" variant="filled"></Chip>
    }

    // объект для отправки данных в корзину
    const cartItem = {
        id: product.id,
        title: product.title,
        price: product.price,
        oldPrice: product.oldPrice,
        image: product.cardImages[0].image,
        specs: product.specs,
        color: currentColor.color,
        article: product.article,
        count: product.count,
    }

    const handlerOnSubmit = (evt) => {
        evt.preventDefault()
        dispatch(openAlertBar({
            message: product.title,
            type: 'cart'
        }))

        // пример экшена для отправки данных в корзину
        dispatch(addItemForCart(cartItem))
    }


    const handleIsFavorite = () => {
        if (!isFavorite) {
            dispatch(postFavoriteItem(product))
            return true
        }
        const withoutItemsFavorite = favoriteData.filter((favorite) => favorite.id !== product.id)
        dispatch(deleteFavoriteItem(withoutItemsFavorite))
        return false
    }

    const onClickFavoriteButton = () => {
        setIsLiked(handleIsFavorite())
        dispatch(openAlertBar({
            message: product.title,
            type: 'favorite'
        }))
    }

    return (
        <form
            className="product__params product__background"
            onSubmit={(evt) => handlerOnSubmit(evt)}
        >
            <div className="product__top-wrapper">
                <h2>{product.title}</h2>
                { currentColor.exist ? <ChipSuccess/> : <ChipError/> }
            </div>
            <div className="product__price-wrapper">
                <p className="product__old-price"><span className="old-price">{getPriceWithFormat(product.oldPrice)}</span> &#8381;</p>
                <em className="product__price">{getPriceWithFormat(product.price)} &#8381;</em>
            </div>
            <div className="product__colors">
                <h3 className="product__title">Цвета исполнения:</h3>
                <ul>
                    {
                        product.colors?.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Button
                                        onClick={() => dispatch(setCurrentColor({
                                            index: index,
                                            color: item.color,
                                            exist: item.exist
                                        }))}
                                        style={handleCurrentColor(item, index)}
                                        variant="contained">
                                    </Button>
                                    {currentColor.index === index &&
                                        <ExpandLessIcon
                                        color="primary"
                                        style={{
                                            position: 'absolute',
                                            bottom: '-17px',
                                            left: '3px'
                                        }}
                                        />
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="product__description">
                <p><span className="product__title">Описание: </span>
                    {product.description}
                </p>
            </div>
            <div className="product__buttons">
                <Button
                    disabled={!currentColor.exist}
                    style={styleSubmit}
                    className="product__submit"
                    size="large"
                    type="submit"
                    variant="contained">
                    добавить в корзину
                </Button>
                <BlackTooltip title="Добавить в избранное" placement="top-start">
                    <IconButton className="product__favorite" size="large" color="error"
                                onClick={() => onClickFavoriteButton()}>
                        {isLiked ? <Favorite/> : <FavoriteBorder/>}
                    </IconButton>
                </BlackTooltip>
            </div>
        </form>
    )
}

export default ProductParams;