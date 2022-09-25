import React from "react"
import styles from "../../scss/modules/main.module.scss";
import {Routes, Route} from "react-router-dom";
import {Home, Product, Basket, BasketOrder, BasketApproval, Favorite, Category} from "../../pages/index"
import AlertBar from "../alertBar/AlertBar";
import AuthorsPopup from "../popups/AuthorsPopup";
import {ProtectedRoute} from "../index";
import {homeSelector} from "../../redux/home/homeSlice"
import {basketSelector} from "../../redux/basket/basketSlice";
import {useSelector} from "react-redux";

const Main: React.FC = () => {
    const {favoriteData} = useSelector(homeSelector);
    const {dataBasketItems} = useSelector(basketSelector);

    return (
        <main className={styles.main}>
            <div className={styles.content}>
                <div>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/arco-furniture" element={<Home/>}/>
                        <Route path="/category/:categoryName" element={<Category/>}/>
                        <Route path="/product/:productId" element={<Product/>}/>
                        <Route path="/favorite" element={
                            <ProtectedRoute existData={favoriteData.length}>
                                <Favorite/>
                            </ProtectedRoute>
                        }/>
                        <Route path="/basket" element={
                            <ProtectedRoute existData={dataBasketItems.length}>
                                <Basket/>
                            </ProtectedRoute>
                        }/>
                        <Route path="/basket/order" element={
                            <ProtectedRoute existData={dataBasketItems.length}>
                                <BasketOrder/>
                            </ProtectedRoute>
                        }/>
                        <Route path="/basket/order/approval" element={
                            <ProtectedRoute existData={dataBasketItems.length}>
                                <BasketApproval/>
                            </ProtectedRoute>
                        }/>
                    </Routes>
                </div>
            </div>
            <AlertBar/>
            <AuthorsPopup/>
        </main>
    )
}

export default Main;