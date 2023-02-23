import React, { memo, SyntheticEvent } from 'react'
// eslint-disable-next-line import/named
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar'
import { Alert } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined'
import { useActions } from '../../hooks/useActions'
import { useOther } from '../../hooks/useStateSelectors'

const AlertBar: React.FC = (): JSX.Element => {
  const { alert, statusAlert } = useOther()
  const { closeAlertBar } = useActions()
  const { type, message } = alert

  const handleClose: any = (event: SyntheticEvent<Element, Event>, reason: SnackbarCloseReason) => {
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
            <AddShoppingCartOutlinedIcon sx={{ color: '#73A2FA' }} />
          ) : (
            <FavoriteIcon sx={{ color: '#ee4343' }} />
          )
        }
        onClose={handleClose}
        severity='warning'
        variant='filled'
        sx={{
          backgroundColor: '#555',
          boxShadow: '5px 5px 8px 2px rgba(0, 0, 0, 0.1)',
          color: '#fff',
          width: '100%',
        }}
        className='alert'
      >
        {message}
      </Alert>
    </Snackbar>
  )
}

export default memo(AlertBar)
