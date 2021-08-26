import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import {Provider} from "react-redux";
import store,{persistor} from './createStore/store';
import LoadingView from './components/LoadingView';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<LoadingView/>}>
      <App /></PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();