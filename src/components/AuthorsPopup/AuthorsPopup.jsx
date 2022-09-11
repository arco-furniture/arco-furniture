import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import {otherSelector, closeAuthorsPopup} from "../../redux/other/otherSlice";
import {useDispatch, useSelector} from "react-redux";
import styles from "../../scss/modules/authorsPopup.module.scss";
import img from "../../images/Artboard.svg";
import popLog from "../../images/poplog.svg";

const AuthorsPopup = () => {
    const {statusAuthorsPopup} = useSelector(otherSelector)
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(closeAuthorsPopup())
    };

    return (
        <Dialog
            open={statusAuthorsPopup}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <div id='popup' className={styles.popup}>
                <div className={styles.popup__container}>
                    <h2 className={styles.popup__title}>Поздравляем!</h2>
                    <p className={styles.popup__subtitle}>Вы успешно оплатили заказ!</p>
                    <img className={styles.popup__img} src={img} alt='amage' />
                    <p className={styles.popup__text}>Над проектом работали</p>
                    <div className={styles.popup__bottom}>
                        <div className={styles.popup__box}>
                            <img className={styles.popup__logo} src={popLog} alt='logo' />
                            <p className={styles.popup__name}>Иван Иванович</p>
                        </div>
                        <div className={styles.popup__box}>
                            <img className={styles.popup__logo} src={popLog} alt='logo' />
                            <p className={styles.popup__name}>Иван Иванович</p>
                        </div>
                        <div className={styles.popup__box}>
                            <img className={styles.popup__logo} src={popLog} alt='logo' />
                            <p className={styles.popup__name}>Иван Иванович</p>
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>
    );
}

export default AuthorsPopup;