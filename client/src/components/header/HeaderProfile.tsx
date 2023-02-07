import React, { memo } from 'react'
import styles from '../../scss/modules/headerProfile.module.scss'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import { Avatar, Badge } from '@mui/material'
import ProfileMenu from 'components/header/ProfileMenu'
import TitleTooltip from 'components/BlackTooltip/TitleTooltip'
import { BlackTooltip } from 'components/index'
import { useAuth } from '../../hooks/useStateSelectors'
import { anchorElType } from 'components/acceptPopover/types'

const HeaderProfile: React.FC = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<anchorElType>(null)
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
        <Avatar className={styles.avatar} variant='rounded' src={user ? user.avatar : null} />
      </button>
      <ProfileMenu open={open} setAnchorEl={setAnchorEl} anchorEl={anchorEl} />
    </div>
  )
}

export default memo(HeaderProfile)
