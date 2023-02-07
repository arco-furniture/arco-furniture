import React from 'react'
import HomeAdvice from './HomeAdvice'
import HomePreview from './HomePreview'
import HomeWelcome from './HomeWelcome'
import HomeSub from './HomeSub'
import HomeMap from './HomeMap'

const Home: React.FC = (): JSX.Element => (
  <div className='home'>
    <HomePreview />
    <HomeAdvice />
    <HomeWelcome />
    <HomeSub />
    <HomeMap />
  </div>
)

export default Home
