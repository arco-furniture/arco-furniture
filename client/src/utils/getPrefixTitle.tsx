import { iconsCategory } from 'app/constants'
import React from 'react'

export const getPrefixTitle = (obj) => {
  const prefix = iconsCategory.find((item) => item.category === obj?.category)
  return (
    <>
      {prefix?.name + ' '}
      <b>{obj.title}</b>
    </>
  )
}
