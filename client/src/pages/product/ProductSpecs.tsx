import React, { memo } from 'react'
import { specsNamesTypes } from './types'
import { specsTypes } from '../../types/basketTypes'

const ProductSpecs: React.FC<any> = ({ specs }) => {
  const specsNames: specsNamesTypes[] = [
    { name: 'Стиль', specsNameId: 'style' },
    { name: 'Материал', specsNameId: 'material' },
    { name: 'Размер', specsNameId: 'size' },
  ]

  return (
    <li className='product__specs panel'>
      <h3 className='subtitle'>Характеристики</h3>
      <div className='product__specs-wrapper'>
        <ul>
          {specsNames?.map((item: specsNamesTypes) => (
            <li key={item.specsNameId}>{`${item.name}:`}</li>
          ))}
        </ul>
        <ul>
          {specs?.map((item, index) => (
            <li key={index}>{Object.values(item)}</li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default memo(ProductSpecs)
