import { Card } from '../components'
import { IItem } from '../types/itemTypes'
import React from 'react'

export const getCards = (items: IItem[], isTop = false) => {
  return items.map((item) => <Card key={item._id} item={item} isTop={isTop} />)
}
