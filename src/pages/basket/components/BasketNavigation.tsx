import { Link } from "react-router-dom";
import styles from "../../../scss/modules/basket/basket-navigation.module.scss";

const BasketNavigation = (bgcolor: any) => {

    return (
        <div className={styles.navigation}>
            <div className={styles.navigation__container}>
                <p className="title">
                    Корзина
                </p>
                <div className={styles.navigation__wrapper}>
                    <Link style={{ textDecoration: 'none' }} to='/basket'>
                        <div className={styles.navigation__circle} style={{ backgroundColor: `${bgcolor.bgcolor[1]}` }}>
                            1
                        </div>
                    </Link>
                    <p style={{ marginLeft: '10px', fontSize: '16px' }}>
                        Ваша корзина
                    </p>
                    <div className={styles.navigation__line} />
                    <Link style={{ textDecoration: 'none' }} to='/basket/order/'>
                        <div className={styles.navigation__circle} style={{ backgroundColor: `${bgcolor.bgcolor[2]}` }}>
                            2
                        </div>
                    </Link>
                    <p style={{ marginLeft: '10px', fontSize: '16px' }}>
                        Оформление заказа
                    </p>
                    <div className={styles.navigation__line} />
                    <Link style={{ textDecoration: 'none' }} to='/basket/order/approval'>
                        <div className={styles.navigation__circle} style={{ backgroundColor: `${bgcolor.bgcolor[3]}` }}>
                            3
                        </div>
                    </Link>
                    <p style={{ marginLeft: '10px', fontSize: '16px' }}>
                        Подтверждение
                    </p>
                </div>
            </div>
        </div >
    )
}

export default BasketNavigation;