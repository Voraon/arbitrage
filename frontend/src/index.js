import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import {Provider} from "react-redux";
import store,{persistor} from './createStore/store';
import LoadingView from './components/LoadingView';
import { BrowserRouter } from 'react-router-dom';


  console.log("persistor",persistor);
// persistor.purge();
// persistor.persist();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate persistor={persistor} loading={<LoadingView/>}>
          <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();