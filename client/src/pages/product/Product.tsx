import React, { useEffect, useState } from 'react'
import { ProductParams, ProductSpecs, ProductSlides, ProductPreview } from './index'
import { useParams } from 'react-router-dom'
import { useProduct } from '../../hooks/useStateSelectors'
import { useActions } from '../../hooks/useActions'

const Product = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const { productData } = useProduct()
  const { fetchProduct } = useActions()
  const { productImages } = productData
  const { productId } = useParams()

  useEffect(() => {
    fetchProduct(productId)
  }, [productId])

  return (
    <section className='product'>
      <ul className='product__wrapper'>
        <ProductPreview thumbsSwiper={thumbsSwiper} images={productImages} />
        <ProductParams />
        <ProductSlides setThumbsSwiper={setThumbsSwiper} images={productImages} />
        <ProductSpecs />
      </ul>
    </section>
  )
}

export default React.memo(Product)
