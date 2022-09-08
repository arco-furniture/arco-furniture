import React from "react"
import img from '../../../images/card-img.svg';
import { Checkbox } from "@mui/material";
import styles from "../../../scss/modules/basket-card.module.scss";


const Card: React.FC = () => {


    return (
        <div className={styles.card}>
            <img src={img} alt='img' style={{ width: '188px' }} />
            <div className={styles.card__container}>
                <div>
                    <div className={styles.card__box}>
                        <Checkbox defaultChecked />
                        <p className={styles.card__title}>Модульная кухня Лондон</p>
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
                    {}
                    <button className={styles.card__pluse} onClick={() => { console.log('222') }}>
                        <div className={styles.card__line}></div>
                        <div className={styles.card__line_vertical}></div>
                    </button>
                </div>

                <div>
                    <div className={styles.card__box}>
                        <p className={styles.card__price}>5 017 руб.</p>
                        <p className={styles.card__new}>5 017 руб.</p>
                    </div>
                    <p className={styles.card__prof}>выгода 1 100 ₽</p>
                    <div className={styles.card__box}>
                        <p className={styles.card__artical}>Артикул: 4874678</p>
                        <button className={styles.card__remove}></button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Card;