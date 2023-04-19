import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import counterReducer from '../slices/counter/counterSlice';
import channelReducer from '../slices/channels/channelSlice';
import powerReducer from '../slices/power/powerSlice';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';


const persistConfig = {
    key: 'root',
    storage
  }

const allReducers = combineReducers({
    counter: counterReducer,
    channels: channelReducer,
    shazam: powerReducer
})

  const persistedReducer = persistReducer(persistConfig, allReducers)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})

export const persistor = persistStore(store)