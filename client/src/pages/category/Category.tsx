import React, { useEffect } from 'react'
import CategoryFilters from './CategoryFilters'
import { Pagination } from '@mui/material'
import { getSkeletonCards } from '../../utils/getSkeletonCards'
import { getCards } from '../../utils/getCards'
import CategorySort from './CategorySort'
import { useParams } from 'react-router-dom'
import { useCategory } from '../../hooks/useStateSelectors'
import { useActions } from '../../hooks/useActions'

const Category: React.FC = () => {
  const { categoryData, categoryStatus, dataFilter, currentPage, allPages } = useCategory()
  const { setChangePage, filterCategory } = useActions()
  const { categoryName } = useParams()

  // запрос на изменение
  useEffect(() => {
    filterCategory({ data: dataFilter, filter: categoryName, page: currentPage })
  }, [dataFilter, categoryName, currentPage])

  return (
    <section className='category'>
      <h2 style={{ position: 'sticky' }} className='category__title'>{`${categoryData.length} товаров`}</h2>
      <div className='category__wrapper'>
        <CategoryFilters />
        <div className='category__content'>
          <CategorySort />
          <div className='category__cards'>
            {categoryStatus === 'loading' && getSkeletonCards(6)}
            {categoryStatus === 'success' && getCards(categoryData)}
            <div className='category__pagination'>
              <Pagination
                onChange={(_evt, page) => setChangePage(page)}
                shape='rounded'
                count={allPages}
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
