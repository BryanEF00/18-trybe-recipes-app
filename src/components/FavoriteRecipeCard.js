import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';

function FavoriteRecipeCard({ data, index, removeFavorite }) {
  const { id, type, nationality, category, alcoholicOrNot, name, image } = data;
  const [isCopied, setIsCopied] = useState(false);
  const history = useHistory();

  return (
    <divn>
      <button
        type="button"
        onClick={ () => {
          if (type === 'food') {
            history.push(`/foods/${id}`);
          } else { history.push(`/drinks/${id}`); }
        } }
      >
        <img
          data-testid={ `${index}-horizontal-image` }
          src={ image }
          alt={ name }
          style={ { height: 100 } }
        />
        <div
          data-testid={ `${index}-horizontal-top-text` }
        >
          {
            type === 'food'
              ? `${nationality} - ${category}`
              : alcoholicOrNot
          }
        </div>
        <div
          data-testid={ `${index}-horizontal-name` }
        >
          {name}
        </div>
      </button>
      <button
        type="button"
        onClick={ () => {
          setIsCopied(true);
          if (type === 'food') {
            copy(`http://localhost:3000/foods/${id}`);
          }
          copy(`http://localhost:3000/drinks/${id}`);
        } }
      >
        <img
          data-testid={ `${index}-horizontal-share-btn` }
          src={ shareIcon }
          alt="Share Icon"
        />
        {isCopied && 'Link copied!'}
      </button>
      <button
        type="button"
        onClick={ () => removeFavorite(id) }
      >
        <img
          data-testid={ `${index}-horizontal-favorite-btn` }
          src={ blackHeartIcon }
          alt="Black Heart Icon"
        />
      </button>
    </divn>
  );
}

FavoriteRecipeCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  index: PropTypes.number,
}.isRequired;

export default FavoriteRecipeCard;
