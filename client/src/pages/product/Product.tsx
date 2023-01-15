import React, { useState } from 'react'
import { ProductParams, ProductSpecs, ProductSlides, ProductPreview } from './index'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { ProductService } from '../../services/product.service'

const Product = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const { productId } = useParams()
  const { isLoading, data, isError } = useQuery('get product', () => ProductService.getProduct(productId))

  return (
    <section className='product'>
      <ul className='product__wrapper'>
        {isLoading ? (
          <span>Идет загрузка</span>
        ) : (
          <>
            <ProductPreview thumbsSwiper={thumbsSwiper} images={data.productImages} />
            <ProductParams product={data} />
            <ProductSlides setThumbsSwiper={setThumbsSwiper} images={data.productImages} />
            <ProductSpecs />
          </>
        )}
      </ul>
    </section>
  )
}

export default React.memo(Product)
