import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "../reducer";

const store= configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('../reducer', () => {
    const newRootReducer = require('../reducer').default
    store.replaceReducer(newRootReducer)
  })
}

export default store;
  
// export default store;
// import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../components/counterSlice';

// export default configureStore({
//   reducer: {
//     counter: rootReducer,
//   },
// });
