import { authorsNameTypes } from '../components/popups/types'
// eslint-disable-next-line import/no-unresolved
import { OverridableStringUnion } from '@mui/types'
// eslint-disable-next-line import/named
import { ChipPropsSizeOverrides } from '@mui/material/Chip/Chip'

export interface IChipDeveloper {
  item: authorsNameTypes
  size: OverridableStringUnion<'small' | 'medium', ChipPropsSizeOverrides>
}

export interface IForm {
  title: string
  children: JSX.Element | JSX.Element[]
  onSubmit: any
}
