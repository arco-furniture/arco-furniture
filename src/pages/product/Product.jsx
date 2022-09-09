import {useState} from "react";
import {useSelector} from "react-redux";
import {productSelector} from "../../redux/product/productSlice";
import ProductParams from "./ProductParams";
import ProductSpecs from "./ProductSpecs";
import ProductSlides from "./ProductSlides";
import ProductPreview from "./ProductPreview";

const Product = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const {product} = useSelector(productSelector)
    const {productImages} = product;

    return(
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

export default Product;