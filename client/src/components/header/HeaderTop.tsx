import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined'
import React from 'react'
import HeaderProfile from './HeaderProfile'
import AuthButtons from './AuthButtons'
import { useAuth } from '../../hooks/useStateSelectors'
import { BlackTooltip } from 'components/index'
import TitleTooltip from 'components/BlackTooltip/TitleTooltip'

const HeaderTop: React.FC = () => {
  const { isLoadingAuth, user } = useAuth()

  return (
    <div className='header__top'>
      <div className='header__content'>
        <div className='header__nav-container'>
          <BlackTooltip title={<TitleTooltip title='В разработке' />} placement='bottom'>
            <button disabled className='header__place'>
              <PlaceOutlinedIcon color='primary' />
              <p className='header__place_city'>Москва</p>
            </button>
          </BlackTooltip>
        </div>
        {isLoadingAuth && (user ? <HeaderProfile /> : <AuthButtons />)}
      </div>
    </div>
  )
}

export default HeaderTop
