import Dialog from '@mui/material/Dialog'
import { DialogContent } from '@mui/material'
import { IPopupTemplate } from './types'
import React from 'react'

const PopupTemplate: React.FC<IPopupTemplate> = ({ children, status, handleClose }) => {
  const handleClosePopup = () => {
    handleClose()
  }

  return (
    <Dialog open={status} onClose={() => handleClosePopup}>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  )
}

export default PopupTemplate
