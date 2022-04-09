import {combineReducers} from "redux";
import {usersReducer} from "./usersReducer";
import {jobReducer} from "./jobReducer";

export const reducer = combineReducers({
	usersReducer,
	jobReducer
})