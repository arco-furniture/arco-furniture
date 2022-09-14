import {Button, Slider, TextField} from "@mui/material";
import {setCurrentColor} from "../../../redux/product/productSlice";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const colors = [
    {color: "#E4E4E4", exist: true},
    {color: "#E9D777", exist: false},
    {color: "#96314A", exist: true},
    {color: "#906F48", exist: true},
    {color: "#58B988", exist: true},
    {color: "#2B7493", exist: false},
    {color: "#1C2537", exist: true}
]

const FilterColor = () => {
    return (
        <div className="filters__filter-color">
            <ul>
                {
                    colors.map((item, index) => {
                        return (
                            <li key={index}>
                                <Button
                                    style={{backgroundColor: item.color}}
                                    variant="contained">
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