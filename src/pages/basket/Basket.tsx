import React from 'react';
import {BasketOrder, BasketControl, BasketApproval} from "../index";

const Basket: React.FC = () => {

    return (
        <section className="basket">
            <BasketControl/>
            <BasketOrder/>
            <BasketApproval/>
        </section>
    )
}

export default Basket;

