import React from 'react';

function InProgressFoods() {
  const inngredienteTest = `${index}-ingredient-step`;

  return (
    <div>
      <div
        data-testid="recipe-photo"
      >
        Foto
      </div>
      <div
        data-testid="recipe-title"
      >
        title
      </div>
      <div
        data-testid="share-btn"
      >
        botão compartilhar
      </div>
      <div
        data-testid="favorite-btn"
      >
        botão favoriar
      </div>
      <div
        data-testid="recipe-category"
      >
        Categoria
      </div>
      <div
        data-testid={ inngredienteTest }
      >
        ingredientes
      </div>
      <div
        data-testid="instructions"
      >
        Instruções
      </div>
      <div
        data-testid="finish-recipe-btn"
      >
        botão finalizar
      </div>
    </div>
  );
}

export default InProgressFoods;
