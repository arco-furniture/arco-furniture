import { Box, Button, Popover, styled, Typography } from '@mui/material'
import React, { memo, useEffect, useRef } from 'react'
import { IAcceptPopover } from 'components/acceptPopover/types'

const AcceptPopover: React.FC<IAcceptPopover> = ({
  anchorEl,
  setAnchorEl,
  anchor = 'left',
  handleAccept,
  question,
  isFlip = false,
}): JSX.Element => {
  const isMounted = useRef<boolean>(false)

  const BoxButtons = styled(Button)({
    display: 'flex',
    flexDirection: isFlip ? 'row-reverse' : 'row',
    padding: '0 16px 16px 16px',
    gap: '10px',
  })

  const handleClose = (): void => {
    setAnchorEl(null)
  }

  const onClickAccept = (): void => {
    handleAccept()
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  useEffect(() => {
    if (anchorEl && isMounted.current) {
      document.addEventListener(
        'scroll',
        () => {
          setAnchorEl(null)
        },
        true,
      )
      return () => {
        document.addEventListener('scroll', () => {
          setAnchorEl(null)
        })
      }
    }
    isMounted.current = true
  }, [anchorEl])

  return (
    <Box sx={{ position: 'absolute' }}>
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
        <Typography sx={{ p: 2, maxWidth: '240px' }}>{question}</Typography>
        <BoxButtons>
          <Button
            size='small'
            color='success'
            variant='contained'
            onClick={() => (isFlip ? handleClose() : onClickAccept())}
          >
            Подтвердить
          </Button>
          <Button
            size='small'
            color='error'
            variant='outlined'
            onClick={() => (isFlip ? onClickAccept() : setAnchorEl(null))}
          >
            {isFlip ? 'Изменить' : 'Отмена'}
          </Button>
        </BoxButtons>
      </Popover>
    </Box>
  )
}

export default memo(AcceptPopover)
