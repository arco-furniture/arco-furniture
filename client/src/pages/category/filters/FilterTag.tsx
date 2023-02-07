import React, { memo } from 'react'
import { useActions } from '../../../hooks/useActions'
import { useCategory } from '../../../hooks/useStateSelectors'
import { Tag } from 'components'
// eslint-disable-next-line import/named
import { tagType } from 'pages/category/types'

const FilterTag: React.FC = (): JSX.Element => {
  const { setTags } = useActions()
  const { dataFilter } = useCategory()
  const searchTags = dataFilter.tags
  const tags: tagType[] = [{ tag: 'discount' }, { tag: 'top' }, { tag: 'eco' }, { tag: 'new' }]
  const isExcess = searchTags.length + 1 >= tags.length

  const onClickButtonStyle = (tag: string) => {
    const findAlreadyAdded = searchTags.find((str: string) => str === tag)
    if (findAlreadyAdded) {
      const removeAlreadyAdded = searchTags.filter((str: string) => str !== findAlreadyAdded)
      setTags(removeAlreadyAdded)
    } else {
      setTags(isExcess ? [] : [...searchTags, tag])
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

export default memo(FilterTag)
