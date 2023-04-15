import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    power: 'off'
}

export const powerSlice = createSlice({
    name: 'shazam',
    initialState,
    reducers: {
        start: (state) => {
            state.power = 'on';
        }
    }
})

export const { start } = powerSlice.actions;

export default powerSlice.reducer;