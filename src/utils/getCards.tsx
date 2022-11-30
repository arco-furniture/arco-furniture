import { Card } from '../components'
import { IItem } from '../types/itemTypes'
import React from 'react'

export const getCards = (items: IItem[]) => {
  return items.map((item) => <Card key={item.id} item={item} />)
}
