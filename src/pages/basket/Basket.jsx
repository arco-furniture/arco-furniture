import { RadioGroup, FormControlLabel, Radio, Checkbox, Button } from "@mui/material";
import Card from './components/Card';
import BasketNavigation from './components/BasketNavigation';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../scss/modules/basket.module.scss";
import { arraySelector } from '../../redux/basket/arrayOfCards';
import { productSelector } from '../../redux/product/productSlice';
import { statusSelector } from '../../redux/basket/btnStatus';
import { basketSelector } from '../../redux/basket/basketSlice';
import { formDataSelector } from '../../redux/basket/basketFormInfo';
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';
import { positive } from "../../redux/basket/btnStatus";
import { negative } from "../../redux/basket/btnStatus";
import { getPriceItem } from "../../redux/basket/basketSlice";
import { isTemplateMiddle } from "typescript";

const Basket = () => {
    const navigate = useNavigate();
    const { dataBasketItems } = useSelector(productSelector);
    const { status } = useSelector(statusSelector);
    const { sumOfItems } = useSelector(basketSelector);
    const { register, handleSubmit } = useForm();
    const [dataInfo, setDataInfo] = useState(""); // информация с формы(доставка, способ оплаты, согласие)
    const dispatch = useDispatch();

    const handleNextStage = () => {
        dispatch(positive(dataInfo));
        navigate("/basket/order");
    }

    const handleChangeStatus = (e) => {
        if (e.target.checked === true) {
            dispatch(positive());
        } else {
            dispatch(negative());
        }
    }

    useEffect(() => {
        console.log(dataBasketItems,'dataBasketItems')
        if (dataBasketItems.length > 0) {
            dispatch(getPriceItem(dataBasketItems))
        }
    }, [dataBasketItems, dispatch])

    useEffect(() => {
        console.log(sumOfItems, '[[[[[')
    }, [sumOfItems])

    return (
        <div>
            <BasketNavigation bgcolor={{ 1: '#4675CE', 2: 'rgba(65, 65, 65, 0.2)', 3: 'rgba(65, 65, 65, 0.2)' }} />
            <div className={styles.basket}>
                <div className={styles.basket__container}>
                    {
                        dataBasketItems ? (
                            dataBasketItems.map((item, index) => (
                                <Card
                                    key={index}
                                    item={item}
                                    id={item.id}
                                    title={item.title}
                                    price={item.price}
                                    oldPrice={item.oldPrice}
                                    image={item.image}
                                    specs={item.specs}
                                    color={item.color}
                                    article={item.article}
                                    count={1}
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
                            <p className={styles.menu__title}>{sumOfItems} руб.</p>
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

