import PropTypes from 'prop-types';
import React, { useState } from 'react';
import DrinksContext from './DrinksContext';

function DrinksProvider({ children }) {
  const [data, setData] = useState({
    exploreByIngredient: [],
  });

  const handleExploreIngredient = (ingredient) => {
    setData((prev) => ({ ...prev, exploreByIngredient: ingredient }));
  };

  return (
    <DrinksContext.Provider value={ { ...data, handleExploreIngredient } }>
      {children}
    </DrinksContext.Provider>
  );
}

DrinksProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DrinksProvider;
