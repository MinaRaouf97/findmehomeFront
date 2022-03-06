import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import App from './App';
import store from './store/index';

import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(

    <Provider store={store}>
    <App />
    </Provider>
    // <App/>
 ,
  document.getElementById('root')
);

registerServiceWorker();

