import HomeBanner from './Banner'
import CountDown from './components/CountDown'
import Card from '../../components/card/Card'
import item from '../../utils/item'
// eslint-disable-next-line import/named
import Button, { ButtonProps } from '@mui/material/Button'
import React from 'react'
import { openAuthorsPopup } from '../../redux/other/otherSlice'
import CodeIcon from '@mui/icons-material/Code'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import { useAppDispatch } from '../../hooks/redux'
import styled from '@emotion/styled'

const HomePreview: React.FC = () => {
  const dispatch = useAppDispatch()
  const styleButtons = { display: 'flex', gap: '7px', boxShadow: '4px 4px 10px rgb(0 0 0 / 10%)' }

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

  // #F5F5F5;

  const ColorButton = styled(Button)<ButtonProps>(() => ({
    color: '#414141',
    backgroundColor: '#F5F5F5',
    '&:hover': {
      backgroundColor: '#eaeaea',
    },
  }))

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
        <ColorButton
          className='preview__info-text'
          variant='contained'
          style={styleButtons}
          onClick={() => dispatch(openAuthorsPopup())}
        >
          <CodeIcon color='primary' />
          Авторы проекта
        </ColorButton>
        <ColorButton className='preview__info-text' variant='contained' style={styleButtons}>
          <SettingsOutlinedIcon color='primary' />
          Коротко о проекте
        </ColorButton>
      </div>
    </section>
  )
}

export default HomePreview
