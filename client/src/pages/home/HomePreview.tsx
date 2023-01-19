import HomeBanner from './Banner'
import CountDown from 'components/countDown/CountDown'
import Card from '../../components/card/Card'
import item from '../../utils/item'
// eslint-disable-next-line import/named
import Button from '@mui/material/Button'
import React from 'react'
import CodeIcon from '@mui/icons-material/Code'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import { useActions } from '../../hooks/useActions'
import { ThemeProvider } from '@mui/material'
import { adviceButtonTheme } from '../../themes/adviceButtonTheme'

const HomePreview: React.FC = () => {
  const { openAuthorsPopup } = useActions()
  const stylesButton = { color: '#414141' }

  const cards = [
    {
      className: 'preview__icon_warranty',
      title: 'Гарантия',
      text: 'Официальные поставки',
    },
    {
      className: 'preview__icon_shop',
      title: 'Более 2000',
      text: 'Торговых точек',
    },
    {
      className: 'preview__icon_payment',
      title: 'Оплата',
      text: 'Легкие способы',
    },
  ]

  return (
    <section className='preview'>
      <div className='preview__wrapper'>
        <h2 className='preview__title'>Почему мы?</h2>
        <ul className='preview__cards-wrapper'>
          {cards.map((item, index) => (
            <li key={index} className='preview__container'>
              <div className={item.className} />
              <div className='preview__grout-text'>
                <h3 className='preview__title-text'>{item.title}</h3>
                <p className='preview__text'>{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className='preview__wrapper'>
        <h2 className='preview__title'>Новые акции</h2>
        <HomeBanner />
      </div>
      <div className='preview__wrapper'>
        <div className='preview__timer-container'>
          <h2 className='preview__title'>Товар дня</h2>
          <CountDown hours={18} minutes={0} />
        </div>
        <Card item={item} isTop />
      </div>
      <h2 className='preview__title'>Рекомендуем</h2>
      <div className='preview__info'>
        <ThemeProvider theme={adviceButtonTheme}>
          <Button
            color='primary'
            style={stylesButton}
            className='preview__info-text'
            onClick={() => openAuthorsPopup()}
          >
            <CodeIcon style={{ color: '#4675CE' }} />
            Авторы проекта
          </Button>
          <Button style={stylesButton} className='preview__info-text' disabled>
            <SettingsOutlinedIcon style={{ color: '#4675CE' }} />
            Коротко о проекте
          </Button>
        </ThemeProvider>
      </div>
    </section>
  )
}

export default HomePreview
