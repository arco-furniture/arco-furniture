import { Switch, Button } from "@mui/material";
import Form from './components/Form';
import { useNavigate } from "react-router-dom";
import BasketNavigation from './components/BasketNavigation';
import styles from "../../scss/modules/basket-order.module.scss";
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { basketSelector } from '../../redux/basket/basketSlice';
import { useDispatch, useSelector } from "react-redux";


const BasketOrder = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [dataInfo, setDataInfo] = useState(""); // информация с формы(доставка, способ оплаты, согласие)
    const { sumOfItems } = useSelector(basketSelector);


    const handleNextStage = () => {
        console.log(dataInfo, 'dataInfo')
        navigate("/basket/order/approval")
    }


    return (
        <div>
            <BasketNavigation bgcolor={{ 1: '#4675CE', 2: '#4675CE', 3: 'rgba(65, 65, 65, 0.2)' }} />
            <form onSubmit={handleSubmit((data) => setDataInfo(JSON.stringify(data)))}>
                <div style={{ display: 'flex' }}>
                    <Form register={register}/>
                    <div className={styles.info}>
                        <div className={styles.info__box}>
                            <p className={styles.info__text}>Стоимость без скидки</p>
                            <p className={styles.info__text}>24 900 руб.</p>
                        </div>
                        <div className={styles.info__box}>
                            <p className={styles.info__text}>Экономия</p>
                            <p className={styles.info__text}>87 900 руб.</p>
                        </div>
                        <div className={styles.info__box}>
                            <p className={styles.info__text}>Итого к оплате</p>
                            <p className={styles.info__text}>{sumOfItems} руб.</p>
                        </div>
                        <div className={styles.info__line} />
                        <div className={styles.info__bottom}>
                            <p>
                                Сборка 2 193 ₽
                            </p>
                            <Switch {...register("Switch")} defaultChecked />
                        </div>
                        <Button
                            type="submit"
                            className={styles.info__button}
                            variant="contained"
                            onClick={handleNextStage}
                        >Продолжить
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default BasketOrder;