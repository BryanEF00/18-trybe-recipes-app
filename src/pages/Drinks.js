import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import DrinksContext from '../context/DrinksContext';

function Drinks() {
  const { displayDrinkRecipe } = useContext(DrinksContext);
  const TOTAL_SIZE = 12;

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
              <div
                className="card col-5 shadow p-3 mb-5 bg-body rounded"
                data-testid={ `${index}-recipe-card` }
                key={ idDrink }
              >
                <img
                  className="card-img-top"
                  data-testid={ `${index}-card-img` }
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
            ))
        }
      </div>
      <Footer />
    </div>
  );
}

export default Drinks;
