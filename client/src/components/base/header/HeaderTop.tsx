import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import { Link } from 'react-router-dom'
import CodeIcon from '@mui/icons-material/Code'
import Button from '@mui/material/Button'
import { openAuthorsPopup } from '../../../redux/other/otherSlice'
import { useAppDispatch } from '../../../hooks/redux'
import React from 'react'

const HeaderTop: React.FC = () => {
  const dispatch = useAppDispatch()

  return (
    <div className='header__top'>
      <div className='header__content'>
        <div className='header__nav-container'>
          <button className='header__place' style={{ cursor: 'pointer' }}>
            <PlaceOutlinedIcon color='primary' />
            <p className='header__place_city'>Москва</p>
          </button>
        </div>
        <div className='header__phone-author'>
          <Button size='small' style={{ display: 'flex', gap: '7px' }} onClick={() => dispatch(openAuthorsPopup())}>
            <CodeIcon />
            Авторы проекта
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop
