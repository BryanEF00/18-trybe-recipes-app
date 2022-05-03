import React, { useEffect } from 'react';
import { requestApi, detailsById } from '../services/ApiServece'

function DetailedFoods(props) {
  const { match } = props;
  const { id } = match.params;
  useEffect(async () => {
    console.log('//////');
    const data = await requestApi(detailsById, id)
    console.log('->', data);
  }, [])

  return (
    <div>
      <p>PÁGINA DETALHADA DE COMIDAS</p>
      <img alt="receita" data-testid="recipe-photo" />
      <h1 data-testid="recipe-title">name</h1>
      <button type="button" data-testid="share-btn">Share</button>
      <button type="button" data-testid="favorite-btn">Favorite</button>
      <h2 data-testid="recipe-category">recipe category</h2>
      <ul data-testid={ `${index}-ingredient-name-and-measure` } />
      <p data-testid="instructions" />
      <button type="button" data-testid="start-recipe-btn">START</button>
      <div data-testid="video" />
      <div data-testid={ `${index}-recomendation-card` } />
    </div>
  );
}

export default DetailedFoods;
