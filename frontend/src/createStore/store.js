import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import persistStore from "redux-persist/lib/persistStore";
import rootReducer from "../reducer";

const store= configureStore({
    reducer:rootReducer,
    devTools:process.env.NODE_ENV === 'development',
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck:false,
    }).concat(logger),
});

if (module.hot) {
  module.hot.accept('../reducer', () => {
    const newRootReducer = require('../reducer').default
    store.replaceReducer(newRootReducer)
  })
}

export default store;
export const persistor= persistStore(store,{manualPersist:true});
