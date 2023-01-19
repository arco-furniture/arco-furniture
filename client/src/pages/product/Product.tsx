import React, { useEffect, useState } from 'react'
import { ProductParams, ProductSpecs, ProductSlides, ProductPreview } from './index'
import { useParams } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { useProduct } from '../../hooks/useStateSelectors'

const Product = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const { productId } = useParams()
  const { getProduct } = useActions()
  const { productData } = useProduct()

  useEffect(() => {
    getProduct(productId)
  }, [])

  return (
    productData && (
      <section className='product'>
        <ul className='product__wrapper'>
          <ProductPreview thumbsSwiper={thumbsSwiper} images={productData.productImages} />
          <ProductParams product={productData} />
          <ProductSlides setThumbsSwiper={setThumbsSwiper} images={productData.productImages} />
          <ProductSpecs specs={productData.specs} />
        </ul>
      </section>
    )
  )
}

export default Product
