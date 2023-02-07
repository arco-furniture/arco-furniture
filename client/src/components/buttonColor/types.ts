import { colorType, nameColor } from '../../types/constantsTypes'

export interface IButtonColor {
  objColor: colorType
  onClick: (objColor: nameColor) => void
}
