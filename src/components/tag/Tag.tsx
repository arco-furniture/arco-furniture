import Chip from '@mui/material/Chip'
import React from 'react'
import { ITag } from './types'

const Tag: React.FC<ITag> = ({ tag, isCard = false, price, oldPrice }) => {
  const tagColors = [{ top: '#E13B3F' }, { new: '#4675CE' }, { discount: '#5AB45E' }, { eco: '#9d6e3d' }]
  const tagLabels = [{ top: 'top' }, { new: 'new' }, { discount: '%' }, { eco: 'eco' }]

  const handleCheckDiscount = (findTag: any) => {
    findTag = Object.values(findTag).join().toUpperCase()
    if (findTag === '%' && price && oldPrice) {
      let discount = Math.abs((price / oldPrice) * 100 - 100)
      discount = Math.round(discount)
      return `${discount}%`
    }
    return findTag
  }

  const handleColorTag = (tag: any) => {
    const findTag = tagColors.find((item) => Object.keys(item).join() === tag)
    if (findTag && Object.keys(findTag).join() === tag) {
      const colorTag = Object.values(findTag).join()
      return { backgroundColor: colorTag, color: '#fff' }
    }
    return { opacity: 0, overflow: 'hidden' }
  }

  const handleLabelTag = (tag: any) => {
    const findTag = tagLabels.find((item) => Object.keys(item).join() === tag)
    if (findTag && Object.keys(findTag).join() === tag) {
      return handleCheckDiscount(findTag)
    }
  }

  return (
    <div className={`tag ${isCard && 'card-tag'}`}>
      <Chip sx={{ fontSize: '12px' }} style={handleColorTag(tag)} label={handleLabelTag(tag)} size='small' />
    </div>
  )
}

export default Tag
