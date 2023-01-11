import React from 'react'
import wallpaper from '../../images/profile__wallpaper.svg'
import { useAuth } from '../../hooks/useStateSelectors'
import { Button } from '@mui/material'

const ProfileAbout: React.FC = () => {
  const { user } = useAuth()

  return (
    <article className='profileAbout'>
      <div className='profileAbout__wallpaper'>
        <img draggable={false} className='profileAbout__wallpaper-image' src={wallpaper} alt='wallpaper' />
      </div>
      <div className='profileAbout__content'>
        <div className='profileAbout__avatarWrapper'>
          <img draggable={false} className='profileAbout__avatar' src='https://i.ibb.co/GnD4hYk/ava.jpg' alt='avatar' />
        </div>
        <h2 className='profileAbout__firstName'>{user?.firstName}</h2>
        <em className='profileAbout__money'>10 000 ₽</em>
        <Button variant='outlined'>Выйти</Button>
      </div>
    </article>
  )
}

export default ProfileAbout
