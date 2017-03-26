import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import store from './store';
import { Main, Login, Signup, UserHome } from './components';
import TakePicture from './components/TakePicture';
import Dashboard from './components/Dashboard'
import { me } from './reducer/user';

//const whoAmI = store.dispatch(me());

// const requireLogin = (nextRouterState, replace, next) =>
//   whoAmI
//     .then(() => {
//       const { user } = store.getState();
//       if (!user.id) replace('/login');
//       next();
//     })
//     .catch(err => console.log(err));

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={TakePicture}>
        <Route path="photo" component={TakePicture} />
      </Route>
      <Route path="dashboard" component={Dashboard} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
