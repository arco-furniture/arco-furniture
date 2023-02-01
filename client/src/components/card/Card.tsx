import SwiperImages from './SwiperImages'
import CardColors from './CardColors'
import React, { useEffect, useState } from 'react'
import Tag from '../tag/Tag'
import { getPriceWithFormat } from '../../utils/getPriceWithFormat'
import { ICard } from './types'
import { colorsTypes, imagesTypes } from '../../types/itemTypes'
import imageNotFound from '../../images/notFound.png'
import CardBottom from './CardBottom'
import { getPrefixTitle } from '../../utils/getPrefixTitle'

const Card: React.FC<ICard> = ({ item, isTop = false }) => {
  const [visible, setVisible] = useState<boolean>(false)
  const [selectedColor, setSelectedColor] = useState('')

  useEffect(() => {
    if (isTop) {
      const findItem: any = item.colors.find((item: colorsTypes) => item.color) || ''
      setSelectedColor(findItem.color)
    }
  }, [isTop])

  const checkImages = (images: imagesTypes[]) => {
    if (!images.length) {
      return [{ image: imageNotFound }]
    }
    return images.filter((item) => item.image)
  }

  return (
    <article className='card' onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      <Tag tag={item.mark} isCard price={item.price} oldPrice={item.oldPrice} />
      <SwiperImages images={checkImages(item.cardImages)} visible={visible} isTop={isTop} />
      <h3 className='card__title'>{getPrefixTitle(item)}</h3>
      <div className='card__desc-wrapper'>
        <div className='card__price-wrapper'>
          <div />
          <p>
            <span className='old-price'>{getPriceWithFormat(item.oldPrice)}</span> &#8381;
          </p>
          <em>{getPriceWithFormat(item.price)} &#8381;</em>
        </div>
        <CardColors
          isTop={isTop}
          colorPalette={item.colors}
          visible={visible}
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          setVisible={setVisible}
        />
        <CardBottom selectedColor={selectedColor} item={item} />
      </div>
    </article>
  )
}

export default Card
