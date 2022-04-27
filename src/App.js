import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import routeBuilder from './helpers/routeBuilder';
import Drinks from './pages/Drinks';
import Foods from './pages/Foods';
import Login from './pages/Login';

function App() {
  console.log(routeBuilder);

  return (
    <Switch>
      <Route exact path="/" component={ Login } />
      <Route path="/foods" component={ Foods } />
      <Route path="/drinks" component={ Drinks } />
    </Switch>
  );
}

export default App;
