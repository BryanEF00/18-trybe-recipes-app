import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import shareIcon from '../images/shareIcon.svg';
import './FavoriteRecipeCard.css';

function FavoriteRecipeCard({ data, index, removeFavorite }) {
  const { id, type, nationality, category, alcoholicOrNot, name, image } = data;
  const [isCopied, setIsCopied] = useState(false);
  const history = useHistory();

  const redirectOnClick = () => {
    if (type === 'food') {
      history.push(`/foods/${id}`);
    } else {
      history.push(`/drinks/${id}`);
    }
  };

  return (
    <div
      className="FavoriteRecipeCard-Wrapper"
    >
      <button
        className="FavoriteRecipeCard-Image"
        type="button"
        onClick={ redirectOnClick }
      >
        <img
          data-testid={ `${index}-horizontal-image` }
          src={ image }
          alt={ name }
        />
      </button>
      <div
        className="FavoriteRecipeCard-Container"
      >
        <button
          className="FavoriteRecipeCard-Info"
          type="button"
          onClick={ redirectOnClick }
        >
          <div
            data-testid={ `${index}-horizontal-top-text` }
            className="FavoriteRecipeCard-TopText"
          >
            {
              type === 'food'
                ? `${nationality} - ${category}`
                : alcoholicOrNot
            }
          </div>
          <div
            data-testid={ `${index}-horizontal-name` }
            className="FavoriteRecipeCard-Name"
          >
            {name}
          </div>
        </button>
        <div
          className="FavoriteRecipeCard-Icons"
        >
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
        </div>
        <div className="FavoriteRecipeCard-IsCopied">
          {isCopied && 'Link copied!'}
        </div>
      </div>
    </div>
  );
}

FavoriteRecipeCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  index: PropTypes.number,
}.isRequired;

export default FavoriteRecipeCard;
