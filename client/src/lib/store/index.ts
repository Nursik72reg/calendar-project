import {applyMiddleware, combineReducers, createStore, compose} from "redux";
import thunk from 'redux-thunk'
import reducersList from "./reducersList"
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducers = combineReducers(reducersList)


export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch