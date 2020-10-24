import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {headerReducer} from "./header-reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const combinedReducers = combineReducers({
    headerReducer
})

const store = createStore(combinedReducers, composeEnhancers(applyMiddleware()))

export default store