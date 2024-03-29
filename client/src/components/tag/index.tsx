import Chip from '@mui/material/Chip'
import React, { memo } from 'react'
import { ITag } from './types'

const Tag: React.FC<ITag> = ({
  tag,
  isCard = false,
  price,
  oldPrice,
  isFilter = false,
  addedInFilter = false,
}): JSX.Element => {
  const tagColors = [{ top: '#E13B3F' }, { new: '#4675CE' }, { discount: '#5AB45E' }, { eco: '#9d6e3d' }]
  const tagLabels = [{ top: 'top' }, { new: 'new' }, { discount: '%' }, { eco: 'eco' }]

  const handleCheckDiscount = (findTag: string | object) => {
    findTag = Object.values(findTag).join().toUpperCase()
    if (findTag === '%' && price && oldPrice) {
      let discount = Math.abs((price / oldPrice) * 100 - 100)
      discount = Math.round(discount)
      return `${discount}%`
    }
    return findTag
  }

  const handleColorTag = (tag: string) => {
    const findTag = tagColors.find((item) => Object.keys(item).join() === tag)
    if (findTag && Object.keys(findTag).join() === tag) {
      const colorTag = Object.values(findTag).join()
      if (!isFilter) {
        return { backgroundColor: colorTag, color: '#fff' }
      }
      return { backgroundColor: addedInFilter ? colorTag : '#dadada', color: '#fff' }
    }
    return { opacity: 0, overflow: 'hidden' }
  }

  const handleLabelTag = (tag: string) => {
    const findTag = tagLabels.find((item) => Object.keys(item).join() === tag)
    if (findTag && Object.keys(findTag).join() === tag) {
      return handleCheckDiscount(findTag)
    }
  }

  return (
    <div className={`tag ${isCard && 'card-tag'}`}>
      <Chip
        sx={{ fontSize: '12px', cursor: isFilter ? 'pointer' : 'default' }}
        style={handleColorTag(tag)}
        label={handleLabelTag(tag)}
        size='small'
      />
    </div>
  )
}

export default memo(Tag)
