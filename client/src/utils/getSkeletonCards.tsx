import React from 'react'
import { SkeletonCard } from 'components'

export const getSkeletonCards = (value: number) => {
  return new Array(value).fill(null).map((_item, index) => <SkeletonCard key={index} />)
}
