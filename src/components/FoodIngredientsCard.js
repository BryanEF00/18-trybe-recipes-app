import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import FoodsContext from '../context/FoodsContext';
import { byMainIngredient, requestApi } from '../services/ApiServece';
import './FoodIngredientsCard.css';

function FoodIngredientsCard({ data: { ingredient: { strIngredient }, index } }) {
  const { handleExploreIngredient } = useContext(FoodsContext);
  const history = useHistory();

  const handleClick = async () => {
    const filterByIngredient = await requestApi(byMainIngredient, strIngredient);
    handleExploreIngredient(filterByIngredient.meals);
    history.push('/foods');
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
        src={ `https://www.themealdb.com/images/ingredients/${strIngredient}-Small.png` }
        alt={ strIngredient }
      />
      <div
        data-testid={ `${index}-card-name` }
        className="ingredientCardName"
      >
        {strIngredient}
      </div>
    </button>
  );
}

FoodIngredientsCard.propTypes = {
  strIngredient: PropTypes.string,
  index: PropTypes.number,
}.isRequired;

export default FoodIngredientsCard;
