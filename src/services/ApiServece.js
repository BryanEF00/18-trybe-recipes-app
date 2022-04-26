const mealByName = `www.themealdb.com/api/json/v1/1/search.php?s=`
const mealsByFirstLetter = `www.themealdb.com/api/json/v1/1/search.php?f=`
const fullMealDetailsById = `www.themealdb.com/api/json/v1/1/lookup.php?i=`
const singleRandomMeal = `www.themealdb.com/api/json/v1/1/random.php`
const allMealCategories = `www.themealdb.com/api/json/v1/1/categories.php`
const allCategories  = `www.themealdb.com/api/json/v1/1/list.php?$c=`
const allArea  = `www.themealdb.com/api/json/v1/1/list.php?$c=`
const allIngredients  = `www.themealdb.com/api/json/v1/1/list.php?$c=`
const byMainIngredient = `www.themealdb.com/api/json/v1/1/filter.php?i=`
const byCategory = `www.themealdb.com/api/json/v1/1/filter.php?c=`
const byArea = `www.themealdb.com/api/json/v1/1/filter.php?a=`

export const RequestFoodsApi = async (request, param) => {
  const ENDPOINT = `${request}${param}`;
  const response = await fetch(ENDPOINT);
  const json = await response.json();
  return (response.ok
    ? Promise.resolve(json)
    : Promise.reject(json));
};

export const RequestDrinksApi = async () => {
  const ENDPOINT = ;
  const response = await fetch(ENDPOINT);
  const json = await response.json();
  return (response.ok
    ? Promise.resolve(json)
    : Promise.reject(json));
};
