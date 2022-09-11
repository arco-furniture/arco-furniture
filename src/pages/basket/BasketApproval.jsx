import BasketNavigation from './components/BasketNavigation';
import BasketItem from './components/BasketItem';
import styles from "../../scss/modules/basket/basket-approval.module.scss";
import { Button, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { productSelector } from '../../redux/product/productSlice';
import { basketSelector } from '../../redux/basket/basketSlice';
import { getPriceWithFormat } from "../../utils/getPriceWithFormat";

const BasketApproval = () => {
    const navigate = useNavigate();
    const { dataBasketItems, totalPrice } = useSelector(basketSelector);

    const handleNextStage = () => {
        navigate("/");
        const popup = document.getElementById('popup');
        popup.style.display = 'flex';
    }

    const handleGetPromo = (e) => {
        e.target.style.backgroundImage = 'none'
        e.target.style.backgroundColor = '#56B16A'
    }

    return (
        <div>
            <BasketNavigation bgcolor={{ 1: '#4675CE', 2: '#4675CE', 3: '#4675CE' }} />
            <div className={styles.approve}>
                <div className={styles.approve__container}>
                    {
                        dataBasketItems?.map((item) => (
                            <BasketItem
                                key={item.id}
                                item={item}
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                oldPrice={item.oldPrice}
                                image={item.image}
                                specs={item.specs}
                                color={item.color}
                                article={item.article}
                            />
                        ))
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
                        <button
                            onClick={(e) => { handleGetPromo(e) }}
                            className={styles.menu__btn}></button>
                    </div>
                    <TextField
                        sx={{ width: '340px', mr: '22px', }}
                        id="outlined-error"
                        label="Введите промокод"
                        placeholder="Иванов Иван Иванович"
                    />
                    <div className={styles.info__bottom}>
                        <p className={styles.info__text}>Итого к оплате</p>
                        <p className={styles.menu__title}>{getPriceWithFormat(totalPrice)} &#8381;</p>
                    </div>
                    <Button
                        sx={{
                            mt: '36px'
                        }}
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