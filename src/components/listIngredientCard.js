import React from 'react';
import PropTypes from 'prop-types';

function ListIngredientCard({ banc }) {
  const inngredienteTest = '52977-ingredient-step';

  return (
    <div>
      {
        banc.map((item, index) => (
          <div
            key={ index }
          >
            { item }
            { ' ' }
            <input
              type="checkbox"
              data-testid={ inngredienteTest }
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
