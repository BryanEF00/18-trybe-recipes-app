import React from 'react';
import { Route } from 'react-router-dom';

const li = '/ foods /drinks /foods/:id /drinks/:id /foods/:id/in-progress /drinks/:id-da-receita/in-progress /explore /explore/foods /explore/drinks /explore/foods/ingredients /explore/drinks/ingredients /explore/foods/nationalities /profile /done-recipes /favorite-recipes';

const list = li.split(' ');

const routeBuilder = list
  .map((path) => (<Route exact path={ path } key={ path } component="" />));

export default routeBuilder;
