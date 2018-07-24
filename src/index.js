import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import '../node_modules/toastr/build/toastr.min.css' 

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import AppRouter from './AppRouter';

import {Provider} from "react-redux"
import {createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import rootReducer from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
); 



setAuthToken(localStorage.getItem("authtoken"))

const jsx = 
(<Provider store= {store} >
    <AppRouter/>
</Provider>)


ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
