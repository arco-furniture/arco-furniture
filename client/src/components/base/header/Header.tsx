import React from 'react'
import { HeaderMiddle, HeaderTop, HeaderNav, HeaderLocation } from './index'

const Header: React.FC = () => {
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
