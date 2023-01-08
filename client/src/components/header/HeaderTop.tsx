import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import React from 'react'
import { Profile } from 'components/index'
import AuthButtons from './AuthButtons'

const HeaderTop: React.FC = () => {
  const dispatch = useAppDispatch()
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)

  return (
    <div className='header__top'>
      <div className='header__content'>
        <div className='header__nav-container'>
          <button className='header__place' style={{ cursor: 'pointer' }}>
            <PlaceOutlinedIcon color='primary' />
            <p className='header__place_city'>Москва</p>
          </button>
        </div>
        {isLoggedIn ? <Profile /> : <AuthButtons />}
      </div>
    </div>
  )
}

export default HeaderTop
