import React, { useEffect, useRef, useState } from 'react'
import { useQuery } from 'react-query'
import { PlaceOutlined } from '@mui/icons-material'
import HeaderProfile from './HeaderProfile'
import AuthButtons from './AuthButtons'
import { useAuth, useOther } from '../../hooks/useStateSelectors'
import { LocationService } from '../../services/location.service'
import { toastr } from 'react-redux-toastr'
import { Button, styled } from '@mui/material'
import { AcceptPopover } from 'components/index'
import { useActions } from '../../hooks/useActions'

const HeaderTop: React.FC = (): JSX.Element => {
  const { user } = useAuth()
  const { currentLocation } = useOther()
  const [ipAddress, setIpAddress] = useState(null)
  const refLocation = useRef(null)
  const [anchorEl, setAnchorEl] = useState(null)
  const { openPopupLocation, setCurrentLocation } = useActions()

  useEffect(() => {
    if (!currentLocation) {
      getUserLocation()
    }
  }, [])

  const getUserLocation = async () => {
    const ip = await LocationService.getIpAddress()
    if (ip) {
      await setIpAddress(ip)
      await refetch()
    }
    await setAnchorEl(refLocation.current)
  }

  const handleAcceptLocation = () => {
    openPopupLocation()
  }

  const { refetch } = useQuery('get location', () => LocationService.getLocation(ipAddress), {
    enabled: false,
    onError() {
      setCurrentLocation('Москва')
      toastr.error('Ошибка', 'Не удалось определить вашу геолокацию')
    },
    onSuccess(value) {
      setCurrentLocation(value)
    },
  })

  const PanelAuth = () => (user ? <HeaderProfile /> : <AuthButtons />)

  const LocationButton = styled(Button)({
    display: 'flex',
    alignItems: 'center',
    textTransform: 'none',
  })

  return (
    <div className='header__top'>
      <div className='header__content'>
        <div className='header__nav-container'>
          <LocationButton className='header__place' ref={refLocation} onClick={() => openPopupLocation()}>
            <PlaceOutlined color='primary' />
            <p className='header__place_city'>{currentLocation}</p>
          </LocationButton>
          <AcceptPopover
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            handleAccept={handleAcceptLocation}
            question={`Ваша локация: ${currentLocation}?`}
            isFlip
          />
        </div>
        <PanelAuth />
      </div>
    </div>
  )
}

export default HeaderTop
