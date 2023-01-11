import React, { forwardRef, memo } from 'react'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import { useAuth } from '../hooks/useStateSelectors'
import { useActions } from '../hooks/useActions'

// eslint-disable-next-line react/display-name
const InputPassword: React.FC<any> = forwardRef((props, ref) => {
  const { error, textError, placeholder = '******', onChange } = props
  const { eyeStatus } = useAuth()
  const { setEyeStatus } = useActions()
  const styleEye = { color: '#555' }

  const onClickEye = (): void => {
    setEyeStatus()
  }

  // избавляемся от ререндера компонента во время клика по кнопке
  // eslint-disable-next-line react/display-name
  const EyeButton = memo(() => (
    <button type='button' className='inputForm__eye' onClick={() => onClickEye()}>
      {eyeStatus ? <VisibilityOutlinedIcon sx={styleEye} /> : <VisibilityOffOutlinedIcon sx={styleEye} />}
    </button>
  ))

  return (
    <>
      <div className='inputForm__password'>
        <input
          ref={ref}
          {...props}
          type={eyeStatus ? 'text' : 'password'}
          className={`inputForm__input inputForm__input_password ${!!error && 'inputForm__input_error'}`}
          placeholder={placeholder}
          pattern='^[^\s]+(\s.*)?$' // запрещаем ввод пробелов
          onChange={(evt: React.ChangeEvent<HTMLInputElement>) => onChange(evt.target.value)}
          autoComplete='on'
        />
        <EyeButton />
      </div>
      {!!error && <span className='inputForm__error'>{textError}</span>}
    </>
  )
})

export default React.memo(InputPassword)
