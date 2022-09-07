import { RadioGroup, FormControlLabel, Radio, Checkbox, Button } from "@mui/material";
import Card from './components/Card';
import BasketNavigation from './components/BasketNavigation';
import { useNavigate } from "react-router-dom";
import styles from "../../scss/modules/basket.module.scss";

const Basket = () => {
    const navigate = useNavigate();

    const handleNextStage = () => {
        navigate("/basket-order")
    }

    return (
        <div>
            <BasketNavigation bgcolor={{ 1: '#4675CE', 2: 'rgba(65, 65, 65, 0.2)', 3: 'rgba(65, 65, 65, 0.2)' }} />
            <div className={styles.basket}>
                <div className={styles.basket__container}>
                    <><Card /><Card /></>
                </div>
                <div className={styles.menu}>
                    <p className={styles.menu__title}>Выберите способ доставки</p>
                    <div className={styles.menu__box}>
                        <RadioGroup
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="same"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="same" control={<Radio />} label="Самовывоз" />
                            <FormControlLabel value="delivery" control={<Radio />} label="Доставка" />
                        </RadioGroup>
                    </div>
                    <p className={styles.menu__title}>Выберите способ оплаты</p>
                    <div className={styles.menu__box}>
                        <RadioGroup
                            row
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="cash"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel value="cash" control={<Radio />} label="Наличные" />
                            <FormControlLabel value="card" control={<Radio />} label="Оплата картой" />
                        </RadioGroup>
                    </div>
                    <div className={styles.menu__line} />
                    <div className={styles.menu__price}>
                        <p className={styles.menu__title}>Итого:</p>
                        <p className={styles.menu__title}>22 600 руб.</p>
                    </div>
                    <p className={styles.menu__text}>Стоимость указана без учета доставки</p>
                    <div className={styles.menu__line} />
                    <div style={{ display: 'flex', alignItems: 'start' }}>
                        <Checkbox id="checkBox" />
                        <p className={styles.menu__text} style={{ width: '327px' }}>Я подтверждаю, что я ознакомлен и согласен с условиями политики обработки персональных данных.</p>
                    </div>
                    <Button
                        className={styles.menu__button}
                        variant="contained"
                        onClick={handleNextStage}>
                        Продолжить
                    </Button>
                </div>
            </div>
        </div >
    )
}

export default Basket;