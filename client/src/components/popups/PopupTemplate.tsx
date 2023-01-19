import Dialog from '@mui/material/Dialog'
import { DialogContent } from '@mui/material'
import { IPopupTemplate } from './types'
import React, { memo } from 'react'

const PopupTemplate: React.FC<IPopupTemplate> = ({ children, status, handleClose }) => (
  <Dialog open={status} onClose={() => handleClose()}>
    <DialogContent>{children}</DialogContent>
  </Dialog>
)

export default PopupTemplate
