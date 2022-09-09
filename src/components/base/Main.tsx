import React from "react"
import styles from "../../scss/modules/main.module.scss";
import { Routes, Route } from "react-router-dom";
import { Home, Product, Basket, BasketOrder, BasketApproval } from "../../pages/index"
import AlertFavorite from "../alertFavorite/AlertFavorite";

const Main: React.FC = () => {
    return (
        <main className={styles.main}>
            <div className={styles.content}>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/product/:productId" element={<Product />} />
                        <Route path="/basket" element={<Basket />} />
                        <Route path="/basket/order" element={<BasketOrder />} />
                        <Route path="/basket/order/approval" element={<BasketApproval />} />
                    </Routes>
                </div>
            </div>
            <AlertFavorite/>
        </main>
    )
}

export default Main;