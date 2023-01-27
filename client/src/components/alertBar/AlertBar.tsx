import React, { memo } from 'react'
import Snackbar from '@mui/material/Snackbar'
import { Alert } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined'
import { useActions } from '../../hooks/useActions'
import { useOther } from '../../hooks/useStateSelectors'

const AlertBar: React.FC = () => {
  const { alert, statusAlert } = useOther()
  const { closeAlertBar } = useActions()

  const { type, message } = alert
  const stylesAlert = {
    backgroundColor: '#414141',
    boxShadow: '5px 5px 8px 2px rgba(0, 0, 0, 0.1)',
    color: '#fff',
  }

  const handleClose: any = (event: any, reason: any) => {
    if (reason === 'clickaway') {
      return
    }
    closeAlertBar()
  }

  return (
    <Snackbar open={statusAlert} autoHideDuration={1200} onClose={handleClose}>
      <Alert
        icon={
          type === 'cart' ? (
            <AddShoppingCartOutlinedIcon style={{ color: '#73A2FA' }} />
          ) : (
            <FavoriteIcon style={{ color: '#ee4343' }} />
          )
        }
        onClose={handleClose}
        severity='error'
        sx={{ width: '100%' }}
        variant='filled'
        className='alert'
        style={stylesAlert}
      >
        {message}
      </Alert>
    </Snackbar>
  )
}

export default memo(AlertBar)
