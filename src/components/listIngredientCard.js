import React from 'react';
import PropTypes from 'prop-types';

function ListIngredientCard({ banc }) {
  const inngredienteTest = '178319-ingredient-step';

  return (
    <div>
      {
        banc.map((item, index) => (
          <div
            key={ index }
            data-testid={ inngredienteTest }
          >
            { item }
            { ' ' }
            <input
              type="checkbox"
              value={ item }
            />
          </div>
        ))
      }
    </div>
  );
}

ListIngredientCard.propTypes = {
  banc: PropTypes.arrayOf,
}.isRequired;

export default ListIngredientCard;
