import { TextField } from "@mui/material";
import styles from "../../../scss/modules/basket/basket-form.module.scss";

const inputStyle = {
    width: '340px'
};

const Form: React.FC = () => {
const inputs = document.querySelectorAll('TextField');
console.log(inputs)
    return (
        <div className={styles.form}>
            <p className={styles.form__title}>
                Оформление заказа
            </p>
            <div className={styles.form__box}>
                <TextField
                 sx={{
                    ...inputStyle,
                    mr: '22px'
                }}
                    id="outlined-error"
                    label="ФИО*"
                    placeholder="Иванов Иван Иванович"
                />
                <TextField sx={{
                    ...inputStyle
                }}
                    id="outlined-error"
                    label="Город*"
                    placeholder="Краснодар"
                />
            </div>
            <div className={styles.form__box}>
                <TextField sx={{
                    ...inputStyle,
                    mr: '22px',
                    mt: '75px',
                }}
                    id="outlined-error"
                    label="Телефон*"
                    placeholder="+7 (000) 000 00 00"
                />
                <TextField sx={{
                    ...inputStyle,
                    mt: '75px'
                }}
                    id="outlined-error"
                    label="Адрес*"
                    placeholder="+7 (000) 000 00 00"
                />
            </div>
        </div >
    )
}

export default Form;