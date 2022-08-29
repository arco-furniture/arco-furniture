import React from "react"
import img from '../../../images/card-img.svg';

const Card: React.FC = () => {
    return (
        <section >
            <img src={img} alt='img' />
        </section>
    )
}

export default Card;