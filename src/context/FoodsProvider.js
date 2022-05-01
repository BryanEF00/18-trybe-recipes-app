import PropTypes from 'prop-types';
import React, { useState } from 'react';
import FoodsContext from './FoodsContext';

function FoodsProvider({ children }) {
  const [data, setData] = useState({
    exploreByIngredient: [],
  });

  const handleExploreIngredient = (ingredient) => {
    setData((prev) => ({ ...prev, exploreByIngredient: ingredient }));
  };

  return (
    <FoodsContext.Provider value={ { ...data, handleExploreIngredient } }>
      {children}
    </FoodsContext.Provider>
  );
}

FoodsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default FoodsProvider;
