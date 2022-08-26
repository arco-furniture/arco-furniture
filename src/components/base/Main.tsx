import React from "react"
import styles from "../../scss/modules/main.module.scss";
import {Routes, Route} from "react-router-dom";
import {Home} from "../../pages/index"

const Main: React.FC = () => {
    return (
        <main className={styles.main}>
            <div className={styles.content}>
                <div>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </div>
            </div>
        </main>
    )
}

export default Main;