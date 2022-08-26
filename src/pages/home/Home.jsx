import React from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Chip from '@mui/material/Chip';
import {useDispatch, useSelector} from "react-redux";
import { testSelector } from "../../redux/test/testSlice";
import {plusCount, minusCount} from "../../redux/test/testSlice"

// Пример использования material ui / redux toolkit
const Home = () => {
    // useSelector вытаскивает состояние
    const {count} = useSelector(testSelector);
    // а через useDispatch прокидываем экшены для изменения состояния
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button size="large" onClick={() => dispatch(minusCount())}>-</Button>
                <Button size="large" onClick={() => dispatch(plusCount())}>+</Button>
            </ButtonGroup>
            <Chip label={count} variant="outlined"/>
        </React.Fragment>
    )
}

export default Home;