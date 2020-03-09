// == Import : npm
import { createStore, compose, applyMiddleware } from "redux";

// == Import : local
import quote from "src/reducers/quote";
import ajaxMiddleware from "src/middleware/ajaxMiddleware";

// == Enhancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(ajaxMiddleware));

// == Store
const store = createStore(quote, enhancers);

// == Export
export default store;
