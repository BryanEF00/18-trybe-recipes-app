import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { readInLocalStorage, saveInLocalStorage } from '../services/localStorage';

function StartRecipeBtn({ id, title }) {
  const [isDone, setIsDone] = useState(false);
  const history = useHistory();

  useEffect(() => {
    if (readInLocalStorage('doneRecipes') === null) {
      saveInLocalStorage('doneRecipes', []);
    }

    const allDone = readInLocalStorage('doneRecipes');
    const verify = allDone.some((recipe) => recipe.id === id);

    if (verify) setIsDone(true);
  }, [id, title]);

  return (
    <div>
      {isDone
        ? (
          null
        )
        : (
          <button
            data-testid="start-recipe-btn"
            type="button"
            className="btn btn-success fixed-bottom"
            onClick={ () => (title === 'meals'
              ? history.push(`/foods/${id}/in-progress`)
              : history.push(`/drinks/${id}/in-progress`)) }
          >
            { readInLocalStorage('inProgressRecipes')[title][id]
              ? 'Continue Recipe'
              : 'Start Recipe'}
          </button>)}
    </div>
  );
}

StartRecipeBtn.propTypes = {
  id: PropTypes.stringify,
  title: PropTypes.string,
}.isRequired;

export default StartRecipeBtn;
