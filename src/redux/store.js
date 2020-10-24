import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {headerReducer} from "./header-reducer";
import {controlReducer} from "./control-reducer";
import {contentReducer} from "./content-reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const combinedReducers = combineReducers({
    headerReducer,
    controlReducer,
    contentReducer
})

const store = createStore(combinedReducers, composeEnhancers(applyMiddleware()))

export default store