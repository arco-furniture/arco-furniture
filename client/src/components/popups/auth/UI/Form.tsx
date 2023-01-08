import React from 'react'

const Form: React.FC<any> = (props) => {
  const { title, children } = props

  return (
    <form className='form' noValidate {...props}>
      <h2 className='form__title'>{title}</h2>
      <fieldset className='form__fieldset'>{children}</fieldset>
    </form>
  )
}

export default React.memo(Form)
