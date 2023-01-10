import React from 'react'
import { Button } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import { useCategory } from '../../../hooks/useStateSelectors'

const ButtonColor: React.FC<any> = ({ objColor, onClick }) => {
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
