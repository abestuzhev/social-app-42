import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import App from './App';
import './index.css';


console.log("index", store);
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// https://github.com/it-kamasutra/react-way-of-samurai/tree/2cedb1d1f42189f5330236a64d6deeb5e76b0833

