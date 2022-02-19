import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux";
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

