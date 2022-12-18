import {
  paramsSelector,
  categorySelector,
  fetchDataCategory,
  changeCategoryStatus,
  resetSettingsCategory,
} from '../../redux/category/categorySlice'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import React, { useEffect } from 'react'
import CategoryFilters from './CategoryFilters'
import { Pagination } from '@mui/material'
import { getSkeletonCards } from '../../utils/getSkeletonCards'
import { getCards } from '../../utils/getCards'
import CategorySort from './CategorySort'
import { useLocation } from 'react-router-dom'

const Category: React.FC = () => {
  const params = useAppSelector(paramsSelector)
  const { categoryData, categoryStatus, searchStyles, filterPrice, searchMaterial, searchColors } =
    useAppSelector(categorySelector)
  const dispatch = useAppDispatch()
  const requestCategory = `?category=${params.paramsId}`
  const location = useLocation()

  useEffect(() => {
    dispatch(resetSettingsCategory())
  }, [location.pathname])

  // Фейковая загрузка, чтобы избежать подергивания карточек при выборе разных фильтров,
  // Вся фильтрация сделана на фронте
  useEffect(() => {
    dispatch(changeCategoryStatus('loading'))
    setTimeout(() => dispatch(changeCategoryStatus('success')), 700)
  }, [searchStyles, filterPrice, searchMaterial, searchColors])

  // активация нужной категории
  useEffect(() => {
    dispatch(fetchDataCategory(requestCategory))
  }, [params])

  return (
    <section className='category'>
      <h2 style={{ position: 'sticky' }} className='title'>{`${params.name} ${categoryData.length} товаров`}</h2>
      <div className='category__wrapper'>
        <CategoryFilters />
        <div className='category__content'>
          <CategorySort />
          <div className='category__cards'>
            {categoryStatus === 'loading' && getSkeletonCards(6)}
            {categoryStatus === 'success' && getCards(categoryData)}
            <div className='category__pagination'>
              <Pagination count={5} color='primary' size='large' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Category
