import { RadioGroup, FormControlLabel, Radio, Checkbox, Button } from "@mui/material";
import BasketNavigation from './components/BasketNavigation';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../scss/modules/basket/basket.module.scss";
import { basketSelector } from '../../redux/basket/basketSlice';
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from 'react';
import { getPriceWithFormat } from "../../utils/getPriceWithFormat";
import BasketStepper from "./components/BasketStepper";
import BasketItem from "./components/BasketItem";
import { changeBasketBtnStatus } from "../../redux/basket/basketSlice";
import { getBuyInfo } from "../../redux/basket/basketSlice";

const Basket = () => {
    const navigate = useNavigate();
    const { dataBasketItems, totalPrice, basketBtnStatus } = useSelector(basketSelector);
    const { register, handleSubmit } = useForm();
    const [dataInfo, setDataInfo] = useState(""); // информация с формы(доставка, способ оплаты, согласие)
    const dispatch = useDispatch();

    const [values, setValues] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [isValid, setIsValid] = React.useState(false);

    const handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        setValues({ ...values, [name]: value });
        setErrors({ ...errors, [name]: target.validationMessage });
        setIsValid(target.closest("form").checkValidity());
    };

    const handleSubmitForm = (e) => {
        e.preventDefault();
        navigate("/basket/order");
    }

    const handleChangeStatus = (e) => {
        dispatch(changeBasketBtnStatus(e.target.checked))
    }

    return (
        <div>
            {/*<BasketStepper/>*/}
            <BasketNavigation bgcolor={{ 1: '#4675CE', 2: 'rgba(65, 65, 65, 0.2)', 3: 'rgba(65, 65, 65, 0.2)' }} />
            <div className={styles.basket}>
                <div className={styles.basket__container}>
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
                        )
                        )
                    }
                </div>
                <div className={styles.menu}>
                    <form onSubmit={handleSubmitForm}>
                        <p className={styles.menu__title}>Выберите способ доставки</p>
                        <div className={styles.menu__box}>
                            <RadioGroup
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel
                                    {...register("delivery")}
                                    value="Самовывоз"
                                    control={<Radio />}
                                    label="Самовывоз"
                                    onChange={handleChange}
                                />
                                <FormControlLabel
                                    {...register("delivery")}
                                    value="Доставка"
                                    control={<Radio />}
                                    label="Доставка"
                                    onChange={handleChange}
                                />
                            </RadioGroup>
                        </div>
                        <p className={styles.menu__title}>Выберите способ оплаты</p>
                        <div className={styles.menu__box}>
                            <RadioGroup
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel
                                    {...register("payment")}
                                    value="cash"
                                    control={<Radio />}
                                    label="Наличные"
                                    onChange={handleChange}
                                />
                                <FormControlLabel
                                    {...register("payment")}
                                    value="card"
                                    control={<Radio />}
                                    label="Оплата картой"
                                    onChange={handleChange}
                                />
                            </RadioGroup>
                        </div>
                        <div className={styles.menu__line} />
                        <div className={styles.menu__price}>
                            <p className={styles.menu__title}>Итого:</p>
                            <p className={styles.menu__title}>{getPriceWithFormat(totalPrice)} &#8381;</p>
                        </div>
                        <p className={styles.menu__text}>Стоимость указана без учета доставки</p>
                        <div className={styles.menu__line} />
                        <div style={{ display: 'flex', alignItems: 'start' }}>
                            <Checkbox
                                {...register("checkBox")}
                                id="checkBox"
                                onChange={(e) => handleChangeStatus(e)}
                            />
                            <p className={styles.menu__text} style={{ width: '327px' }}>Я подтверждаю, что я ознакомлен и
                                согласен с условиями политики обработки персональных данных.</p>
                        </div>
                        <Button
                            disabled={dataBasketItems.length > 0 && Object.values(values).length > 1 && totalPrice !== 0 && basketBtnStatus == false ? false : true}
                            type="submit"
                            className={styles.menu__button}
                            variant="contained">
                            Продолжить
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Basket;

