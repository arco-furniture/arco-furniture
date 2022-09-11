import styles from "../../scss/modules/basket-popup.module.scss";
import img from '../../images/Artboard.svg';
import popLog from '../../images/poplog.svg';

const BasketPopup = () => {

    const handleClosePopup = (e) => {
        if (e.target.id === 'popup') {
            const popup = document.getElementById('popup');
            popup.style.display = 'none';
        }
    }
    return (
        <div id='popup' className={styles.popup} onClick={(e) => { handleClosePopup(e) }}>
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

export default BasketPopup;