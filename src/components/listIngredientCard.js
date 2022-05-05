import React from 'react';
import PropTypes from 'prop-types';

function ListIngredientCard({ meal }) {
  const inngredienteTest = '52977-ingredient-step';
  /* const [ingredtentList, setIngredtentList] = useState([]);

  useEffect(() => {
    setIngredtentList(meal);
  }, []); */

  return (
    <div>
      {
        meal.map((item, index) => (
          <div
            key={ index }
          >
            { item }
            { ' ' }
            <input
              type="checkbox"
              data-testid={ inngredienteTest }
              value={ item }
            />
          </div>
        ))
      }
    </div>
  );
}

ListIngredientCard.propTypes = {
  meal: PropTypes.arrayOf,
}.isRequired;

export default ListIngredientCard;
