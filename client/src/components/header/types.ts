import { Dispatch, SetStateAction } from 'react'
import { anchorElType } from 'components/acceptPopover/types'

export interface IProfileMenu {
  open: boolean
  anchorEl: anchorElType
  setAnchorEl: Dispatch<SetStateAction<anchorElType>>
}
