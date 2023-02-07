import React, { useEffect, useState } from 'react'
import SwiperImages from './SwiperImages'
import CardColors from './CardColors'
import { Tag } from 'components'
import { getPriceWithFormat } from '../../utils/getPriceWithFormat'
import { ICard } from './types'
import { imageTypes } from '../../types/itemTypes'
import imageNotFound from '../../images/notFound.png'
import CardBottom from './CardBottom'
import { getPrefixTitle } from '../../utils/getPrefixTitle'
import { colorType } from 'types/constantsTypes'

const Card: React.FC<ICard> = ({ item, isTop = false }): JSX.Element => {
  const [visible, setVisible] = useState<boolean>(false)
  const [selectedColor, setSelectedColor] = useState<string>('')

  useEffect(() => {
    if (isTop) {
      const findItem: colorType = item.colors.find((item: colorType) => item.color)
      setSelectedColor(findItem.color)
    }
  }, [isTop])

  const checkImages = (images: imageTypes[]): imageTypes[] => {
    if (!images.length) {
      return [{ image: imageNotFound }]
    }
    return images.filter((item) => item.image)
  }

  return (
    <article className='card' onMouseEnter={() => setVisible(true)} onMouseLeave={() => setVisible(false)}>
      <Tag tag={item.mark} isCard price={item.price} oldPrice={item.oldPrice} />
      <SwiperImages images={checkImages(item.cardImages)} isTop={isTop} />
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
