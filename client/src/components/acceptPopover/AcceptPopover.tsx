import { Box, Button, Popover, Typography } from '@mui/material'
import React, { memo, useEffect, useRef } from 'react'

const AcceptPopover: React.FC<any> = ({ anchorEl, setAnchorEl, anchor = 'left', handleAccept, question }) => {
  const isMounted = useRef<boolean>(false)
  const wrapperStyles = { position: 'absolute' }
  const buttonStyles = { display: 'flex', padding: '0 16px 16px 16px', gap: '10px' }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const onClickAccept = () => {
    handleAccept()
    setAnchorEl(false)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  useEffect(() => {
    if (anchorEl && isMounted.current) {
      document.addEventListener(
        'scroll',
        () => {
          setAnchorEl(false)
        },
        true,
      )
      return () => {
        window.removeEventListener('scroll', setAnchorEl(false))
      }
    }
    isMounted.current = true
  }, [anchorEl])

  return (
    <Box sx={wrapperStyles}>
      <Popover
        anchorOrigin={{
          vertical: 'top',
          horizontal: anchor,
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <Typography sx={{ p: 2 }}>{question}</Typography>
        <Box sx={buttonStyles}>
          <Button size='small' color='success' variant='contained' onClick={() => onClickAccept()}>
            Подтвердить
          </Button>
          <Button size='small' color='error' variant='outlined' onClick={() => setAnchorEl(false)}>
            Отмена
          </Button>
        </Box>
      </Popover>
    </Box>
  )
}

export default memo(AcceptPopover)
