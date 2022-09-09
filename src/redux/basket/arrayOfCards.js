import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";
import img from '../../images/card-img.svg';

const dataCards = [
    {
        id: 1,
        name: 'Модульная кухня Лондон',
        price: 5017,
        benefit: 1100,
        articul: 4874678,
        img: img,
        count: 1
    },
    {
        id: 2,
        name: 'Модульная кухня Москва',
        price: 4017,
        benefit: 1300,
        articul: 1172158,
        img: img,
        count: 1
    },
    {
        id: 3,
        name: 'Модульная кухня Минск',
        price: 3717,
        benefit: 1230,
        articul: 2154642,
        img: img,
        count: 1
    },
]

const initialState = {
    data: [],
}

export const arrayOfCards = createSlice({
    name: 'data',
    initialState,

    reducers: {
        add(state) {
            state.data.push(dataCards[Math.floor(Math.random() * (2 - 0 + 1)) + 0])
        },
        remove(state) {
            console.log(state.data, '3333')
        },
    },
})

export const arraySelector = (state) => state.arrayReducer
export const { add, remove } = arrayOfCards.actions;
export default arrayOfCards.reducer;