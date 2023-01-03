import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import React, { useEffect } from 'react'
import CategoryFilters from './CategoryFilters'
import { Pagination } from '@mui/material'
import { getSkeletonCards } from '../../utils/getSkeletonCards'
import { getCards } from '../../utils/getCards'
import CategorySort from './CategorySort'
import { useParams } from 'react-router-dom'
import { filterCategory } from '../../redux/category/asyncActions'

const Category: React.FC = () => {
  const categoryData = useAppSelector((state) => state.category.categoryData)
  const categoryStatus = useAppSelector((state) => state.category.categoryStatus)
  const dataFilter = useAppSelector((state) => state.category.dataFilter)
  const currentPage = useAppSelector((state) => state.category.currentPage)
  const dispatch = useAppDispatch()
  const { categoryName } = useParams()

  // запрос на изменение
  useEffect(() => {
    dispatch(filterCategory({ data: dataFilter, filter: categoryName, page: currentPage }))
  }, [dataFilter, categoryName])

  return (
    <section className='category'>
      <h2 style={{ position: 'sticky' }} className='title'>{`${categoryData.length} товаров`}</h2>
      <div className='category__wrapper'>
        <CategoryFilters />
        <div className='category__content'>
          <CategorySort />
          <div className='category__cards'>
            {categoryStatus === 'loading' && getSkeletonCards(6)}
            {categoryStatus === 'success' && getCards(categoryData)}
            <div className='category__pagination'>
              <Pagination
                // onChange={(evt, page) => console.log(page)}
                shape='rounded'
                count={5}
                color='primary'
                size='large'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Category
