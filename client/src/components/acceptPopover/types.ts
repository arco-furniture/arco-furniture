import { Dispatch, SetStateAction } from 'react'

export interface IAcceptPopover {
  anchorEl: anchorElType
  setAnchorEl: Dispatch<SetStateAction<anchorElType>>
  anchor?: 'left' | 'center' | 'right' | number
  handleAccept: () => void
  question: string
  isFlip?: boolean
}

export type anchorElType = null | HTMLButtonElement
