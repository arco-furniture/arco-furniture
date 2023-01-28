import React, { memo } from 'react'
import { specsNamesTypes } from './types'
import { specsNames } from 'app/constants'

const ProductSpecs: React.FC<any> = ({ specs }) => {
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
