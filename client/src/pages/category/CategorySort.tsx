import React, { useState } from 'react'
import { useActions } from '../../hooks/useActions'

const CategorySort: React.FC = () => {
  const { setCategorySort } = useActions()
  const [sortIndex, setSortIndex] = useState(0)

  const sortItems = [
    { name: 'По рейтингу', sortId: 'rating' },
    { name: 'По цене', sortId: 'price' },
    { name: 'По наименованию', sortId: 'title' },
  ]

  const handleSort = (index: number) => {
    setSortIndex(index)
    setCategorySort(sortItems[index].sortId)
  }

  return (
    <div className='category__sort panel'>
      <h3 className='category__sort-subtitle'>Сортировать: </h3>
      <ul>
        {sortItems.map((item, index) => (
          <li key={index} onClick={() => handleSort(index)}>
            <p style={{ color: sortIndex === index ? '#4675CE' : '#555555' }}>{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CategorySort
