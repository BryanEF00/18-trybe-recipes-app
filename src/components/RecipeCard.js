import React from 'react';
import PropTypes from 'prop-types';

function RecipeCard(props) {
  const { data } = props;
  const { idDrink, strDrink, strDrinkThumb, drink } = data;
  const { index, idMeal, strMeal, strMealThumb } = data;
  const drinkCard = (
    <div
      className="card col-5 shadow p-3 mb-5 bg-body rounded"
      data-testid={ `${index}-recomendation-card` }
      key={ idDrink }
    >
      <img
        className="card-img-top"
        // data-testid={ `${index}-card-img` }
        src={ strDrinkThumb }
        alt={ strDrink }
        style={ { height: 100 } }
      />
      <div
        className="card-text"
        data-testid={ `${index}-recomendation-title` }
      >
        {strDrink}
      </div>
    </div>
  );

  const mealCard = (
    <div
      className="card col-5 shadow p-3 mb-5 bg-body rounded"
      data-testid={ `${index}-recomendation-card` }
      key={ idMeal }
    >
      <img
        className="card-img-top"
        // data-testid={ `${index}-card-img` }
        src={ strMealThumb }
        alt={ strMeal }
        style={ { height: 100 } }
      />
      <div
        className="card-text"
        data-testid={ `${index}-recomendation-title` }
      >
        {strMeal}
      </div>
    </div>
  );

  return drink ? mealCard : drinkCard;
}

RecipeCard.propTypes = {
  props: PropTypes.objectOf(PropTypes.any),
}.isRequired;

export default RecipeCard;
