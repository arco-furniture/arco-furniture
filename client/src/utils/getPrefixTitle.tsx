import { ICONS_CATEGORY } from 'app/constants'
import React from 'react'

export const getPrefixTitle = (obj) => {
  const prefix = ICONS_CATEGORY.find((item) => item.category === obj?.category)
  return (
    <>
      {prefix?.name + ' '}
      <b>{obj.title}</b>
    </>
  )
}
