import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import { Link } from 'react-router-dom'
import CodeIcon from '@mui/icons-material/Code'
import Button from '@mui/material/Button'
import { openAuthorsPopup } from '../../../redux/other/otherSlice'
import { useDispatch } from 'react-redux'
import React from 'react'

const HeaderTop: React.FC = () => {
  const dispatch = useDispatch()
  const topNavItems = [
    { name: 'Сборка', link: '/' },
    { name: 'Оплата', link: '/' },
    { name: 'Доставка', link: '/' },
  ]

  return (
    <div className='header__top'>
      <div className='header__content'>
        <div className='header__nav-container'>
          <button className='header__place' style={{ cursor: 'pointer' }}>
            <PlaceOutlinedIcon color='primary' />
            <p className='header__place_city'>Москва</p>
          </button>
          <ul className='header__nav'>
            {topNavItems.map((item, index) => (
              <Link className='header__nav_item' key={index} to={item.link}>
                <li>{item.name}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className='header__phone-author'>
          <Button size='small' style={{ display: 'flex', gap: '7px' }} onClick={() => dispatch(openAuthorsPopup())}>
            <CodeIcon />
            Авторы проекта
          </Button>
          <div className='header__phone'>
            <div className='header__phone_logo' />
            <a href='tel: +79615259191' className='header__phone_number'>
              8 (961) 525 91 91
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop
