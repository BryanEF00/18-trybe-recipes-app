import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Switch } from 'react-router-dom';
import './App.css';
import routeBuilder from './helpers/routeBuilder';

function App() {
  return (
    <Switch>
      {routeBuilder}
    </Switch>
  );
}

export default App;
