import React from 'react'
import { useQuery } from 'react-query'
import { ProfileService } from '../../services/profile.service'
import ProfileAvatar from './components/ProfileAvatar'
import ProfileInfo from './components/ProfileInfo'
import ProfilePassword from './components/ProfilePassword'
import { useActions } from '../../hooks/useActions'
import { toastError } from '../../api/withToastrErrorRedux'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useStateSelectors'
import Preloader from '../../components/preloader'

const ProfileAbout: React.FC = (): JSX.Element => {
  const { setUser } = useActions()
  const navigate = useNavigate()
  const { user } = useAuth()

  const { isLoading } = useQuery('get profile info', () =>
    ProfileService.getProfileInfo()
      .then((userInfo) => setUser(userInfo))
      .catch((error) => toastError(error))
      .catch(() => !user && navigate('/')),
  )

  return (
    <article className='profileAbout box'>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <ProfileAvatar />
          <ProfileInfo />
          <ProfilePassword />
        </>
      )}
    </article>
  )
}

export default ProfileAbout
