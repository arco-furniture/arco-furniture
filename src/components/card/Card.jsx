import {useEffect, useState} from "react";
import SwiperImages from "./SwiperImages";
import {Button, IconButton, Tooltip} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CardColors from "./CardColors";
import {fetchAdvice, homeSelector} from "../../redux/home/homeSlice"
import {useDispatch, useSelector} from "react-redux";

const Card = () => {
    const [isLiked, setIsLiked] = useState(false);
    const {adviceData, adviceStatus} = useSelector(homeSelector);
    const dispatch = useDispatch()

    return (
        <article className="card">
            <SwiperImages/>
            <p className="card__title">Гостиная модульная Lucido</p>
            <div className="card__desc-wrapper">
                <div className="card__price-wrapper">
                    <p>7 500 &#8381;</p>
                    <em>5 990 &#8381;</em>
                </div>
                <CardColors/>
                <div className="card__buttons-wrapper">
                    <Button style={{width: '100%'}} size="medium" variant="outlined">КУПИТЬ</Button>
                    <Tooltip title="Добавить в избранное" placement="top" arrow>
                        <IconButton color="error" onClick={() => setIsLiked(!isLiked)}>
                            { isLiked ? <FavoriteIcon/> : <FavoriteBorderIcon/> }
                        </IconButton>
                    </Tooltip>
                </div>
            </div>
        </article>
    )
}

export default Card;