import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';

import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello Friends</h1>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
      <Switch>
        <Route path='/login' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
