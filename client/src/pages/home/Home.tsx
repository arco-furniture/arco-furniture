import React from 'react'
import HomeAdvice from './HomeAdvice'
import HomePreview from './HomePreview'
import HomeWelcome from './HomeWelcome'
import HomeMap from './HomeMap'

const Home: React.FC = (): JSX.Element => (
  <div className='home'>
    <HomePreview />
    <HomeAdvice />
    <HomeWelcome />
    <HomeMap />
  </div>
)

export default Home
