import React, { useEffect, useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import { useOther } from '../../hooks/useStateSelectors'

const Preloader: React.FC = (): JSX.Element => {
  const { activePreloader } = useOther()
  const [stylesHidden, setStylesHidden] = useState<object>({ overFlow: 'hidden', display: 'none' })

  useEffect(() => {
    if (!activePreloader) {
      const timeout = setTimeout(() => setStylesHidden({ overFlow: 'hidden', display: 'none' }), 1000)
      return clearTimeout(timeout)
    } else {
      setStylesHidden({ overFlow: 'visible', display: 'flex' })
    }
  }, [activePreloader])

  return (
    <section
      style={stylesHidden}
      className={`preloader ${activePreloader ? 'preloader_active' : 'preloader_disabled'}`}
    >
      <div className='preloader__wrapper'>
        <h2 className='preloader__title'>Загрузка...</h2>
        <CircularProgress />
      </div>
    </section>
  )
}

export default Preloader
