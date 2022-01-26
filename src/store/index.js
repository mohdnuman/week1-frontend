import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from'../reducers/index';

let store;

export default function configureStore(){
    store=createStore(reducer,applyMiddleware(logger,thunk));

    return store;

}