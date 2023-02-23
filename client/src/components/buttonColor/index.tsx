import React from 'react'
import { Button } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import { useCategory } from '../../hooks/useStateSelectors'
import { IButtonColor } from './types'

const ButtonColor: React.FC<IButtonColor> = ({ objColor, onClick }): JSX.Element => {
  const { dataFilter } = useCategory()
  const isSearch = dataFilter.colors.some((item) => item === objColor.nameColor)

  return (
    <li key={objColor.nameColor}>
      <Button
        style={{ backgroundColor: objColor.color }}
        onClick={() => onClick(objColor.nameColor)}
        variant='contained'
      >
        {isSearch && <CheckIcon />}
      </Button>
    </li>
  )
}

export default ButtonColor
