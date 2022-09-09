import styles from "../../scss/modules/basket-popup.module.scss";
import img from '../../images/Artboard.svg';
import popLog from '../../images/poplog.svg';

const BasketPopUp = () => {

    const handleClosePopup = (e) => {
        if (e.target.className === 'basket-popup_popup__Pacj3 basket-popup_popup_none__3wDjO') {
            const popup = document.querySelector('.basket-popup_popup__Pacj3');
            popup.classList.remove('basket-popup_popup_none__3wDjO');
        }
    }
    return (
        <div className={styles.popup} onClick={(e) => { handleClosePopup(e) }}>
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
    )
}

export default BasketPopUp;