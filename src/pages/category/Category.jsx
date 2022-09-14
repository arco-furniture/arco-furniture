import {paramsSelector, categorySelector, fetchDataCategory} from "../../redux/category/categorySlice";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import CategoryFilters from "./CategoryFilters";
import {Pagination} from "@mui/material";
import {getSkeletonsCard} from "../../utils/getSkeletonsCard"
import {getCards} from "../../utils/getCards"
import CategorySort from "./CategorySort";

const Category = () => {
    const params = useSelector(paramsSelector)
    const {categoryData, categoryStatus} = useSelector(categorySelector)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDataCategory(''))
    }, [])

    return(
        <section className="category">
            <h2 style={{position: 'sticky'}} className="title">{`${params.name} ${categoryData.length} товаров`}</h2>
            <div className="category__wrapper">
                <CategoryFilters/>
                <div className="category__content">
                    <CategorySort/>
                    <div className="category__cards">
                        {categoryStatus === 'loading' && getSkeletonsCard(6)}
                        {categoryStatus === 'success' && getCards(categoryData)}
                        <div className="category__pagination">
                            <Pagination count={20} color="primary" size="large" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Category;