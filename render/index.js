import React from 'react';
import { render } from 'react-dom';
import App from '$component/App';
import { Router } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
import { Provider } from "mobx-react";
import CommonStore from "$stores/CommonStore";
const history = createHistory();

render(
  <Provider
    {...{
      CommonStore,
    }}
  >
    <Router history={history}>
      <App />
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
