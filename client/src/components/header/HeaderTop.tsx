import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import React from 'react'
import HeaderProfile from './HeaderProfile'
import AuthButtons from './AuthButtons'
import { useAuth } from '../../hooks/useStateSelectors'

const HeaderTop: React.FC = () => {
  const { user, isLoadingAuth } = useAuth()

  const CheckAuth = () => {
    return user ? <HeaderProfile /> : <AuthButtons />
  }

  return (
    <div className='header__top'>
      <div className='header__content'>
        <div className='header__nav-container'>
          <button className='header__place' style={{ cursor: 'pointer' }}>
            <PlaceOutlinedIcon color='primary' />
            <p className='header__place_city'>Москва</p>
          </button>
        </div>
        {isLoadingAuth ? <CheckAuth /> : <></>}
      </div>
    </div>
  )
}

export default HeaderTop
