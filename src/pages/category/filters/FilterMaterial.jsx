import {InputAdornment, MenuItem, TextField} from "@mui/material";
import {useState} from "react";
import ParkIcon from '@mui/icons-material/Park';

const FilterMaterial = () => {
    const [currentMaterial, setCurrentMaterial] = useState("Все");

    const materials = [
        {material: "Все",},
        {material: "Массив",},
        {material: "ЛДСП",},
        {material: "МДФ",},
    ];

    const handleChange = (event) => {
        setCurrentMaterial(event.target.value);
    };

    return (
        <div className="filters__filter-material">
            <TextField
                select
                size="small"
                fullWidth
                value={currentMaterial}
                onChange={handleChange}
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