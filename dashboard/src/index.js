import React, {lazy} from 'react';
import './index.css'
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import {Toaster} from 'react-hot-toast'
import store from './store/index'
import {Provider} from 'react-redux'
const App = lazy(() => import('./App'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Provider store={store}>
         <App />
         <Toaster 
           toastOptions={{
            position : 'top-right',
            style : {
              background : '#283046',
              color : 'white'
            }
           }}
         />
      </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
