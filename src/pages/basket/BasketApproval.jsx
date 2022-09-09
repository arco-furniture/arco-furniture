import BasketNavigation from './components/BasketNavigation';
import Card from './components/Card';
import styles from "../../scss/modules/basket-approval.module.scss";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { arraySelector } from '../../redux/basket/arrayOfCards';
import { useNavigate } from "react-router-dom";

const BasketApproval = () => {
    const { data } = useSelector(arraySelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleNextStage = () => {
        navigate("/");
        const popup = document.getElementById('popup');
        console.log(popup)
        popup.style.display = 'flex';
        // popup.classList.add('basket-popup_popup_none__3wDjO');
        console.log(popup)
    }

    return (
        <div>
            <BasketNavigation bgcolor={{ 1: '#4675CE', 2: '#4675CE', 3: '#4675CE' }} />
            <div className={styles.approve}>
                <div className={styles.approve__container}>
                    {
                        data ? (
                            data.map((item, index) => (
                                <Card
                                    key={index}
                                    name={item.name}
                                    price={item.price}
                                    benefit={item.benefit}
                                    articul={item.articul}
                                    img={item.img}
                                    id={item.id}
                                    count={item.count}
                                />
                            ))
                        ) :
                            null
                    }
                </div>
                <div className={styles.info}>
                    <div className={styles.info__box}>
                        <p className={styles.info__text}>Cпособ доставки</p>
                        <p className={styles.menu__title}>Самовывоз</p>
                    </div>
                    <div className={styles.info__box}>
                        <p className={styles.info__text}>Способ оплаты</p>
                        <div className={styles.menu__promo}>
                            <p className={styles.menu__subtitle}>Наличные</p>
                            <p className={styles.menu__title} style={{ color: '#4675CE' }}>Промокод</p>
                        </div>
                    </div>
                    <div className={styles.info__box}>
                        <p className={styles.info__text}>Сборка</p>
                        <p className={styles.menu__title}>Включена в итоговую стоимость</p>
                    </div>
                    <div className={styles.menu__line} />
                    <p>Промокод для оплаты заказа</p>
                    <div style={{ position: 'relative' }}>
                        <div className={styles.menu__place}>ACRO10</div>
                        <button className={styles.menu__btn}></button>
                    </div>
                    <TextField sx={{
                        width: '340px',
                        mr: '22px',
                    }}
                        id="outlined-error"
                        label="Введите промокод"
                        placeholder="Иванов Иван Иванович"
                    />
                    <div className={styles.info__bottom}>
                        <p className={styles.info__text}>Итого к оплате</p>
                        <p className={styles.menu__title}>22 600 руб.</p>
                    </div>
                    <Button
                        className={styles.menu__button}
                        variant="contained"
                        onClick={handleNextStage}>
                        Оплатить заказ
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default BasketApproval;