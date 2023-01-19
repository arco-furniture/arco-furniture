import React from 'react'

const CardContact = () => {
  const cardInfo = [
    {
      title: 'Адрес',
      info: 'м. Марьина Роща, ул. Сущевский Вал, д. 46, Универмаг Марьинский 3-й этаж',
    },
    {
      title: 'График работы',
      info: 'Ежедневно с 10:00 до 21:00',
    },
    {
      title: 'Телефоны',
      info: '+7 (495) 740-28-71',
      href: 'tel:+74957402871',
    },
    {
      title: 'Почта',
      info: 'acro-furniture@yandex.ru',
      href: 'mailto:acro-furniture@yandex.ru',
    },
  ]

  return (
    <article className='card map_card'>
      <h3 className='map__cardMainTitle'>Марьина Роща</h3>
      <div className='map__cardContainer'>
        {cardInfo.map((item, index) => (
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
}

export default CardContact
