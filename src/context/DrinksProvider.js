import PropTypes from 'prop-types';
import React, { useState } from 'react';
import DrinksContext from './DrinksContext';

function DrinksProvider({ children }) {
  const [data, setData] = useState({
    displayDrinkRecipe: [],
  });

  const handleDisplayDrinkRecipe = (recipes) => {
    setData((prev) => ({ ...prev, displayDrinkRecipe: recipes }));
  };

  return (
    <DrinksContext.Provider value={ { ...data, handleDisplayDrinkRecipe } }>
      {children}
    </DrinksContext.Provider>
  );
}

DrinksProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DrinksProvider;
