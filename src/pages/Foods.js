import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import FoodsContext from '../context/FoodsContext';

function Foods() {
  const { displayFoodRecipe } = useContext(FoodsContext);
  const TOTAL_SIZE = 12;
  const history = useHistory();

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
            <button
              data-testid={ `${index}-recipe-card` }
              className="card col-5 shadow p-3 mb-5 bg-body rounded"
              key={ idMeal }
              type="button"
              onClick={ () => history.push(`/foods/${idMeal}`) }
            >
              <img
                data-testid={ `${index}-card-img` }
                className="card-img-top"
                src={ strMealThumb }
                alt={ strMeal }
                style={ { height: 100 } }
              />
              <div
                data-testid={ `${index}-card-name` }
                className="card-text"
              >
                {strMeal}
              </div>
            </button>
          ))
        }
      </div>
      <Footer />
    </div>
  );
}

export default Foods;
