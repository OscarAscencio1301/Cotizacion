import { combineReducers, createStore } from "redux";
import { cotizacionReducers } from "../reducers/cotizacionReducer";

const reducers = combineReducers({
    cotizacion: cotizacionReducers
})

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());