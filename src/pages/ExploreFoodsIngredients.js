import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import FoodIngredientsCard from '../components/FoodIngredientsCard';
import { allIngredients, requestApi } from '../services/ApiServece';
import './ExploreIngredients.css';

function ExploreFoodsIngredients() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const ingredientsData = async () => {
      const data = await requestApi(allIngredients, 'list');
      const TOTAL_SIZE = 12;

      setIngredients(data.meals.splice(0, TOTAL_SIZE));
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
              <FoodIngredientsCard key={ index } data={ { ingredient, index } } />))
            : (<div>Loading...</div>)
        }
      </div>
      <Footer />
    </div>
  );
}

export default ExploreFoodsIngredients;
