import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import welcome from '../../images/welcome.jpg'
import Rating from '@mui/material/Rating'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt'
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied'
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined'
import { BlackTooltip, Feedback, TitleTooltip } from 'components'

const HomeWelcome: React.FC = (): JSX.Element => (
  <section className='welcome'>
    <div className='welcome__column'>
      <h3 className='welcome__subtitle'>Добро пожаловать в магазин АркоМебель!</h3>
      <p className='welcome__paragraph'>
        Мы являемся прямыми поставщиками более чем тридцати фабрик РФ. <br /> Наша компания уже более 5 лет успешно
        занимается продажей кухонной и корпусной мебели, вернее даже будет сказать что в первую очередь мы не продаем, а
        стараемся помочь нашим клиентам с выбором.
      </p>
      <img width='100%' height='310px' className='welcome__image' alt='работник' src={welcome} />
    </div>
    <div className='welcome__column'>
      <div className='welcome__top'>
        <h2 className='title' style={{ marginTop: 0 }}>
          Отзывы
        </h2>
        <BlackTooltip title={<TitleTooltip title='В разработке' />} placement='bottom'>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <Button
              style={{
                textTransform: 'none',
                color: '#4675ce',
                fontWeight: 700,
                boxShadow:
                  '0 3px 1px -2px rgba(0, 0, 0, 0.03), 0 2px 2px 0px rgba(0, 0, 0, 0.06), 0 1px 5px 0px rgba(0, 0, 0, 0.12)',
                paddingRight: '12px',
              }}
              variant='text'
              endIcon={<RateReviewOutlinedIcon />}
            >
              Оставить отзыв
            </Button>
          </Link>
        </BlackTooltip>
      </div>
      <article className='review'>
        <h3 className='review__name'>Олег</h3>
        <div className='review__rating-wrapper'>
          <Rating name='read-only' sx={{ color: '#4675ce' }} value={3} readOnly />
          <p className='review__subtitle'>отличный магазин</p>
        </div>
        <div className='review__feedback-wrapper'>
          <Feedback icon={<SentimentSatisfiedAltIcon color='primary' />} title='Достоинства'>
            Грамотный, квалифицированный персонал, работают быстро и на совесть. Попросил у менеджера помощи,
            проконсультировался, узнал все по нужной мне мебели, и в итоге подобрал самый подходящий для меня вариант.
          </Feedback>
          <Feedback icon={<SentimentVeryDissatisfiedIcon color='primary' />} title='Недостатки'>
            Их нет!
          </Feedback>
        </div>
      </article>
    </div>
  </section>
)

export default HomeWelcome
