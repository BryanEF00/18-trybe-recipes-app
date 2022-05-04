import PropTypes from 'prop-types';
import React from 'react';
import DrinksContext from './DrinksContext';

function DrinksProvider({ children }) {
  return (
    <DrinksContext.Provider>
      {children}
    </DrinksContext.Provider>
  );
}

DrinksProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default DrinksProvider;
