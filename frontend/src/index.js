import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import bookShelf from './redux/reducers/books.js'
import App from "./app"

let store = createStore(bookShelf, window.STATE_FROM_SERVER)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#container")
);
