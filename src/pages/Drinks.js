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
      {
        displayDrinkRecipe.length > 0
        && displayDrinkRecipe.slice(0, TOTAL_SIZE)
          .map(({ idDrink, strDrink, strDrinkThumb }, index) => (
            <div
              data-testid={ `${index}-recipe-card` }
              key={ idDrink }
            >
              <img
                data-testid={ `${index}-card-img` }
                src={ strDrinkThumb }
                alt={ strDrink }
                style={ { height: 100 } }
              />
              <div
                data-testid={ `${index}-card-name` }
              >
                {strDrink}
              </div>
            </div>
          ))
      }
      <Footer />
    </div>
  );
}

export default Drinks;
