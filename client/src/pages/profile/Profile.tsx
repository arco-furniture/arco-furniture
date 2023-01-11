import React from 'react'
// eslint-disable-next-line import/named
import { ProfileAbout, ProfileHistory } from './index'

const Profile = () => {
  return (
    <section className='profile'>
      <ProfileAbout />
      <ProfileHistory />
    </section>
  )
}

export default Profile
