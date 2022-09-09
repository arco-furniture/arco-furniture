import SwiperImages from "./SwiperImages";
import {Button, IconButton} from "@mui/material";
import CardColors from "./CardColors";
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import {useState} from "react";
import CardMark from "./CardMark";
import CardTooltip from "./CardTooltip";

const Card = ({title, price, oldPrice, colors, images, mark}) => {
    const [visible, setVisible] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    return (
        <article
            className="card"
            onMouseEnter={()=>setVisible(true)}
            onMouseLeave={()=>setVisible(false)}
        >
            <CardMark mark={mark}/>
            {/* <SwiperImages images={images} visible={visible}/> */}
            <p className="card__title">{title}</p>
            <div className="card__desc-wrapper">
                <div className="card__price-wrapper">
                    <p>{oldPrice} &#8381;</p>
                    <em>{price} &#8381;</em>
                </div>
                <CardColors colorPalette={colors} visible={visible}/>
                <div className="card__buttons-wrapper">
                    <Button style={{width: '100%'}} size="medium" variant="outlined">купить</Button>
                    <CardTooltip>
                        <IconButton color="error" onClick={() => setIsLiked(!isLiked)}>
                            {isLiked ? <Favorite/> : <FavoriteBorder/> }
                        </IconButton>
                    </CardTooltip>
                </div>
            </div>
        </article>
    )
}

export default Card;