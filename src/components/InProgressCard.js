import PropTypes from 'prop-types';
import React from 'react';
import { useParams } from 'react-router-dom';
import './InProgressCard.css';

function InProgressCard({ ingredientLi, index, title, readStorage }) {
  const [storage, setStorage] = readStorage;
  const { id } = useParams();

  const handleChange = ({ value, checked }) => {
    if (checked) {
      setStorage((prev) => ({
        ...prev,
        [title]: { [id]: [...prev[title][id], value] },
      }));
    } else {
      const newList = storage[title][id]
        .filter((item) => item !== value);
      setStorage((prev) => ({
        ...prev,
        [title]: { [id]: newList },
      }));
    }
  };

  const verifyChecked = (value) => storage[title][id].some((item) => item === value);

  return (
    <label
      data-testid={ `${index}-ingredient-step` }
      htmlFor={ ingredientLi }
      className="InProgresstListCard"
    >
      <input
        type="checkbox"
        id={ ingredientLi }
        value={ ingredientLi }
        checked={ verifyChecked(ingredientLi) }
        onChange={ ({ target }) => handleChange(target) }
      />
      <div
        className={
          verifyChecked(ingredientLi) ? 'ingredient-checked' : 'ingredient-unchecked'
        }
      >
        {ingredientLi}
      </div>
    </label>
  );
}

InProgressCard.propTypes = {
  ingredientLi: PropTypes.string,
  index: PropTypes.number,
}.isRequired;

export default InProgressCard;
