import React from 'react'
import ProfileAbout from './ProfileAbout'
import ProfileBuy from './ProfileBuy'
import ProfileReviews from './ProfileReviews'
import ProfileMonies from './ProfileMonies'

const Profile: React.FC = (): JSX.Element => (
  <section className='profile'>
    <h2 className='title profile__title'>Личный профиль</h2>
    <ProfileAbout />
    <ProfileBuy />
    <ProfileMonies />
    <ProfileReviews />
  </section>
)

export default Profile
