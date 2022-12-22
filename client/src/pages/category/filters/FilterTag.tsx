import Tag from '../../../components/tag/Tag'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { setTags } from '../../../redux/category/categorySlice'

const FilterTag: React.FC = () => {
  const tags = [{ tag: 'discount' }, { tag: 'top' }, { tag: 'eco' }, { tag: 'new' }]
  const searchTags = useAppSelector((state) => state.category.dataFilter.tags)
  const dispatch = useAppDispatch()
  const isExcess = searchTags.length + 1 >= tags.length

  const onClickButtonStyle = (tag: string) => {
    const findAlreadyAdded = searchTags.find((str) => str === tag)
    if (findAlreadyAdded) {
      const removeAlreadyAdded = searchTags.filter((str) => str !== findAlreadyAdded)
      dispatch(setTags(removeAlreadyAdded))
    } else {
      dispatch(setTags(isExcess ? [] : [...searchTags, tag]))
    }
  }

  return (
    <div className='filters__filter-tag'>
      <ul>
        {tags.map((item, index) => {
          let addedInFilter = searchTags.some((tag) => tag === item.tag)
          if (!searchTags.length) {
            addedInFilter = true
          }
          return (
            <button className='filters__tagButton' key={index} onClick={() => onClickButtonStyle(item.tag)}>
              <Tag tag={item.tag} isFilter addedInFilter={addedInFilter} />
            </button>
          )
        })}
      </ul>
    </div>
  )
}

export default FilterTag
