

const initialState = {
    data: {
        delivery: '',
        payment: '',
        status: false
    },
}

export const dataFormOrder = createSlice({
    name: 'dataForm',
    initialState,

    reducers: {
        getDelivery(data) {
            data.delivery
        },
        previousСount(state) {
            state.stage -= 1
        },
    },
})

export const stageSelector = (state) => state.stageReducer
export const { nextCount, previousСount } = numberOfStage.actions;
export default numberOfStage.reducer;