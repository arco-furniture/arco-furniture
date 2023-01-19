import React from 'react'
import { Button, ThemeProvider } from '@mui/material'
import { profileButtonTheme } from '../../themes/profileButtonTheme'
import InputProfile from '../../ui/InputProfile'
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined'
import ModeOutlinedIcon from '@mui/icons-material/ModeOutlined'
import { useQuery } from 'react-query'
import { ProfileService } from '../../services/profile.service'
import { Preloader } from 'components/index'
import ProfileAvatar from 'pages/profile/components/ProfileAvatar'
import ProfileInfo from 'pages/profile/components/ProfileInfo'
import ProfilePassword from 'pages/profile/components/ProfilePassword'

const ProfileAbout: React.FC = () => {
  const { isLoading, isError, data } = useQuery('get profile info', () => ProfileService.getProfileInfo())

  return isLoading ? (
    <Preloader />
  ) : (
    <article className='profileAbout box'>
      <ProfileAvatar data={data} />
      <ProfileInfo data={data} />
      <ProfilePassword />
    </article>
  )
}

export default ProfileAbout
