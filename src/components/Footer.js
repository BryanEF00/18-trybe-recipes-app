import React from 'react';
import { Link } from 'react-router-dom';
import DrinkIcon from '../images/drinkIcon.svg';
import ExploreIcon from '../images/exploreIcon.svg';
import MealIcon from '../images/mealIcon.svg';
import './Footer.css';

function Footer() {
  return (
    <div
      data-testid="footer"
      className="footer"
    >
      <Link
        to="/drinks"
      >
        <img
          data-testid="drinks-bottom-btn"
          src={ DrinkIcon }
          alt="drink icon"
        />
      </Link>
      <Link
        to="/explore"
      >
        <img
          data-testid="explore-bottom-btn"
          src={ ExploreIcon }
          alt="explore icon"
        />
      </Link>
      <Link
        to="/foods"
      >
        <img
          data-testid="food-bottom-btn"
          src={ MealIcon }
          alt="meal icon"
        />
      </Link>
    </div>
  );
}

export default Footer;
