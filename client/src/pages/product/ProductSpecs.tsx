import React, { memo } from 'react'
import { IProductSpecs, specsNamesTypes } from './types'
import { SPECS_NAME } from 'app/constants'

const ProductSpecs: React.FC<IProductSpecs> = ({ specs }) => (
  <li className='product__specs panel'>
    <h3 className='subtitle'>Характеристики</h3>
    <div className='product__specs-wrapper'>
      <ul>
        {SPECS_NAME?.map((item: specsNamesTypes) => (
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

export default memo(ProductSpecs)
