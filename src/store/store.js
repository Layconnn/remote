import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import counterReducer from '../store/slices/counter/counterSlice';
import channelReducer from '../store/slices/channels/channelSlice';
import powerReducer from '../store/slices/power/powerSlice';
import { persistReducer, persistStore } from 'redux-persist';


const persistConfig = {
    key: 'root',
    storage
  }

const allReducers = combineReducers({
    counter: counterReducer,
    channels: channelReducer,
    switch: powerReducer
})

  const persistedReducer = persistReducer(persistConfig, allReducers)

export const store = configureStore({
    reducer: persistedReducer
})

export const persistor = persistStore(store)