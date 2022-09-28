import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchProduct, productSelector} from "../../redux/product/productSlice";
import {ProductParams, ProductSpecs, ProductSlides, ProductPreview} from "./index"
import {useLocation} from "react-router-dom";

const Product = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const {product} = useSelector(productSelector)
    const {productImages} = product;
    const location = useLocation();
    const dispatch = useDispatch();
    const idProduct = location.pathname.split('/').reverse()[0]

    useEffect(() => {
        if (!product.id) {
            dispatch(fetchProduct(idProduct))
        }
    },[])

    return (
        <section className="product">
            <ul className="product__wrapper">
                <ProductPreview
                    thumbsSwiper={thumbsSwiper}
                    images={productImages}
                />
                <ProductParams/>
                <ProductSlides
                    setThumbsSwiper={setThumbsSwiper}
                    images={productImages}
                />
                <ProductSpecs/>
            </ul>
        </section>
    )
}

export default React.memo(Product);