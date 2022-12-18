import React from 'react'
import HomeAdvice from './HomeAdvice'
import HomePreview from './HomePreview'
import HomeWelcome from './HomeWelcome'
import HomeSub from './HomeSub'

const Home: React.FC = () => {
  return (
    <div className='home'>
      <HomePreview />
      <HomeAdvice />
      <HomeWelcome />
      <HomeSub />
    </div>
  )
}

export default Home
