import React, { memo } from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Divider, ListItemIcon } from '@mui/material'
import styles from '../../scss/modules/profileMenu.module.scss'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined'
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined'
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useStateSelectors'
import { logout } from '../../redux/auth/auth.actions'
import { getPriceWithFormat } from '../../utils/getPriceWithFormat'
import { IProfileMenu } from './types'

const ProfileMenu: React.FC<IProfileMenu> = ({ open, setAnchorEl, anchorEl }): JSX.Element => {
  const navigate = useNavigate()
  const { user } = useAuth()

  const handleClose = () => {
    setAnchorEl(null)
  }

  const onClickProfile = () => {
    if (user) {
      navigate(`/profile/${user._id}`)
    }
  }

  const onClickLogout = () => {
    logout()
  }

  return (
    <Menu
      style={{ position: 'absolute' }}
      anchorEl={anchorEl}
      id='account-menu'
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <div className={styles.moneyWrapper}>
        <h4 className={styles.title}>Ваш баланс</h4>
        <em className={styles.money}>{user ? getPriceWithFormat(user.money) : ''} ₽</em>
      </div>
      <Divider />
      <MenuItem sx={{ padding: '10px 15px' }} onClick={() => onClickProfile()}>
        <ListItemIcon>
          <PersonOutlineOutlinedIcon color='primary' />
        </ListItemIcon>
        Личный профиль
      </MenuItem>
      <h4 className={styles.title} style={{ margin: '5px 0 0 15px' }}>
        Тема сайта
      </h4>
      <MenuItem sx={{ padding: '10px 15px' }}>
        <ListItemIcon>
          <WbSunnyOutlinedIcon color='primary' />
        </ListItemIcon>
        Светлая
      </MenuItem>
      <MenuItem sx={{ padding: '10px 15px' }}>
        <ListItemIcon>
          <NightlightOutlinedIcon color='primary' />
        </ListItemIcon>
        Темная
      </MenuItem>
      <Divider />
      <MenuItem sx={{ padding: '10px 15px' }} onClick={() => onClickLogout()}>
        <ListItemIcon>
          <ExitToAppOutlinedIcon color='primary' />
        </ListItemIcon>
        Выйти
      </MenuItem>
    </Menu>
  )
}

export default memo(ProfileMenu)
