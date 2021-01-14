import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './App';
import reportWebVitals from "./reportWebVitals";
import store from "./redux/redux-store";
import {Provider} from "react-redux";
import './index.css';


const renderApp = (store) => {

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

};

renderApp(store);
store.subscribe( () => {
   // let state = store.getState();
   renderApp(store)
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


