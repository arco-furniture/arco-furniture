import React from 'react'
import { CARD_CONTACT_INFO } from 'app/constants'
import { cardContactInfoType } from '../../../types/constantsTypes'

const CardContact = () => (
  <article className='card map_card'>
    <h3 className='map__cardMainTitle'>Марьина Роща</h3>
    <div className='map__cardContainer'>
      {CARD_CONTACT_INFO.map((item: cardContactInfoType, index: number) => (
        <div key={index} className='map__cardBlock'>
          <h4 className='map__cardTitle'>{item.title}</h4>
          {item.href ? (
            <a href={item.href} className='map__text map__text_link'>
              {item.info}
            </a>
          ) : (
            <p className='map__text map_text_paragraph'>{item.info}</p>
          )}
        </div>
      ))}
    </div>
  </article>
)

export default CardContact
