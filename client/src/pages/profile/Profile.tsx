import React from 'react'
import { ProfileAbout, ProfileBuy, ProfileReviews, ProfileMonies } from './index'

const Profile = () => {
  return (
    <section className='profile'>
      <h2 className='title profile__title'>Личный профиль</h2>
      <ProfileAbout />
      <ProfileBuy />
      <ProfileMonies />
      <ProfileReviews />
    </section>
  )
}

export default Profile
