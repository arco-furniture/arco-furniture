import React from "react"
import { arraySelector } from '../../../redux/basket/arrayOfCards';
import { useDispatch, useSelector } from "react-redux";
import styles from "../../../scss/modules/basket-navigation.module.scss";

const BasketNavigation = (bgcolor: any) => {

    const handleAddCard = () => {
        console.log('222')
    }

    return (
        <div className={styles.navigation}>
            <div className={styles.navigation__container}>
                <p className={styles.navigation__title}>
                    Корзина
                </p>
                <button onClick={handleAddCard}>+</button>
                <div className={styles.navigation__circle} style={{ backgroundColor: `${bgcolor.bgcolor[1]}` }}>
                    1
                </div>
                <p style={{ marginLeft: '7px' }}>
                    Ваша корзина
                </p>
                <div className={styles.navigation__line} />
                <div className={styles.navigation__circle} style={{ backgroundColor: `${bgcolor.bgcolor[2]}` }}>
                    2
                </div>
                <p style={{ marginLeft: '7px' }}>
                    Оформление заказа
                </p>
                <div className={styles.navigation__line} />
                <div className={styles.navigation__circle} style={{ backgroundColor: `${bgcolor.bgcolor[3]}` }}>
                    3
                </div>
                <p style={{ marginLeft: '7px' }}>
                    Подтверждение
                </p>
            </div>
        </div >
    )
}

export default BasketNavigation;