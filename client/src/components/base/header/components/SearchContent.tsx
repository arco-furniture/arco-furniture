import s from '../../../../scss/modules/search.module.scss'
import React from 'react'
import SwiperCards from '../../../card/SwiperCards'
import { useAppSelector } from '../../../../hooks/redux'
import { homeSelector } from '../../../../redux/home/homeSlice'
import { getCards } from '../../../../utils/getCards'
import { getSkeletonCards } from '../../../../utils/getSkeletonCards'

const SearchContent: React.FC<any> = ({ isVisible, setIsVisible, value }) => {
  const { searchData, searchStatus } = useAppSelector(homeSelector)

  return (
    isVisible && (
      <>
        <div className={s.searchPage__background} onClick={() => setIsVisible(false)} />
        <div className={s.searchPage__content}>
          {searchStatus === 'loading' && value.length && getSkeletonCards(4)}
          {searchStatus === 'success' && <SwiperCards>{getCards(searchData)}</SwiperCards>}
        </div>
      </>
    )
  )
}

export default SearchContent
