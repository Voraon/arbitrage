
import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import counterReducer from "./counterSlice";
import testReducer from "./testSlice";

const persistConfig = (key)=>({
    key,
    storage,
  });
   
  const rootReducer= combineReducers({
    count: persistReducer(persistConfig("counRdx"), counterReducer) ,
    test:persistReducer(persistConfig("testRedx"), testReducer)
 });
 
 export default rootReducer;