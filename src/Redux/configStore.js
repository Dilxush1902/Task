import {applyMiddleware, createStore} from "redux";
import {reducer} from "./Redux/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {logger} from "redux-logger/src";
 export 	const store = createStore(reducer,composeWithDevTools(applyMiddleware(logger)))