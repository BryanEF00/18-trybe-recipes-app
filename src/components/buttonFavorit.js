import React from 'react';
import PropTypes from 'prop-types';
import Heart from '../images/blackHeartIcon.svg';
import FullHeart from '../images/whiteHeartIcon.svg';

function ButtonFavorite({ id }) {
  const verifyFav = () => {
    checkLocal('favoriteRecipes');
    const fav = readInLocalStorage('favoriteRecipes');
    const ids = fav.map((recipe) => recipe.id);
    return (ids.includes(parseInt(id, 10)) || ids.includes((id)));
  };

  const [isFav, setFav] = useState(verifyFav());

  const favIcon = () => {
    if (isFav) {
      return <img alt="Heart" src={ Heart } />;
    }
    return <img alt="FullHeart" src={ FullHeart } />;
  };

  const removeFavorite = (index) => {
    const filterFavorite = readInLocalStorage('favoriteRecipes')
      .filter((recipe) => recipe.id !== index);

    saveInLocalStorage('favoriteRecipes', filterFavorite);
    setFav(verifyFav());
  };

  const addFavorite = (index) => {
    const favorites = readInLocalStorage('favoriteRecipes');
    saveInLocalStorage('favoriteRecipes', [...favorites, { id: index }]);
    setFav(verifyFav());
  };

  const favorite = () => {
    const fav = verifyFav();
    if (fav) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  return (
    <button
      type="button"
      data-testid="favorite-btn"
      className="favBtn"
      onClick={ favorite }
    >
      { favIcon() }
    </button>
  );
}

ButtonFavorite.propTypes = {
  id: PropTypes.string.isRequired,
};

export default ButtonFavorite;
