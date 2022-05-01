import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import DrinksContext from '../context/DrinksContext';
import { byIngredient, requestApi } from '../services/ApiServece';
import './DrinkIngredientsCard.css';

function DrinkIngredientsCard({ data: { ingredient: { strIngredient1 }, index } }) {
  const { handleExploreIngredient } = useContext(DrinksContext);
  const history = useHistory();

  const handleClick = async () => {
    const filterByIngredient = await requestApi(byIngredient, strIngredient1);
    handleExploreIngredient(filterByIngredient.drinks);
    history.push('/drinks');
  };

  return (
    <button
      data-testid={ `${index}-ingredient-card` }
      type="button"
      className="ingredientsCard"
      onClick={ handleClick }
    >
      <img
        data-testid={ `${index}-card-img` }
        className="ingredientCardImg"
        src={ `https://www.thecocktaildb.com/images/ingredients/${strIngredient1}-Small.png` }
        alt={ strIngredient1 }
      />
      <div
        data-testid={ `${index}-card-name` }
        className="ingredientCardName"
      >
        {strIngredient1}
      </div>
    </button>
  );
}

DrinkIngredientsCard.propTypes = {
  strIngredient1: PropTypes.string,
  index: PropTypes.number,
}.isRequired;

export default DrinkIngredientsCard;
