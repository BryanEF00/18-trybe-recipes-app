import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { Switch } from 'react-router-dom';
import './App.css';
import routeBuilder from './helpers/routeBuilder';
import { mealByName, requestApi } from './services/ApiServece';

function App() {
  useEffect(() => {
    requestApi(mealByName, '').then((response) => console.log(response));
  }, []);

  return (
    <Switch>
      {routeBuilder}
    </Switch>
  );
}

export default App;
