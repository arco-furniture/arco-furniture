import React, { memo } from 'react'
import styles from '../../scss/modules/headerProfile.module.scss'
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined'
import { Avatar, Badge } from '@mui/material'
import { BlackTooltip, TitleTooltip } from '../index'
import { useAuth } from '../../hooks/useStateSelectors'
import styled from '@emotion/styled'
import { anchorElType } from '../acceptPopover/types'
import ProfileMenu from './ProfileMenu'

const HeaderProfile: React.FC = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<anchorElType>(null)
  const open = Boolean(anchorEl)
  const { user } = useAuth()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const MyAvatar = styled(Avatar)({
    backgroundColor: '#4675CE',
    height: '33px',
    width: '33px',
    marginRight: '7px',
    boxShadow:
      '0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0px rgba(0, 0, 0, 0.14), 0 1px 5px 0px rgba(0, 0, 0, 0.12)',
  })

  return (
    <div className={styles.headerProfile}>
      <BlackTooltip title={<TitleTooltip title='В разработке' />} placement='bottom'>
        <Badge className={styles.notify} badgeContent={1} color='error'>
          <NotificationsOutlinedIcon color='primary' />
        </Badge>
      </BlackTooltip>
      <button className={styles.buttonProfile} onClick={handleClick}>
        <h2 className={styles.name}>{user?.firstName}</h2>
        <MyAvatar variant='rounded' src={null} />
      </button>
      <ProfileMenu open={open} setAnchorEl={setAnchorEl} anchorEl={anchorEl} />
    </div>
  )
}

export default memo(HeaderProfile)
