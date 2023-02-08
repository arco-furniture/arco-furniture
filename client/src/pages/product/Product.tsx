import React, { memo, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import ProductParams from './ProductParams'
import ProductSpecs from './ProductSpecs'
import ProductSlides from './ProductSlides'
import ProductPreview from './ProductPreview'
import { ProductService } from '../../services/product.service'

const Product: React.FC = (): JSX.Element => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const { productId } = useParams()
  const { data, isSuccess } = useQuery('get product', () => ProductService.getProduct(productId))
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
