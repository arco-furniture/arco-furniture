import React from 'react'
import HomeBanner from './components/Banner'
import { CountDown } from 'components'
import { CARD_PREVIEW_INFO } from 'app/constants'
import Button from '@mui/material/Button'
import CodeIcon from '@mui/icons-material/Code'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import { useActions } from '../../hooks/useActions'
import { ThemeProvider } from '@mui/material'
import { adviceButtonTheme } from '../../themes/adviceButtonTheme'
import { getCards } from '../../utils/getCards'
import { useHome } from '../../hooks/useStateSelectors'
import GrayCard from 'ui/GrayCard'
import Preloader from 'components/preloader'

const HomePreview: React.FC = (): JSX.Element => {
  const { openAuthorsPopup, openPopupProject } = useActions()
  const stylesButton = { color: '#414141' }
  const { topProduct, topProductStatus } = useHome()

  return (
    <section className='preview'>
      <div className='preview__wrapper'>
        <h2 className='preview__title'>Почему мы?</h2>
        <ul className='preview__cards-wrapper'>
          {CARD_PREVIEW_INFO.map((item) => (
            <GrayCard key={item.title} title={item.title} Icon={item.icon} text={item.text} />
          ))}
        </ul>
      </div>
      <div className='preview__wrapper preview__wrapper_banner'>
        <h2 className='preview__title'>Новые акции</h2>
        <HomeBanner />
      </div>
      <div className='preview__wrapper preview__wrapper_top'>
        <div className='preview__timer-container'>
          <h2 className='preview__title'>Товар дня</h2>
          <CountDown hours={18} minutes={0} />
        </div>
        {topProductStatus === 'loading' && <Preloader />}
        {topProduct && getCards(topProduct, true)}
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
          <Button
            color='primary'
            style={stylesButton}
            className='preview__info-text'
            onClick={() => openPopupProject()}
          >
            <SettingsOutlinedIcon style={{ color: '#4675CE' }} />
            Коротко о проекте
          </Button>
        </ThemeProvider>
      </div>
    </section>
  )
}

export default HomePreview
