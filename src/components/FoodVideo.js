import PropTypes from 'prop-types';
import React from 'react';

function FoodVideo({ id, strYoutube }) {
  const url = strYoutube.split('watch?v=');

  return (
    <iframe
      title={ `${id}-video` }
      width="340"
      height="200"
      src={ `${url[0]}embed/${url[1]}` }
    />
  );
}

FoodVideo.propTypes = {
  id: PropTypes.string,
  strYoutube: PropTypes.string,
}.isRequired;

export default FoodVideo;
