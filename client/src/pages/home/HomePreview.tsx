import HomeBanner from './Banner'
import CountDown from 'components/countDown/CountDown'
import { cardPreviewInfo } from 'app/constants'
import Button from '@mui/material/Button'
import React from 'react'
import CodeIcon from '@mui/icons-material/Code'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import { useActions } from '../../hooks/useActions'
import { ThemeProvider } from '@mui/material'
import { adviceButtonTheme } from '../../themes/adviceButtonTheme'
import { useQuery } from 'react-query'
import { AdviceService } from '../../services/advice.service'
import { getSkeletonCards } from '../../utils/getSkeletonCards'
import { getCards } from '../../utils/getCards'

const HomePreview: React.FC = () => {
  const { openAuthorsPopup } = useActions()
  const stylesButton = { color: '#414141' }
  const { isLoading, data, isSuccess } = useQuery('get top product', () => AdviceService.getTopProduct())

  return (
    <section className='preview'>
      <div className='preview__wrapper'>
        <h2 className='preview__title'>Почему мы?</h2>
        <ul className='preview__cards-wrapper'>
          {cardPreviewInfo.map((item, index) => (
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
      <div className='preview__wrapper preview__wrapper_banner'>
        <h2 className='preview__title'>Новые акции</h2>
        <HomeBanner />
      </div>
      <div className='preview__wrapper preview__wrapper_top'>
        <div className='preview__timer-container'>
          <h2 className='preview__title'>Товар дня</h2>
          <CountDown hours={18} minutes={0} />
        </div>
        {isLoading && getSkeletonCards(1)}
        {isSuccess && getCards(data, true)}
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
          <Button style={stylesButton} className='preview__info-text' disabled>
            <SettingsOutlinedIcon style={{ color: '#4675CE' }} />
            Коротко о проекте
          </Button>
        </ThemeProvider>
      </div>
    </section>
  )
}

export default HomePreview
