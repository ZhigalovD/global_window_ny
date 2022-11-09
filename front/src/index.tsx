import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import { store } from "./store";
import 'normalize.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
      <BrowserRouter basename={"/global_window_ny"}>
          <App />
      </BrowserRouter>
  </Provider>
);
