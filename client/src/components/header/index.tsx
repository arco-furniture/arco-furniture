import React from 'react'
import HeaderMiddle from './HeaderMiddle'
import HeaderTop from './HeaderTop'
import HeaderNav from './HeaderNav'
import HeaderLocation from './HeaderLocation'

const Header: React.FC = (): JSX.Element => {
  return (
    <header className='header'>
      <div className='header__wrapper'>
        <HeaderTop />
        <HeaderMiddle />
        <HeaderNav />
        <HeaderLocation />
      </div>
    </header>
  )
}

export default Header
