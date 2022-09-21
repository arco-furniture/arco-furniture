import { Link } from "react-router-dom";
import styles from "../../../scss/modules/basket/basket-specifications.module.scss";

const BasketSpecifications = ({ item }) => {

    return (
        <div>
            <div className={styles.specifications__box}>
                <p className={styles.specifications__text}>{item.specsId}</p>
                <p className={styles.specifications__text}>{item.value}</p>
            </div>
        </div >
    )
}

export default BasketSpecifications;