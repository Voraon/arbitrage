
import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "../reducer/counterSlice";

const rootReducer= combineReducers({
    counter:counterReducer
});

export default rootReducer;