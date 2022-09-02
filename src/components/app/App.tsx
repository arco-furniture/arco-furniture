import "../../scss/vendor/normalize.scss"
import "../../scss/app.scss"
import { Header, Main, Footer } from "../index"
import React from "react";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
