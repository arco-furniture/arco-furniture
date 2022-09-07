import BasketNavigation from './components/BasketNavigation';
import Card from './components/Card';
import styles from "../../scss/modules/basket-approval.module.scss";
import { Button, TextField } from "@mui/material";

const BasketApproval = () => {

    return (
        <div>
            <BasketNavigation bgcolor={{ 1: '#4675CE', 2: '#4675CE', 3: '#4675CE' }} />
            <div className={styles.approve}>
                <div className={styles.approve__container}>
                    <><Card /><Card /></>
                </div>
                <div className={styles.info}>
                    <div className={styles.info__box}>
                        <p className={styles.info__text}>Cпособ доставки</p>
                        <p className={styles.menu__title}>Самовывоз</p>
                    </div>
                    <div className={styles.info__box}>
                        <p className={styles.info__text}>Способ оплаты</p>
                        <p className={styles.menu__title}>Промокод</p>
                    </div>
                    <div className={styles.info__box}>
                        <p className={styles.info__text}>Сборка</p>
                        <p className={styles.menu__title}>включена в итоговую стоимость</p>
                    </div>
                    <div className={styles.menu__line} />
                    <TextField sx={{
                        width: '340px',
                        mr: '22px'
                    }}
                        id="outlined-error"
                        label="ФИО*"
                        placeholder="Иванов Иван Иванович"
                    />
                    <div className={styles.info__box}>
                        <p className={styles.info__text}>Итого к оплате</p>
                        <p className={styles.info__text}>22 600 руб.</p>
                    </div>
                    <Button
                        className={styles.menu__button}
                        variant="contained">
                        Оплатить заказ
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default BasketApproval;