import { Switch, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BasketNavigation from './components/BasketNavigation';
import styles from "../../scss/modules/basket/basket-order.module.scss";
import stylesForm from "../../scss/modules/basket/basket-form.module.scss";
import { useForm } from "react-hook-form";
import React, { useEffect, useState } from 'react';
import { basketSelector } from '../../redux/basket/basketSlice';
import { useDispatch, useSelector } from "react-redux";
import { getPriceWithFormat } from "../../utils/getPriceWithFormat";
import { TextField } from "@mui/material";

const inputStyle = {
    width: '340px'
};

const BasketOrder = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const { totalPrice, totalOldPrice, totalBenefit, basketOrderBtnStatus, dataBuyInfo } = useSelector(basketSelector);

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

    useEffect(() => {
        console.log(errors, 'values')
    }, [errors])

    const handleSubmitForm = (e) => {
        e.preventDefault();
        console.log(values)
        navigate("/basket/order/approval")
    }

    return (
        <div>
            <BasketNavigation bgcolor={{ 1: '#4675CE', 2: '#4675CE', 3: 'rgba(65, 65, 65, 0.2)' }} />
            <form onSubmit={handleSubmitForm}>
                <div style={{ display: 'flex' }}>
                    <div className={stylesForm.form}>
                        <p className={stylesForm.form__title}>
                            Оформление заказа
                        </p>
                        <div className={stylesForm.form__box}>
                            <TextField
                                sx={{
                                    ...inputStyle,
                                    mr: '22px'
                                }}
                                {...register("fcs")}
                                id="outlined-error"
                                label="ФИО*"
                                placeholder="Иванов Иван Иванович"
                                onChange={handleChange}
                            />
                            <TextField sx={{
                                ...inputStyle
                            }}
                                {...register("city")}
                                id="outlined-error"
                                label="Город*"
                                placeholder="Краснодар"
                                onChange={handleChange}
                            />
                        </div>
                        <div className={stylesForm.form__box}>
                            <TextField
                                sx={{
                                    ...inputStyle,
                                    mr: '22px',
                                    mt: '75px',
                                }}
                                {...register("phone")}
                                id="outlined-error"
                                label="Телефон*"
                                placeholder="+7 (000) 000 00 00"
                                onChange={handleChange}
                            />
                            <TextField sx={{
                                ...inputStyle,
                                mt: '75px'
                            }}
                                {...register("adress")}
                                id="outlined-error"
                                label="Адрес*"
                                placeholder="+7 (000) 000 00 00"
                                onChange={handleChange}
                            />
                        </div>
                    </div >
                    <div className={styles.info}>
                        <div className={styles.info__box}>
                            <p className={styles.info__text}>Стоимость без скидки</p>
                            <p className={styles.info__text}>{getPriceWithFormat(totalOldPrice)} &#8381;</p>
                        </div>
                        <div className={styles.info__box}>
                            <p className={styles.info__text}>Экономия</p>
                            <p className={styles.info__text}>{getPriceWithFormat(totalBenefit)} &#8381;</p>
                        </div>
                        <div className={styles.info__box}>
                            <p className={styles.info__text}>Итого к оплате</p>
                            <p className={styles.info__text}>{getPriceWithFormat(totalPrice)} &#8381;</p>
                        </div>
                        <div className={styles.info__line} />
                        <div className={styles.info__bottom}>
                            <p>
                                Сборка {getPriceWithFormat(2193)} &#8381;
                            </p>
                            <Switch {...register("Switch")} defaultChecked />
                        </div>
                        <Button
                            // disabled={basketOrderBtnStatus}
                            type="submit"
                            className={styles.info__button}
                            variant="contained"
                        >Продолжить
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default BasketOrder;