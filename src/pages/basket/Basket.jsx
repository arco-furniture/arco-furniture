import {RadioGroup, FormControlLabel, Radio, Checkbox, Button} from "@mui/material";
import BasketNavigation from './components/BasketNavigation';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import styles from "../../scss/modules/basket/basket.module.scss";
import {basketSelector} from '../../redux/basket/basketSlice';
import {useForm} from "react-hook-form";
import {useState} from 'react';
import {getPriceWithFormat} from "../../utils/getPriceWithFormat";
import BasketStepper from "./components/BasketStepper";
import BasketItem from "./components/BasketItem";

const Basket = () => {
    const navigate = useNavigate();
    const {dataBasketItems, totalPrice} = useSelector(basketSelector);
    // const {status} = useSelector(statusSelector);
    const {register, handleSubmit} = useForm();
    const [dataInfo, setDataInfo] = useState(""); // информация с формы(доставка, способ оплаты, согласие)
    const dispatch = useDispatch();

    // const handleNextStage = () => {
    //     dispatch(positive(dataInfo));
    //     navigate("/basket/order");
    // }

    // const handleChangeStatus = (e) => {
    //     if (e.target.checked === true) {
    //         dispatch(positive());
    //     } else {
    //         dispatch(negative());
    //     }
    // }

    // у тебя не идет подсчет суммы, пока не создаться сам компонент Basket.
    // useEffect будет вызываться при каждом заходе в корзину, каждый раз изменяя сумму.

    // Экшены корзины нужны только на onClick'и без useEffect'ов

    // useEffect(() => {
    //     console.log(dataBasketItems, 'dataBasketItems')
    //     if (dataBasketItems.length > 0) {
    //         dispatch(getPriceItem(dataBasketItems))
    //     }
    // }, [dataBasketItems, dispatch])

    return (
        <div>
            {/* это прогрессБар из коробки mui, если хочешь, можешь настроить его вместо своей навигации */}
            {/*<BasketStepper/>*/}
            <BasketNavigation bgcolor={{1: '#4675CE', 2: 'rgba(65, 65, 65, 0.2)', 3: 'rgba(65, 65, 65, 0.2)'}}/>
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
                    <form onSubmit={handleSubmit((data) => setDataInfo(JSON.stringify(data)))}>
                        <p className={styles.menu__title}>Выберите способ доставки</p>
                        <div className={styles.menu__box}>
                            <RadioGroup
                                row
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="Самовывоз"
                                name="radio-buttons-group"
                            >
                                <FormControlLabel
                                    {...register("delivery")}
                                    value="Самовывоз"
                                    control={<Radio/>}
                                    label="Самовывоз"
                                />
                                <FormControlLabel
                                    {...register("delivery")}
                                    value="Доставка"
                                    control={<Radio/>}
                                    label="Доставка"
                                />
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
                                <FormControlLabel
                                    {...register("payment")}
                                    value="cash"
                                    control={<Radio/>}
                                    label="Наличные"
                                />
                                <FormControlLabel
                                    {...register("payment")}
                                    value="card"
                                    control={<Radio/>}
                                    label="Оплата картой"
                                />
                            </RadioGroup>
                        </div>
                        <div className={styles.menu__line}/>
                        <div className={styles.menu__price}>
                            <p className={styles.menu__title}>Итого:</p>
                            <p className={styles.menu__title}>{getPriceWithFormat(totalPrice)} &#8381;</p>
                        </div>
                        <p className={styles.menu__text}>Стоимость указана без учета доставки</p>
                        <div className={styles.menu__line}/>
                        <div style={{display: 'flex', alignItems: 'start'}}>
                            <Checkbox
                                {...register("checkBox")}
                                id="checkBox"
                                // onChange={(e) => handleChangeStatus(e)}
                            />
                            <p className={styles.menu__text} style={{width: '327px'}}>Я подтверждаю, что я ознакомлен и
                                согласен с условиями политики обработки персональных данных.</p>
                        </div>
                        <Button
                            type="submit"
                            className={styles.menu__button}
                            variant="contained"
                            // onClick={handleNextStage}
                        >
                            Продолжить
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Basket;

