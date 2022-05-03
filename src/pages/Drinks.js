import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import DrinksContext from '../context/DrinksContext';

function Drinks() {
  const { displayDrinkRecipe } = useContext(DrinksContext);
  const TOTAL_SIZE = 12;
  const history = useHistory();

  return (
    <div>
      <Header
        title="Drinks"
        withSearchButton
      />
      <div
        className="d-flex flex-row flex-wrap justify-content-around"
      >
        {
          displayDrinkRecipe.length > 0
          && displayDrinkRecipe.slice(0, TOTAL_SIZE)
            .map(({ idDrink, strDrink, strDrinkThumb }, index) => (
              <button
                data-testid={ `${index}-recipe-card` }
                className="card col-5 shadow p-3 mb-5 bg-body rounded"
                key={ idDrink }
                type="button"
                onClick={ () => history.push(`/drinks/${idDrink}`) }
              >
                <img
                  data-testid={ `${index}-card-img` }
                  className="card-img-top"
                  src={ strDrinkThumb }
                  alt={ strDrink }
                  style={ { height: 100 } }
                />
                <div
                  data-testid={ `${index}-card-name` }
                  className="card-text"
                >
                  {strDrink}
                </div>
              </button>
            ))
        }
      </div>
      <Footer />
    </div>
  );
}

export default Drinks;
