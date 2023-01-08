import Dialog from '@mui/material/Dialog'
import { DialogContent } from '@mui/material'
import { useAppDispatch } from '../../hooks/redux'
import { IPopupTemplate } from './types'
import React from 'react'

const PopupTemplate: React.FC<IPopupTemplate> = ({ children, status, handleClose }) => {
  const dispatch = useAppDispatch()
  const handleClosePopup = () => {
    dispatch(handleClose())
  }

  return (
    <Dialog open={status} onClose={() => dispatch(handleClosePopup)}>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}

export default PopupTemplate
