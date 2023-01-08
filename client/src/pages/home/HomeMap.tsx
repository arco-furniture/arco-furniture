import React from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'

const HomeMap = () => {
  const cardInfo = [
    {
      title: 'Адрес',
      info: 'м. Марьина Роща, ул. Сущевский Вал, д. 46, Универмаг Марьинский 3-й этаж',
    },
    {
      title: 'График работы',
      info: 'Ежедневно с 10:00 до 21:00',
    },
    {
      title: 'Телефоны',
      info: '+7 (495) 740-28-71',
    },
    {
      title: 'Почта',
      info: 'acro-furniture@yandex.ru',
    },
  ]

  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 5,
  }

  return (
    <section className='map'>
      <div className='map__textWrapper'>
        <h2 className='map_text map__title'>Хотите посмотреть товар в магазине? </h2>
        <p className='map_text map__subtitle'>Приезжайте в гости! </p>
      </div>
      <div className='map__blocksWrapper'>
        <div className='map__cards'>
          <article className='card map_card'>
            <h3 className='map__cardMainTitle'>Марьина Роща</h3>
            <div className='map__cardContainer'>
              {cardInfo.map((item, index) => (
                <div key={index} className='map__cardBlock'>
                  <h4 className='map__cardTitle'>{item.title}</h4>
                  <p className='map__paragraph'>{item.info}</p>
                </div>
              ))}
            </div>
          </article>
          <article className='card map_card'>
            <h3 className='map__cardMainTitle'>Марьина Роща</h3>
            <div className='map__cardContainer'>
              {cardInfo.map((item, index) => (
                <div key={index} className='map__cardBlock'>
                  <h4 className='map__cardTitle'>{item.title}</h4>
                  <p className='map__paragraph'>{item.info}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
        <YMaps>
          <Map width='100%' height='360px' defaultState={defaultState}>
            <Placemark geometry={[55.684758, 37.738521]} />
          </Map>
        </YMaps>
        <div id='map' className='map__mapBlock' />
      </div>
    </section>
  )
}

export default HomeMap
