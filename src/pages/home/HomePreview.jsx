import HomeBanner from "./HomeBanner";
import CountDown from "./components/CountDown";
import Card from "../../components/card/Card";
import item from "../../utils/item";

const HomePreview = () => {

    const cards = [
        {
            className: "preview__icon_warranty",
            title: "Гарантия",
            text: "Официальные поставки",
        },
        {
            className: "preview__icon_shop",
            title: "Более 2000",
            text: "Торговых точек",
        },
        {
            className: "preview__icon_payment",
            title: "Оплата",
            text: "Легкие способы",
        },
    ];


    return (
        <section className="preview">
            <div className="preview__wrapper">
                <h2 className="preview__title">Почему мы?</h2>
                <ul>
                    {
                        cards.map((item, index) => (
                                <li key={index} className="preview__container">
                                    <div className={item.className}></div>
                                    <div>
                                        <h3 className="preview__title-text">{item.title}</h3>
                                        <p className="preview__text">{item.text}</p>
                                    </div>
                                </li>
                            )
                        )
                    }

                </ul>
            </div>
            <div className="preview__wrapper">
                <h2 className="preview__title">Новые акции</h2>
                <HomeBanner/>
            </div>
            <div className="preview__wrapper">
                <div className="preview__timer-container">
                    <h2 className="preview__title">Товар дня</h2>
                    <CountDown hours={18} minutes={0}/>
                </div>
                <Card item={item}/>
            </div>
            <h2 className="preview__title">Рекомендуем</h2>
            <div className="preview__info">
                <button className="preview__info-text">Доставка по России</button>
                <button className="preview__info-text">Беспроцентная рассрочка</button>
            </div>
        </section>
    )
}

export default HomePreview;