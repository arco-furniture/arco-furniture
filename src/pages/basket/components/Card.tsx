import React from "react"
import img from '../../../images/card-img.svg';
import { Checkbox } from "@mui/material";
import styles from "../../../scss/modules/basket-card.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { arraySelector } from '../../../redux/basket/arrayOfCards';


const Card: React.FC = (card: any) => {
    const { data } = useSelector(arraySelector);

    const handleRemoveCard = (card: any) => {
        console.log(data, 'card') //будем удалять
    }

    return (
        <div className={styles.card}>
            <img src={card.img} alt='img' style={{ width: '188px' }} />
            <div className={styles.card__container}>
                <div>
                    <div className={styles.card__box}>
                        <Checkbox defaultChecked />
                        <p className={styles.card__title}>{card.name}</p>
                    </div>
                    <div className={styles.card__box} style={{ marginTop: '37px' }}>
                        <p className={styles.card__text}>Цвет:</p>
                        <div className={styles.card__color} />
                    </div>
                    <p className={styles.card__text}>Характеристики товара</p>
                </div>

                <div className={styles.card__count}>
                    <button className={styles.card__minus}>
                        <div className={styles.card__line}></div>
                    </button>
                    {card.count}
                    <button className={styles.card__pluse} onClick={() => { console.log('222') }}>
                        <div className={styles.card__line}></div>
                        <div className={styles.card__line_vertical}></div>
                    </button>
                </div>

                <div>
                    <div className={styles.card__box}>
                        <p className={styles.card__price}>{card.price} руб.</p>
                        <p className={styles.card__new}>{card.price} руб.</p>
                    </div>
                    <p className={styles.card__prof}>выгода {card.benefit} ₽</p>
                    <div className={styles.card__box}>
                        <p className={styles.card__artical}>Артикул: {card.articul}</p>
                        <button onClick={(e) => {handleRemoveCard(card)}} className={styles.card__remove}></button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Card;