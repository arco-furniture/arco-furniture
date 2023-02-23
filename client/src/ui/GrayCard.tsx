import React from 'react'
import { IGrayCard } from '../types/constantsTypes'

const GrayCard: React.FC<IGrayCard> = ({ title, Icon = false, text }): JSX.Element => (
  <article className='grayCard'>
    <div className='grayCard__icon'>{Icon ? <Icon /> : <></>}</div>
    <div className='grayCard__grout-text'>
      <h3 className='grayCard__title-text'>{title}</h3>
      <p className='grayCard__text'>{text}</p>
    </div>
  </article>
)

export default GrayCard
