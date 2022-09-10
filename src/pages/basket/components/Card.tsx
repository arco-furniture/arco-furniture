import React from "react"
import img from '../../../images/card-img.svg';
import { Checkbox } from "@mui/material";
import styles from "../../../scss/modules/basket-card.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { arraySelector } from '../../../redux/basket/arrayOfCards';
import { removeItemForCart } from "../../../redux/product/productSlice";


const Card: React.FC = (card: any) => {
    const dispatch = useDispatch();

    const handleRemoveCard = (card: any) => {
        dispatch(removeItemForCart(card.id));
    }

    const handleChangeCount = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(e.currentTarget.id)
        if (e.currentTarget.id === 'more') {
            const coutNumber: any = document.getElementById('count');
            coutNumber.textContent = Number(coutNumber.textContent) + 1
            // console.log(coutNumber.textContent)
            // card.count += 1
        } else {
            // card.count -= 1
        }
    }

    return (
        <div className={styles.card}>
            <img src={card.image} alt='img' style={{ width: '188px' }} />
            <div className={styles.card__container}>
                <div>
                    <div className={styles.card__box}>
                        <Checkbox defaultChecked />
                        <p className={styles.card__title}>{card.title}</p>
                    </div>
                    <div className={styles.card__box} style={{ marginTop: '37px' }}>
                        <p className={styles.card__text}>Цвет:</p>
                        <div className={styles.card__color} />
                    </div>
                    <p className={styles.card__text}>Характеристики товара</p>
                </div>

                <div id="count" className={styles.card__count}>
                    <button id='less' onClick={(e) => { handleChangeCount(e) }} className={styles.card__minus}>
                        <div className={styles.card__line}></div>
                    </button>
                    {card.count}
                    <button id='more' className={styles.card__pluse} onClick={(e) => { handleChangeCount(e) }}>
                        <div className={styles.card__line}></div>
                        <div className={styles.card__line_vertical}></div>
                    </button>
                </div>

                <div>
                    <div className={styles.card__box}>
                        <p className={styles.card__price}>{card.oldPrice} руб.</p>
                        <p className={styles.card__new}>{card.price} руб.</p>
                    </div>
                    <p className={styles.card__prof}>выгода {card.oldPrice - card.price} ₽</p>
                    <div className={styles.card__box}>
                        <p className={styles.card__artical}>Артикул: {card.article}</p>
                        <button onClick={(e) => { handleRemoveCard(card) }} className={styles.card__remove}></button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Card;