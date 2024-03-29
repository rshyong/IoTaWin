import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import store from './store';
import { Main, Login, Signup, UserHome } from './components';
import TakePicture from './components/TakePicture';
import Dashboard from './components/Dashboard'
import Store from './components/Store'
import { me } from './reducer/user';


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Dashboard}>
      </Route>
      <Route path="photo" component={TakePicture} />
      <Route path="dashboard" component={Dashboard} />
      <Route path="store" component={Store} />
      <Route path="store/:id" component={Store} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
