import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    channel: 0
}

export const channelSlice = createSlice({
    name: 'channels',
    initialState,
    reducers: {
        One: (state) => {
            state.channel = 1;
        },
        Two: (state) => {
            state.channel = 2;
        },
        Three: (state) => {
            state.channel = 3;
        },
        Four: (state) => {
            state.channel = 4;
        },
        Five: (state) => {
            state.channel = 5;
        },
        Six: (state) => {
            state.channel = 6;
        },
        Seven: (state) => {
            state.channel = 7;
        },
        Eight: (state) => {
            state.channel = 8;
        },
        Nine: (state) => {
            state.channel = 9;
        },
        Ten: (state) => {
            state.channel = 0;
        }
    }
})

export const { One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten } = channelSlice.actions;

export default channelSlice.reducer;