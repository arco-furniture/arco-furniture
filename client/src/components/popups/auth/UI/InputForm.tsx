import React, { forwardRef, useState } from 'react'
import InputPassword from 'components/popups/auth/UI/InputPassword'
import InputDefault from 'components/popups/auth/UI/InputDefault'

// eslint-disable-next-line react/display-name
const InputForm: React.FC<any> = forwardRef((props, ref) => {
  const [value, setValue] = useState<string>('')
  const { label, type = 'text' } = props

  const onChangeValue = (value: string) => {
    const validation = value.replace(/\s/g, '')
    setValue(validation)
  }

  return (
    <label className='inputForm'>
      {label}
      {type === 'password' ? (
        <InputPassword {...props} ref={ref} value={value} onChange={onChangeValue} />
      ) : (
        <InputDefault {...props} ref={ref} value={value} onChange={onChangeValue} />
      )}
    </label>
  )
})

export default InputForm
