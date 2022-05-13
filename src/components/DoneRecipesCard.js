import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import './DoneRecipesCard.css';

function DoneRecipesCard({ data, index }) {
  const { id, type, nationality, category, alcoholicOrNot,
    name, image, doneDate, tags } = data;
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
      className="DoneRecipesCard-Wrapper"
    >
      <button
        className="DoneRecipesCard-Image"
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
        className="DoneRecipesCard-Container"
      >
        <button
          className="DoneRecipesCard-Info"
          type="button"
          onClick={ redirectOnClick }
        >
          <div
            data-testid={ `${index}-horizontal-top-text` }
            className="DoneRecipesCard-TopText"
          >
            {
              type === 'food'
                ? `${nationality} - ${category}`
                : alcoholicOrNot
            }
          </div>
          <div
            data-testid={ `${index}-horizontal-name` }
            className="DoneRecipesCard-Name"
          >
            {name}
          </div>
        </button>
        <div
          className="DoneRecipesCard-Icons"
        >
          <div
            data-testid={ `${index}-horizontal-done-date` }
          >
            {`Done in:
            ${doneDate}`}
          </div>
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
        </div>
        <div
          className="DoneRecipesCard-Tags"
        >
          {
            tags !== null
            && tags.split(',').map((tag) => (
              <div
                data-testid={ `${index}-${tag}-horizontal-tag` }
                key={ tag }
              >
                {tag}
              </div>
            ))
          }
        </div>
        <div className="DoneRecipesCard-IsCopied">
          {isCopied && 'Link copied!'}
        </div>
      </div>
    </div>
  );
}

DoneRecipesCard.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  index: PropTypes.number,
}.isRequired;

export default DoneRecipesCard;
