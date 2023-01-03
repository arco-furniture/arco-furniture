import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { ProductParams, ProductSpecs, ProductSlides, ProductPreview } from './index'
import { useParams } from 'react-router-dom'
import { fetchProduct } from '../../redux/product/asyncActions'

const Product = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const product = useAppSelector((state) => state.product.productData)
  const { productImages } = product
  const dispatch = useAppDispatch()
  const { productId } = useParams()

  useEffect(() => {
    dispatch(fetchProduct(productId))
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
