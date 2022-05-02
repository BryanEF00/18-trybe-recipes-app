import React, { useEffect, useState } from 'react';
import DrinkIngredientsCard from '../components/DrinkIngredientsCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { cocktailIngredients, requestApi } from '../services/ApiServece';
import './ExploreIngredients.css';

function ExploreDrinksIngredients() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const ingredientsData = async () => {
      const data = await requestApi(cocktailIngredients, 'list');
      const TOTAL_SIZE = 12;

      setIngredients(data.drinks.slice(0, TOTAL_SIZE));
    };
    ingredientsData();
  }, []);

  return (
    <div>
      <Header
        title="Explore Ingredients"
      />
      <div className="cardWrapper">
        {
          ingredients.length > 0
            ? ingredients.map((ingredient, index) => (
              <DrinkIngredientsCard key={ index } data={ { ingredient, index } } />))
            : (<Loading />)
        }
      </div>
      <Footer />
    </div>
  );
}

export default ExploreDrinksIngredients;
