import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import FoodsContext from '../context/FoodsContext';

function Foods() {
  const { displayFoodRecipe } = useContext(FoodsContext);
  const TOTAL_SIZE = 12;

  return (
    <div>
      <Header
        title="Foods"
        withSearchButton
      />
      <div
        className="d-flex flex-row flex-wrap justify-content-around"
      >
        {
          displayFoodRecipe.length > 0
        && displayFoodRecipe.slice(0, TOTAL_SIZE)
          .map(({ idMeal, strMeal, strMealThumb }, index) => (
            <div
              className="card col-5 shadow p-3 mb-5 bg-body rounded"
              data-testid={ `${index}-recipe-card` }
              key={ idMeal }
            >
              <img
                className="card-img-top"
                data-testid={ `${index}-card-img` }
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
          ))
        }
      </div>
      <Footer />
    </div>
  );
}

export default Foods;
