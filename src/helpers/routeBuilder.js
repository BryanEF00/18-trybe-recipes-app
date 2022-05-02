import React from 'react';
import { Route } from 'react-router-dom';
import DetailedDrinks from '../pages/DetailedDrinks';
import DetailedFoods from '../pages/DetailedFoods';
import DoneRecipes from '../pages/DoneRecipes';
import Drinks from '../pages/Drinks';
import Explore from '../pages/Explore';
import ExploreDrinks from '../pages/ExploreDrinks';
import ExploreDrinksIngredients from '../pages/ExploreDrinksIngredients';
import ExploreFoods from '../pages/ExploreFoods';
import ExploreFoodsIngredients from '../pages/ExploreFoodsIngredients';
import ExploreNacionalities from '../pages/ExploreNacionalities';
import FavoriteRecipes from '../pages/FavoriteRecipes';
import Foods from '../pages/Foods';
import InProgressDrinks from '../pages/InProgressDrinks';
import InProgressFoods from '../pages/InProgressFoods';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';

const pageList = [Login, Foods, Drinks, DetailedFoods, DetailedDrinks, InProgressFoods,
  InProgressDrinks, Explore, ExploreFoods, ExploreDrinks, ExploreFoodsIngredients,
  ExploreDrinksIngredients, ExploreNacionalities, NotFound, Profile, DoneRecipes,
  FavoriteRecipes];

const UrlList = [
  '/',
  '/foods',
  '/drinks',
  '/foods/:id',
  '/drinks/:id',
  '/foods/:id/in-progress',
  '/drinks/:id/in-progress',
  '/explore',
  '/explore/foods',
  '/explore/drinks',
  '/explore/foods/ingredients',
  '/explore/drinks/ingredients',
  '/explore/foods/nationalities',
  '/explore/drinks/nationalities',
  '/profile',
  '/done-recipes',
  '/favorite-recipes',
];

const routeBuilder = UrlList.map((path, index) => (
  <Route exact path={ path } key={ path } component={ pageList[index] } />
));

export default routeBuilder;
