import {Button} from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import {
    setSearchColors,
    searchColorSelector,
    setFilteredData,
    categorySelector
} from "../../../redux/category/categorySlice"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

const FilterColor = () => {
    const searchColors = useSelector(searchColorSelector);
    const {categoryData} = useSelector(categorySelector)
    const dispatch = useDispatch();
    const colors = [
        {nameColor: "gray", color: "#E4E4E4"},
        {nameColor: "yellow", color: "#E9D777"},
        {nameColor: "vinous", color: "#96314A"},
        {nameColor: "brown", color: "#906F48"},
        {nameColor: "green", color: "#58B988"},
        {nameColor: "blue", color: "#2B7493"},
        {nameColor: "black", color: "#1C2537"}
    ]

    useEffect(() => {
        const limitColors = searchColors.length !== colors.length;
        if (searchColors.length || !limitColors) {
            const filterData = categoryData.filter((item) => {
                categoryData.colors.filter((color) => {

                })

            })

            console.log(filterData)
        }

    }, [searchColors])


    return (
        <div className="filters__filter-color">
            <ul>
                {
                    colors.map((obj) => {
                        const isSearch = searchColors.find((item) => item.nameColor === obj.nameColor)
                        return (
                            <li key={obj.nameColor}>
                                <Button
                                    style={{backgroundColor: obj.color}}
                                    onClick={() => dispatch(setSearchColors(obj.nameColor))}
                                    variant="contained">
                                    {
                                        isSearch &&
                                        <CheckIcon/>
                                    }
                                </Button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default FilterColor;