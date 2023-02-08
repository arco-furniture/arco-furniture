import React, { memo, useEffect, useRef } from 'react'
import CategoryFilters from './CategoryFilters'
import { Pagination } from '@mui/material'
import { getCards } from '../../utils/getCards'
import CategorySort from './CategorySort'
import { useParams } from 'react-router-dom'
import { useCategory } from '../../hooks/useStateSelectors'
import { useActions } from '../../hooks/useActions'
import CategoryNull from 'pages/category/CategoryNull'
import { useQuery } from 'react-query'
import { CategoryService } from '../../services/category.service'
import CategoryNotFound from 'pages/category/CategoryNotFound'

const Category: React.FC = (): JSX.Element => {
  const { dataFilter, currentPage, sort } = useCategory()
  const { setChangePage } = useActions()
  const { categoryName } = useParams()
  const categoryRef = useRef<HTMLDivElement | null>(null)
  const executeScroll = () => categoryRef.current.scrollIntoView({ behavior: 'smooth' })

  useEffect(() => {
    setChangePage(1)
  }, [categoryName])

  const {
    isError,
    isSuccess,
    refetch,
    data: items,
  } = useQuery(
    ['change filters category', categoryName],
    () => CategoryService.filterCategory({ data: dataFilter, filter: categoryName, page: currentPage, sort }),
    {
      enabled: false,
      retry: false,
    },
  )

  useEffect(() => {
    refetch()
  }, [dataFilter, categoryName, currentPage, sort])

  const counter = items?.data ? `${items?.count} шт.` : ''

  return (
    <section className='category' ref={categoryRef}>
      <h2 style={{ position: 'sticky' }} className='category__title'>
        {counter}
      </h2>
      <div className='category__wrapper'>
        <CategoryFilters />
        <div className='category__content'>
          <CategorySort />
          {isError ? <CategoryNull /> : <></>}
          {items?.data?.length ? (
            <div className='category__cards'>
              {items?.data?.length && getCards(items.data)}
              <div className='category__pagination'>
                <Pagination
                  onClick={() => executeScroll()}
                  onChange={(_evt, page) => setChangePage(page)}
                  shape='rounded'
                  count={items?.allPages}
                  color='primary'
                  size='large'
                />
              </div>
            </div>
          ) : (
            <></>
          )}
          {!items?.count && isSuccess && <CategoryNotFound />}
        </div>
      </div>
    </section>
  )
}

export default memo(Category)
