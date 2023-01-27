import React from 'react'
import { useQuery } from 'react-query'
import { ProfileService } from '../../services/profile.service'
import { Preloader } from 'components/index'
import ProfileAvatar from 'pages/profile/components/ProfileAvatar'
import ProfileInfo from 'pages/profile/components/ProfileInfo'
import ProfilePassword from 'pages/profile/components/ProfilePassword'
import { useActions } from '../../hooks/useActions'
import { toastError } from '../../api/withToastrErrorRedux'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useStateSelectors'

const ProfileAbout: React.FC = () => {
  const { setUser } = useActions()
  const navigate = useNavigate()
  const { user } = useAuth()

  const { isLoading } = useQuery('get profile info', () =>
    ProfileService.getProfileInfo()
      .then((userInfo) => setUser(userInfo))
      .catch((error) => toastError(error))
      .catch(() => !user && navigate('/')),
  )

  return isLoading ? (
    <Preloader />
  ) : (
    <article className='profileAbout box'>
      <ProfileAvatar />
      <ProfileInfo />
      <ProfilePassword />
    </article>
  )
}

export default ProfileAbout
