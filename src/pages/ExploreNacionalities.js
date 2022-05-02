import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { allArea, byArea, mealByName, requestApi } from '../services/ApiServece';

// fiz a correçaõ do nom,e da função, ois estava causando erro no test//
function ExploreNationalities() {
  const [allCountries, setAllCountries] = useState([]);
  const [country, setCountry] = useState('All');
  const [countryRecipes, setCountryRecipes] = useState([]);

  const history = useHistory();
  const TOTAL_SIZE = 12;

  useEffect(() => {
    const getNationalitiesData = async () => {
      requestApi(allArea, 'list')
        .then(({ meals }) => setAllCountries([{ strArea: 'All' }, ...meals]));

      requestApi(mealByName, '')
        .then(({ meals }) => setCountryRecipes(meals.slice(0, TOTAL_SIZE)));
    };
    getNationalitiesData();
  }, []);

  const handleChange = (value) => {
    setCountry(value);

    if (value === 'All') {
      requestApi(mealByName, '')
        .then(({ meals }) => setCountryRecipes(meals.slice(0, TOTAL_SIZE)));
    } else {
      requestApi(byArea, value)
        .then(({ meals }) => setCountryRecipes(meals.splice(0, TOTAL_SIZE)));
    }
  };

  return (
    <div>
      <Header
        title="Explore Nationalities"
        withSearchButton
      />
      {
        allCountries.length > 0
          ? (
            <>
              <select
                data-testid="explore-by-nationality-dropdown"
                value={ country }
                onChange={ ({ target: { value } }) => handleChange(value) }
              >
                {
                  allCountries.map(({ strArea }) => (
                    <option
                      data-testid={ `${strArea}-option` }
                      key={ strArea }
                      value={ strArea }
                    >
                      {strArea}
                    </option>
                  ))
                }
              </select>
              <div>
                {
                  countryRecipes.map(({ idMeal, strMeal, strMealThumb }, index) => (
                    <button
                      data-testid={ `${index}-recipe-card` }
                      key={ idMeal }
                      type="button"
                      onClick={ () => history.push(`/foods/${idMeal}`) }
                    >
                      <img
                        data-testid={ `${index}-card-img` }
                        src={ strMealThumb }
                        alt={ strMeal }
                        style={ { height: 100 } }
                      />
                      <div
                        data-testid={ `${index}-card-name` }
                      >
                        {strMeal}
                      </div>
                    </button>
                  ))
                }
              </div>
            </>
          )
          : (
            <div>Loading...</div>
          )
      }
      <Footer />
    </div>
  );
}

export default ExploreNationalities;
