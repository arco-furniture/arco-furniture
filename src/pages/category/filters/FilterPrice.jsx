import {InputAdornment, Slider, TextField} from "@mui/material";
import {useCallback, useEffect, useRef, useState} from "react";
import {getPriceWithFormat} from "../../../utils/getPriceWithFormat";
import {
    categorySelector,
    filterPriceSelector,
    setFilteredData,
    setCategoryPrice
} from "../../../redux/category/categorySlice"
import {useDispatch, useSelector} from "react-redux";
import {debounce} from "lodash";
import React from "react"
import {getMinMaxPrice} from "../../../utils/getMinMaxPrice";

const FilterPrice = () => {
    const minMaxPrice = useSelector(filterPriceSelector);
    const [value, setValue] = useState(minMaxPrice);
    const dispatch = useDispatch();
    const {categoryData, searchStyles} = useSelector(categorySelector);
    const isMounted = useRef(false);

    const inputPropsTextField = (text) => {
        return {startAdornment: <InputAdornment sx={{fontSize: '2px'}} position="start">{text}</InputAdornment>}
    }

    useEffect(() => {
        setValue(minMaxPrice)
    }, [minMaxPrice])


    useEffect(() => {
            updateDebouncePrice(value)
    }, [value, searchStyles])


    const updateDebouncePrice = useCallback(
        debounce((value) => {
            getCardsForPrice(value)
        }, 500), []
    );

    const getCardsForPrice = (value) => {
        if (categoryData.length) {
            const filteredCards = categoryData.filter((item) => item.price >= value[0] && item.price <= value[1])
            dispatch(setFilteredData(filteredCards))
        }
    }

    const handleChangeValue = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="filters__filter-price">
            <div className="filters__filter-box">
                <TextField
                    size="small"
                    value={getPriceWithFormat(value[0])}
                    inputProps={{style: {fontSize: 14, textAlign: 'start'}}}
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
                onChange={handleChangeValue}
                size="small"
                step={5000}
                min={minMaxPrice[0]}
                max={minMaxPrice[1]}
            />
        </div>
    )
}

export default React.memo(FilterPrice);