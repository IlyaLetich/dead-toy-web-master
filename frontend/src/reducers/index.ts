import { combineReducers } from "redux";
import { languageReducer } from "./language";

export const rootReducer = combineReducers({
    language: languageReducer,
});