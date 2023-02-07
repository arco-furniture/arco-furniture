import Dialog from '@mui/material/Dialog'
import { DialogContent } from '@mui/material'
import { IPopupTemplate } from './types'
import React from 'react'

const PopupTemplate: React.FC<IPopupTemplate> = ({ children, status, handleClose }): JSX.Element => (
  <Dialog open={status} onClose={() => handleClose()}>
    <DialogContent>{children}</DialogContent>
  </Dialog>
)

export default PopupTemplate
