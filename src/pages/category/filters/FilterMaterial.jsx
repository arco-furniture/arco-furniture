import {MenuItem, TextField} from "@mui/material";
import {useEffect} from "react";
import {categorySelector, setSearchMaterial, setFilteredData } from "../../../redux/category/categorySlice"
import {useSelector, useDispatch} from "react-redux";

const FilterMaterial = () => {
    const {searchMaterial, fetchData, searchStyles, searchColors, filterPrice, categoryData} = useSelector(categorySelector)
    const dispatch = useDispatch();

    const materials = [
        {material: "Все",},
        {material: "Массив",},
        {material: "ЛДСП",},
        {material: "МДФ",},
    ];

    useEffect(() => {
        if (searchMaterial !== "Все") {
            const filterDataMaterial = fetchData.filter((data) => {
                const findSpecs = data.specs.find((item) => item.specsId === "material")
                return findSpecs.value === searchMaterial
            })
            dispatch(setFilteredData(filterDataMaterial))
        } else {
            dispatch(setFilteredData(fetchData))
        }
    },[searchMaterial])

    return (
        <div className="filters__filter-material">
            <TextField
                select
                size="small"
                fullWidth
                value={searchMaterial}
                onChange={(event) => dispatch(setSearchMaterial(event.target.value))}
                margin="none"
            >
                {
                    materials.map((item) => {
                        return (
                            <MenuItem
                                style={{marginTop: '-5px'}}
                                key={item.material}
                                value={item.material}
                            >
                            <span className="filters__filter-item">
                                {item.material}
                            </span>
                            </MenuItem>
                        )
                    })}
            </TextField>
        </div>
    )
}

export default FilterMaterial;