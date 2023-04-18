import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increase: (state) => {
            state.count += 1;
        },
        decrease: (state) => {
            state.count -= 1;
        },
        constant: (state) => {
            state.count = 50;
        },
        empty: (state) => {
            state.count = 0;
        }
    }
})

export const { increase, decrease, constant, empty } = counterSlice.actions;

export default counterSlice.reducer;