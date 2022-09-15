import { Advice } from "../../components/index";
import item from "../../utils/item";
import Card from "../../components/card/Card";
import CountDown from "./CountDown";
import SwiperHome from "./SwiperHome";

const Home = () => {
  const whyWe = [
    {
      className: "home__icon_warranty",
      title: "Гарантия",
      text: "Официальные поставки",
    },
    {
      className: "home__icon_shop",
      title: "Более 2000",
      text: "Торговых точек",
    },
    {
      className: "home__icon_payment",
      title: "Оплата",
      text: "Легкие способы",
    },
  ];
  return (
    <>
      <section className="home">
        <div className="home__wraper">
          <h2 className="home__title">Почему мы?</h2>
          {whyWe.map((i) => {
            return (
              <div className="home__container">
                <div className={i.className}></div>
                <div>
                  <h3 className="home__title-text">{i.title}</h3>
                  <p className="home__text">{i.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="home__wraper">
          <h2 className="home__title">Новые акции</h2>
          <SwiperHome />
        </div>
        <div className="home__wraper">
          <div className="home__timer-container">
            <h2 className="home__title">Товар дня</h2>
            <CountDown hours={18} minutes={0} />
          </div>
          <Card item={item} />
        </div>
        <h2 className="home__title">Рекомендуем</h2>
        <div className="home__info">
          <button className="home__info-text">Доставка по России</button>
          <button className="home__info-text">Беспроцентная рассрочка</button>
        </div>
      </section>
      <Advice />
    </>
  );
};

export default Home;
