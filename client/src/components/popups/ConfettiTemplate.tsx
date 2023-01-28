import React, { useEffect, useState } from 'react'
import Confetti from 'react-confetti'
import Dialog from '@mui/material/Dialog'
import { DialogContent } from '@mui/material'
import { useLocation } from 'react-router-dom'

const ConfettiTemplate: React.FC<any> = ({ children, statusPopup, handleClose }) => {
  const { pathname } = useLocation()
  const [width, setWidth] = useState(document.body.clientWidth - 25)
  const [height, setHeight] = useState(document.body.clientHeight)

  useEffect(() => {
    setWidth(document.body.clientWidth - 25)
    setHeight(document.body.clientHeight)
  }, [pathname])

  return (
    <Confetti
      width={width}
      height={height}
      style={{ zIndex: '10000', margin: '0 auto' }}
      numberOfPieces={statusPopup ? 170 : 0}
      recycle={statusPopup}
      gravity={0.07}
    >
      <Dialog open={statusPopup} onClose={() => handleClose()} fullWidth>
        <DialogContent>{children}</DialogContent>
      </Dialog>
    </Confetti>
  )
}

export default ConfettiTemplate
