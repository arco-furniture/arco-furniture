import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined'
import { BlackTooltip } from '../../components'
import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { ICardColors } from './types'

const CardColors: React.FC<ICardColors> = (props): JSX.Element => {
  const { colorPalette, visible, setVisible, selectedColor, setSelectedColor, isTop } = props

  const colors = colorPalette.filter((_item, index) => index < 3)

  const handleCurrentColor = (color: string) => {
    if (!isTop) {
      selectedColor !== color ? setSelectedColor(color) : setSelectedColor('')
    }
  }

  useEffect(() => {
    selectedColor && setVisible(true)
  }, [selectedColor, visible])

  const TooltipColors = () => {
    return (
      <div className='card__tooltip'>
        <span>В наличии:</span>
        <ul>
          {colorPalette.map((obj, index) => (
            <li key={index} style={{ backgroundColor: obj.color }} />
          ))}
        </ul>
      </div>
    )
  }

  return (
    <ul className={`card__colors ${visible ? 'card__active' : 'card__disabled'}`}>
      {!isTop && (
        <BlackTooltip title={TooltipColors()} placement='top-start'>
          <AutoAwesomeOutlinedIcon color='primary' style={{ marginRight: '5px' }} />
        </BlackTooltip>
      )}
      {colors.map((palette) => {
        const isCurrentColor = selectedColor === palette.color
        const styleButton = {
          backgroundColor: palette.color,
          opacity: isCurrentColor || selectedColor === '' ? 1 : 0.1,
        }
        return (
          <li key={palette.color}>
            <Button
              disabled={isTop}
              style={styleButton}
              onClick={() => handleCurrentColor(palette.color)}
              variant='contained'
              className='card__button-color'
            />
          </li>
        )
      })}
    </ul>
  )
}

export default CardColors
