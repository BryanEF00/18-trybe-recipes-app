import PropTypes from 'prop-types';
import React, { useState } from 'react';
import FoodsContext from './FoodsContext';

function FoodsProvider({ children }) {
  const [data, setData] = useState({
    displayFoodRecipe: [],
  });

  const handleDisplayFoodRecipe = (recipes) => {
    setData((prev) => ({ ...prev, displayFoodRecipe: recipes }));
  };

  return (
    <FoodsContext.Provider value={ { ...data, handleDisplayFoodRecipe } }>
      {children}
    </FoodsContext.Provider>
  );
}

FoodsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default FoodsProvider;
