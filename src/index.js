import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";

import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import rootReducer from "./store";

import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

export default store;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
