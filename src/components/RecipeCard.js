import React from 'react';
import { Link } from 'react-router-dom';
import DrinkIcon from '../images/drinkIcon.svg';
import ExploreIcon from '../images/exploreIcon.svg';
import MealIcon from '../images/mealIcon.svg';

function RecipeCard(props) {
	const {  idDrink, strDrink, strDrinkThumb, drink } = props.data
	const { index, idMeal, strMeal, strMealThumb } = props.data
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
      	data-testid={ `${index}-card-name` }
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
      	data-testid={ `${index}-card-name` }
      >
      	{strMeal}
    	</div>
    </div>
	);

  return (
		<>
    	{ drink ? mealCard : drinkCard }
		</>
  );
}

export default RecipeCard;
