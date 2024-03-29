import React from 'react'
import { IForm } from './types'

const Form: React.FC<IForm> = (props) => {
  const { title, children } = props

  return (
    <form className='form' noValidate {...props}>
      <h2 className='form__title'>{title}</h2>
      <fieldset className='form__fieldset'>{children}</fieldset>
    </form>
  )
}

export default React.memo(Form)
