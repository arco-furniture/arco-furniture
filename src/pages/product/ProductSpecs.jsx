import {useSelector} from "react-redux";
import {productSelector} from "../../redux/product/productSlice";

const ProductSpecs = () => {
    const {product} = useSelector(productSelector)
    const specsNames = [
        {name: "Стиль", specsNameId: "style"},
        {name: "Материал", specsNameId: "material"},
        {name: "Размер", specsNameId: "size"}
    ]

    const {specs} = product;

    return (
        <li className="product__specs product__background">
            <h3 className="subtitle">Характеристики</h3>
            <div className="product__specs-wrapper">
                <ul>
                    {
                        specsNames.map((item) => {
                            return (
                                <li key={item.specsNameId}>{`${item.name}:`}</li>
                            )
                        })
                    }
                </ul>
                <ul>
                    {
                        specs.map((item) => {
                            return (
                                <li key={item.specsId}>{item.value}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </li>
    )
}

export default ProductSpecs;