import React from 'react'
import styles from '../../scss/modules/headerProfile.module.scss'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import { Avatar, Badge } from '@mui/material'
import ProfileMenu from 'components/header/ProfileMenu'
import TitleTooltip from 'components/BlackTooltip/TitleTooltip'
import { BlackTooltip } from 'components/index'
import { useAuth } from '../../hooks/useStateSelectors'

const HeaderProfile = () => {
  const stylesAvatar = { bgcolor: '#4675CE', height: '33px', width: '33px', marginRight: '7px' }
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const { user } = useAuth()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <div className={styles.headerProfile}>
      <BlackTooltip title={<TitleTooltip title='В разработке' />} placement='bottom'>
        <Badge className={styles.notify} badgeContent={1} color='error'>
          <NotificationsOutlinedIcon color='primary' />
        </Badge>
      </BlackTooltip>
      <button className={styles.buttonProfile} onClick={handleClick}>
        <h2 className={styles.name}>{user?.firstName}</h2>
        <Avatar sx={stylesAvatar} variant='rounded' />
      </button>
      <ProfileMenu open={open} setAnchorEl={setAnchorEl} anchorEl={anchorEl} />
    </div>
  )
}

export default HeaderProfile
