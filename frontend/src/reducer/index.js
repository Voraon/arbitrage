
import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import counterReducer from "./counterSlice";
import testReducer from "./testSlice";

const persistConfig = (key)=>({
    key,
    storage,
    // whitelist:'testRedx'
  });
   
const rootReducer= combineReducers({
    count: persistReducer(persistConfig("counter"), counterReducer) ,
    test:persistReducer(persistConfig("tester"), testReducer)
 });

// export const appReducer=(state, action)=>{

// }
 
export default rootReducer;