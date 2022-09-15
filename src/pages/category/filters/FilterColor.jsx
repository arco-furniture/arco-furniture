import {Button} from "@mui/material";
import {useState} from "react";
import CheckIcon from '@mui/icons-material/Check';

const FilterColor = () => {
    const [searchColors, setSearchColors] = useState([]);
    const colors = [
        {nameColor: "gray", color: "#E4E4E4"},
        {nameColor: "yellow", color: "#E9D777"},
        {nameColor: "vinous", color: "#96314A"},
        {nameColor: "brown", color: "#906F48"},
        {nameColor: "green", color: "#58B988"},
        {nameColor: "blue", color: "#2B7493"},
        {nameColor: "black", color: "#1C2537"}
    ]

    const handleSearchColors = (currentColorName) => {
        const findColor = searchColors.find((item) => item.nameColor === currentColorName);

        if (findColor) {
            const filterColor = searchColors.filter((item) => item.nameColor !== currentColorName)
            setSearchColors(filterColor)
        } else {
            setSearchColors([...searchColors, {nameColor: currentColorName}])
        }
    }

    console.log(searchColors)

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
                                    onClick={() => handleSearchColors(obj.nameColor)}
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