import React from 'react'
import { useQuery } from 'react-query'
import welcome from '../../images/welcome.jpg'
import ChartUserBuy from '../../ui/ChartUserBuy'
import GrayCard from '../../ui/GrayCard'
import { getPriceWithFormat } from '../../utils/getPriceWithFormat'
import { Icons } from '../../images/icons'
import { HomeService } from '../../services/home.service'
import Preloader from '../../components/preloader'

const HomeWelcome: React.FC = (): JSX.Element => {
  const { isLoading, data } = useQuery('get stats home', () => HomeService.getHomeStats())

  return (
    <section className='welcome'>
      <div className='welcome__column'>
        <h3 className='welcome__subtitle'>Добро пожаловать в магазин АркоМебель!</h3>
        <p className='welcome__paragraph'>
          Мы являемся прямыми поставщиками более чем тридцати фабрик РФ. <br /> Наша компания уже более 5 лет успешно
          занимается продажей кухонной и корпусной мебели, вернее даже будет сказать что в первую очередь мы не продаем,
          а стараемся помочь нашим клиентам с выбором.
        </p>
        <img className='welcome__image' alt='работник' src={welcome} />
      </div>
      <div className='welcome__column'>
        <div className='welcome__top'>
          <h2 className='title welcome_title'>Статистика заказов</h2>
        </div>
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <ChartUserBuy chart={data?.chart} />
            <div className='welcome__stats'>
              <GrayCard title='Последний покупатель' text={data?.firstName} Icon={Icons.warranty} />
              <GrayCard title='Сумма заказа' text={getPriceWithFormat(data?.allPrice) + ' ₽'} Icon={Icons.payment} />
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default HomeWelcome
