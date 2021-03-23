import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';

import Login from './components/Login';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';
import FriendList from './components/FriendList';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello Friends</h1>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
        <li>
          <Link to="/protected">Friends</Link>
        </li>
      </ul>
      <Switch>
        <PrivateRoute exact path="/protected" component={FriendList} />
        <Route path='/login' component={Login} />
        <Route path='/logout' component={Logout} />
        <Route component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
