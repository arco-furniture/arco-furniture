import React from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import CardContact from 'pages/home/CardContact'

const HomeMap = () => {
  const defaultState = {
    center: [55.751574, 37.573856],
    zoom: 9,
  }

  return (
    <section className='map'>
      <div className='map__textWrapper'>
        <h2 className='map_text map__title'>Хотите посмотреть товар в магазине? </h2>
        <p className='map_text map__subtitle'>Приезжайте в гости! </p>
      </div>
      <div className='map__blocksWrapper'>
        <div className='map__cards'>
          <CardContact />
          <CardContact />
        </div>
        <YMaps>
          <Map width='100%' height='360px' defaultState={defaultState}>
            <Placemark geometry={[55.684758, 37.738521]} />
          </Map>
        </YMaps>
      </div>
    </section>
  )
}

export default HomeMap
