import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import PopupTemplate from '../popups/PopupTemplate'
import styles from '../../scss/modules/popups.module.scss'
import { useActions } from '../../hooks/useActions'
import { useOther } from '../../hooks/useStateSelectors'
import { Link, TextField } from '@mui/material'
import debounce from 'lodash/debounce'
import Preloader from '../preloader'

const LocationPopup: React.FC = (): JSX.Element => {
  const { closePopupLocation, searchLocation, clearLocation } = useActions()
  const { statusPopupLocation, locations, statusLocations } = useOther()
  const [value, setValue] = useState('')

  const handleChangeValue = (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(evt.target.value)
  }

  useEffect(() => {
    setValue('')
    clearLocation()
  }, [statusPopupLocation])

  useEffect(() => {
    if (value.length) {
      updateDebounceValue(value)
    }
  }, [value])

  const updateDebounceValue = useCallback(
    debounce((value) => {
      searchLocation(value)
    }, 1000),
    [],
  )

  const onClickLocation = (location) => {
    sessionStorage.setItem('location', location)
    closePopupLocation()
  }

  return (
    <PopupTemplate status={statusPopupLocation} handleClose={closePopupLocation}>
      <div className={styles.popup__location}>
        <h3 className={styles.popup__text} style={{ margin: 0 }}>
          Изменить локацию
        </h3>
        <TextField
          sx={{ margin: '20px 0', width: '280px' }}
          size='small'
          value={value}
          onChange={handleChangeValue}
          placeholder='Москва'
        />
        {statusLocations === 'initial' && <h3 className={styles.popup__previewTitle}>Введите название города</h3>}
        {statusLocations === 'loading' && <Preloader />}
        {statusLocations === 'success' && !locations.length && (
          <h3 className={styles.popup__previewTitle}>Уточните локацию...</h3>
        )}
        <ul className={styles.popup__cites}>
          {locations?.map((location, index) => (
            <li className={styles.popup__city} key={index}>
              <Link className={styles.popup__city_link} onClick={() => onClickLocation(location)}>
                {location}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </PopupTemplate>
  )
}

export default memo(LocationPopup)
