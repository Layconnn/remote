import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../slices/counter/counterSlice';
import channelReducer from '../slices/channels/channelSlice';
import powerReducer from '../slices/power/powerSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        channels: channelReducer,
        shazam: powerReducer
    }
})