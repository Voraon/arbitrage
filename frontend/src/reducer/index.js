
import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const rootReducer= combineReducers({
    counterSlice
});

export default rootReducer;