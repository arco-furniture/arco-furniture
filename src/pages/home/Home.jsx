import { Advice } from "../../components/index";
import banner from '../../images/Banner.svg'

const Home = () => {
  return (
    <>
      <section className="home">
        <div className="home__wraper">
          <h2 className="home__title">Почему мы?</h2>
          <div className="home__container">
            <div className="home__icon_warranty"></div>
            <div>
              <h3 className="home__title-text">Гарантия</h3>
              <p className="home__text">Официальные поставки</p>
            </div>
          </div>
          <div className="home__container">
            <div className="home__icon_shop"></div>
            <div>
            <h3 className="home__title-text">Более 2000</h3>
            <p className="home__text">Торговых точек</p>
            </div>
          </div>
          <div className="home__container">
            <div className="home__icon_payment"></div>
            <div>
            <h3 className="home__title-text">Оплата</h3>
            <p className="home__text">Легкие способы</p>
            </div>
          </div>
        </div>
        <div className="home__wraper">
          <h2 className="home__title">Новые акции</h2>
          <img src={banner} alt="Банер" className="home__banner"/>
        </div>
        <div>
          <h2 className="home__title">Товар дня</h2>
        </div>
        <div className="home__info">
        <p className="home__info-text">Доставка по России</p>
        <p className="home__info-text">Беспроцентная рассрочка</p>
        </div>
      </section>
      <Advice />
    </>
  );
};

export default Home;
