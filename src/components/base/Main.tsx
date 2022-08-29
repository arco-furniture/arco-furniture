import React from "react"
import styles from "../../scss/modules/main.module.scss";
import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/index"
import { Basket } from "../../pages/index"

const Main: React.FC = () => {
    return (
        <main className={styles.main}>
            <div className={styles.content}>
                <div>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/basket" element={<Basket />} />
                    </Routes>
                </div>
            </div>
        </main>
    )
}

export default Main;