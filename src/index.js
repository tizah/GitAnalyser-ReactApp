import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { userReducer } from "./reducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import { watchLoadUserData } from "./saga";

import { BrowserRouter as Router, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

// initializing saga middleware for the store
const sagaMiddleware = createSagaMiddleware();

// creating the store with our reducer
const store = createStore(
  combineReducers({
    user: userReducer
  }),
  applyMiddleware(sagaMiddleware)
);

// triggering watchLoadUserData when there is a LOAD_USER_DATA
sagaMiddleware.run(watchLoadUserData);

ReactDOM.render(
  // <Router>
  //   <Route component={App} />
  // </Router>,
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
