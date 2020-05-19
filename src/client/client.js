import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {createStore, applyMiddleware}  from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';
import rootReducer from './reducers';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import {persistStore} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import logger from 'redux-logger';

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['news']
}

const reducer= persistReducer(persistConfig, rootReducer);
const store = createStore(reducer, window.INITIAL_STATE, applyMiddleware(thunk, logger));

export const persistor = persistStore(store);

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
        <PersistGate persistor={persistor}>
            <div>{renderRoutes(Routes)}</div>
        </PersistGate>    
        </BrowserRouter>
    </Provider>,
  document.querySelector('#root')
);