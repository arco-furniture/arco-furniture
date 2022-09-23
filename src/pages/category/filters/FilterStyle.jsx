import Chip from "@mui/material/Chip";
import {useEffect} from "react";
import {categorySelector, setSearchStyles, setFilteredData} from "../../../redux/category/categorySlice"
import {useDispatch, useSelector} from "react-redux";

const FilterStyle = () => {
    const activeStyles = {backgroundColor: '#4675CE', opacity: 0.6, color: '#fff'}
    const defaultStyles = {backgroundColor: '#F5F5F5', color: '#555'}
    const {searchStyles, fetchData, filterPrice, searchColors, searchMaterial} = useSelector(categorySelector);
    const dispatch = useDispatch();
    const styles = [
        {style: "Классический"},
        {style: "Прованс"},
        {style: "Модерн"},
        {style: "Лофт"},
        {style: "Скандинавский"},
    ]

    useEffect(() => {
        const limitStyle = searchStyles.length !== styles.length;
        if (searchStyles.length || !limitStyle) {
            const filterDataStyles = fetchData.filter((item) => {
                const findSpecs = item.specs.find((item) => item.specsId === "style")
                return searchStyles.some((item) => item.style === findSpecs.value)
            })
            dispatch(setFilteredData(filterDataStyles))
        } else {
            dispatch(setFilteredData(fetchData))
        }
    },[searchMaterial, searchStyles, searchColors, filterPrice])

    return(
        <div className="filters__filter-style">
            <ul>
                {
                    styles.map((item, index) => {
                        const findStyle = searchStyles.find((searchItem) => searchItem.style === item.style)
                        return(
                            <li key={index}>
                                <Chip
                                    variant="outlined"
                                    style={findStyle ? activeStyles : defaultStyles}
                                    label={item.style}
                                    onClick={() => dispatch(setSearchStyles(item.style))}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default FilterStyle;