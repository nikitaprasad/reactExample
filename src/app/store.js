import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import mathReducer from "./reducers/mathReducer";
import userReducer from "./reducers/userReducer";

const store = createStore(
    combineReducers({ mathReducer, userReducer }),
    {},
    applyMiddleware(createLogger(), thunk)
);
export default store;