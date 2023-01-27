import React, { memo, useEffect } from 'react'
import CategoryFilters from './CategoryFilters'
import { Pagination } from '@mui/material'
import { getSkeletonCards } from '../../utils/getSkeletonCards'
import { getCards } from '../../utils/getCards'
import CategorySort from './CategorySort'
import { useParams } from 'react-router-dom'
import { useCategory } from '../../hooks/useStateSelectors'
import { useActions } from '../../hooks/useActions'
import CategoryNull from 'pages/category/CategoryNull'
import { useQuery } from 'react-query'
import { CategoryService } from '../../services/category.service'

const Category: React.FC = () => {
  const { dataFilter, currentPage, sort } = useCategory()
  const { setChangePage } = useActions()
  const { categoryName } = useParams()

  useEffect(() => {
    setChangePage(1)
  }, [categoryName])

  const {
    isLoading,
    refetch,
    isSuccess,
    data: items,
  } = useQuery(
    'change filters category',
    () => CategoryService.filterCategory({ data: dataFilter, filter: categoryName, page: currentPage, sort }),
    {
      enabled: false,
    },
  )

  useEffect(() => {
    refetch()
  }, [dataFilter, categoryName, currentPage, sort])

  return (
    <section className='category'>
      <h2 style={{ position: 'sticky' }} className='category__title'>{`${items?.length} товаров`}</h2>
      <div className='category__wrapper'>
        <CategoryFilters />
        <div className='category__content'>
          <CategorySort />
          {items?.length === 0 && isSuccess ? (
            <CategoryNull />
          ) : (
            <div className='category__cards'>
              {isLoading && getSkeletonCards(6)}
              {items?.data?.length && getCards(items.data)}
              <div className='category__pagination'>
                <Pagination
                  onChange={(_evt, page) => setChangePage(page)}
                  shape='rounded'
                  count={items?.allPages}
                  color='primary'
                  size='large'
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default memo(Category)
