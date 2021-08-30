
import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import counterReducer from "./counterSlice";
import testReducer from "./testSlice";

const persistConfig = (key)=>({
    key,
    storage,
    // blacklist:['counter']
  });
// const counterConfig = {
//   key: 'counter',
//   storage: storage,
//   blacklist: ['tester']
// }
//   const testerconfig = {
//     key: 'tester',
//     storage: storage,
//     blacklist: ['counter']
//   }
const rootReducer= combineReducers({

  
  // count: persistReducer(counterConfig, counterReducer) ,
  // test: persistReducer(testerconfig, testReducer) ,
    count: persistReducer(persistConfig("counter"), counterReducer) ,
    test:persistReducer(persistConfig("tester"), testReducer)
 });

// export const appReducer=(state, action)=>{

// }
 
export default rootReducer;