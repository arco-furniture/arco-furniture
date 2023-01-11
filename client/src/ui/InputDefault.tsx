import React, { forwardRef } from 'react'

// eslint-disable-next-line react/display-name
const InputDefault: React.FC<any> = forwardRef((props, ref) => {
  const { error, textError, onChange } = props

  return (
    <>
      <input
        {...props}
        ref={ref}
        className={`inputForm__input ${!!error && 'inputForm__input_error'}`}
        onChange={(evt: React.ChangeEvent<HTMLInputElement>) => onChange(evt.target.value)}
        autoComplete='on'
        pattern='^[^\s]+(\s.*)?$' // запрещаем ввод пробелов
      />
      {!!error && <span className='inputForm__error'>{textError}</span>}
    </>
  )
})

export default React.memo(InputDefault)
