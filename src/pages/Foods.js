import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import FoodsContext from '../context/FoodsContext';

function Foods() {
  const { exploreByIngredient } = useContext(FoodsContext);
  const TOTAL_SIZE = 12;

  return (
    <div>
      <Header
        title="Foods"
        withSearchButton
      />
      {
        exploreByIngredient.length > 0
        && exploreByIngredient.slice(0, TOTAL_SIZE)
          .map(({ idMeal, strMeal, strMealThumb }, index) => (
            <div
              data-testid={ `${index}-recipe-card` }
              key={ idMeal }
            >
              <img
                data-testid={ `${index}-card-img` }
                src={ strMealThumb }
                alt={ strMeal }
                style={ { height: 100 } }
              />
              <div
                data-testid={ `${index}-card-name` }
              >
                {strMeal}
              </div>
            </div>
          ))
      }
      <Footer />
    </div>
  );
}

export default Foods;
