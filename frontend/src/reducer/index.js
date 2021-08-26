
import { combineReducers } from "redux";
import counterReducer from "./counterSlice";
import testReducer from "./testSlice";


const rootReducer= combineReducers({
   count: counterReducer,
    test:testReducer
});

export default rootReducer;