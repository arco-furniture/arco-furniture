import {InputAdornment, Slider, TextField} from "@mui/material";
import {useState} from "react";
import {getPriceWithFormat} from "../../../utils/getPriceWithFormat";

const FilterPrice = () => {
    const [value, setValue] = useState([10000, 100000]);
    const inputPropsTextField = (text) => {
        return {startAdornment: <InputAdornment sx={{fontSize: '2px'}} position="start">{text}</InputAdornment>}
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <div className="filters__filter-price">
            <div className="filters__filter-box">
                <TextField
                    size="small"
                    value={getPriceWithFormat(value[0])}
                    inputProps={
                    {style: {fontSize: 14, textAlign: 'start'}}}
                    InputProps={inputPropsTextField('от')}
                />
                <TextField
                    size="small"
                    variant="outlined"
                    value={getPriceWithFormat(value[1])}
                    inputProps={{style: {fontSize: 14, textAlign: 'start'}}}
                    InputProps={inputPropsTextField('до')}

                />
            </div>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                size="small"
                step={5000}
                min={10000}
                max={100000}
            />
        </div>
    )
}

export default FilterPrice;