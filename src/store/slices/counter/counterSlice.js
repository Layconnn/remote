import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 50
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
        }
    }
})

export const { increase, decrease, highest, lowest } = counterSlice.actions;

export default counterSlice.reducer;