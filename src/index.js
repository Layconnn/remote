import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <PersistGate persistor={persistor}>
    <App />
  </PersistGate>
  </Provider>
  </React.StrictMode>
);

