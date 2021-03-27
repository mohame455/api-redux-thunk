import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk";

const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), devtools)
);

export default store;
