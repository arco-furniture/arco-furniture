import { RadioGroup, FormControlLabel, Radio, Checkbox, Button } from "@mui/material";
import Card from './components/Card';
import BasketNavigation from './components/BasketNavigation';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../scss/modules/basket.module.scss";
import { arraySelector } from '../../redux/basket/arrayOfCards';
import { statusSelector } from '../../redux/basket/btnStatus';
import { formDataSelector } from '../../redux/basket/basketFormInfo';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { positive } from "../../redux/basket/btnStatus";
import { negative } from "../../redux/basket/btnStatus";

const Basket = () => {
    const navigate = useNavigate();
    const { data } = useSelector(arraySelector);
    const { status } = useSelector(statusSelector);
    const { formData } = useSelector(formDataSelector); 
    const { register, handleSubmit } = useForm();
    const [dataInfo, setDataInfo] = useState(""); // информация с формы(доставка, способ оплаты, согласие)
    const dispatch = useDispatch();

    const handleNextStage = () => {
        dispatch(positive(dataInfo));
        navigate("/basket-order");
    }

    const handleChangeStatus = (e) => {
        if (e.target.checked === true) {
            dispatch(positive());
        } else {
            dispatch(negative());
        }
    }

    return (
        <div>
            <BasketNavigation bgcolor={{ 1: '#4675CE', 2: 'rgba(65, 65, 65, 0.2)', 3: 'rgba(65, 65, 65, 0.2)' }} />
            <div className={styles.basket}>
                <div className={styles.basket__container}>
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
                <div className={styles.menu}>
                    <form onSubmit={handleSubmit((data) => setDataInfo(JSON.stringify(data)))}>
                        <p className={styles.menu__title}>Выберите способ доставки</p>
                        <div className={styles.menu__box}>
                            <RadioGroup
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="Самовывоз"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel {...register("delivery")} value="Самовывоз" control={<Radio />} label="Самовывоз" />
                                <FormControlLabel {...register("delivery")} value="Доставка" control={<Radio />} label="Доставка" />
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
                                <FormControlLabel {...register("payment")} value="cash" control={<Radio />} label="Наличные" />
                                <FormControlLabel {...register("payment")} value="card" control={<Radio />} label="Оплата картой" />
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
                            <Checkbox {...register("checkBox")} id="checkBox" onChange={(e) => { handleChangeStatus(e) }} />
                            <p className={styles.menu__text} style={{ width: '327px' }}>Я подтверждаю, что я ознакомлен и согласен с условиями политики обработки персональных данных.</p>
                        </div>
                        <Button
                            disabled={status}
                            type="submit"
                            className={styles.menu__button}
                            variant="contained"
                            onClick={handleNextStage}>
                            Продолжить
                        </Button>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Basket;

