import React, { memo, useState } from 'react'
import { ProductParams, ProductSpecs, ProductSlides, ProductPreview } from './index'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { ProductService } from '../../services/product.service'

const Product = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const { productId } = useParams()
  const { data, isSuccess } = useQuery('get product', () => ProductService.getProduct(productId))

  return (
    isSuccess && (
      <section className='product'>
        <ul className='product__wrapper'>
          <ProductPreview thumbsSwiper={thumbsSwiper} images={data.productImages} />
          <ProductParams product={data} />
          <ProductSlides setThumbsSwiper={setThumbsSwiper} images={data.productImages} />
          <ProductSpecs specs={data.specs} />
        </ul>
      </section>
    )
  )
}

export default memo(Product)
