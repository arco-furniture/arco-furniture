import { useAppSelector } from '../../hooks/redux'
import React from 'react'
import { specsNamesTypes } from './types'
import { specsTypes } from '../../types/basketTypes'

const ProductSpecs: React.FC = () => {
  const specs = useAppSelector((state) => state.product.productData.specs)
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
          {specs?.map((item: specsTypes) => (
            <li key={item.specsId}>{item.value}</li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default ProductSpecs
