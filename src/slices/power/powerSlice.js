import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    power: 'off'
}

export const powerSlice = createSlice({
    name: 'shazam',
    initialState,
    reducers: {
        start: (state) => {
            state.power = "on";
        },
        stop: (state) => {
            state.power = "off";
        }
    }
})

export const { start, stop } = powerSlice.actions;

export default powerSlice.reducer;