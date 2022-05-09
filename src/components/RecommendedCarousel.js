import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { cocktailByName, mealByName, requestApi } from '../services/ApiServece';
import './RecommendedCarousel.css';

// Referência Carousel: https://www.youtube.com/watch?v=1kJn4UM7t_8

function RecommendedCarousel({ title }) {
  const [recomendations, setRecomendations] = useState([]);

  const MAX_RECOMENDATIONS_DRINKS = 6;
  const MAX_RECOMENDATIONS_FOODS = 6;

  useEffect(() => {
    if (title === 'drinks') {
      requestApi(cocktailByName, '').then((response) => setRecomendations(
        response[title].slice(0, MAX_RECOMENDATIONS_DRINKS),
      ));
    } else {
      requestApi(mealByName, '').then((response) => setRecomendations(
        response[title].slice(0, MAX_RECOMENDATIONS_FOODS),
      ));
    }
  }, [title]);

  return (
    <div
      className="carouselContainer"
    >
      {
        recomendations.length > 0 && title === 'drinks'
          ? recomendations.map(({ strDrink, strDrinkThumb, strCategory }, index) => (
            <button
              type="button"
              className="carouselChild"
              key={ index }
            >
              <img
                data-testid={ `${index}-recomendation-card` }
                className="carouselImage"
                src={ strDrinkThumb }
                alt={ strDrink }
              />
              <div>{strCategory}</div>
              <div
                data-testid={ `${index}-recomendation-title` }
              >
                {strDrink}
              </div>
            </button>
          ))
          : (
            recomendations.map(({ strMeal, strMealThumb, strCategory }, index) => (
              <button
                type="button"
                className="carouselChild"
                key={ index }
              >
                <img
                  data-testid={ `${index}-recomendation-card` }
                  className="carouselImage"
                  src={ strMealThumb }
                  alt={ strMeal }
                />
                <div>{strCategory}</div>
                <div
                  data-testid={ `${index}-recomendation-title` }
                >
                  {strMeal}
                </div>
              </button>
            ))
          )
      }
    </div>
  );
}

RecommendedCarousel.propTypes = {
  title: PropTypes.string,
}.isRequired;

export default RecommendedCarousel;
