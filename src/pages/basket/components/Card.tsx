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
                    1
                </div>

                <div>
                    <div className={styles.card__box}>
                        <p className={styles.card__price}>5 017 руб.</p>
                        <p className={styles.card__new}>5 017 руб.</p>
                    </div>
                    <p className={styles.card__prof}>выгода 1 100 ₽</p>
                    <div>
                        <p style={{ marginTop: '42.1px' }}>Артикул: 4874678</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Card;