import React from 'react';
import RecipeCard from './RecipeCard';

function Sugestions() {
  const endPoint = 'www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  /* const [sugestions, altSugestions] = useState([]);

  const getSugestions = async () => {
  }; */

  async function renderCards() {
    const pega = await requestApi(endPoint, '');
    const list = pega.drinks;
    if (list.length > 0) {
      list.map((recipe, index) => (
        <RecipeCard key={ index } data={ { index, ...recipe, drink: false } } />
      ));
      const limit = 6;
      return list.slice(0, limit);
    }
  }

  return (
    <div className="sugestion">
      { renderCards() }
    </div>
  );
}

export default Sugestions;
