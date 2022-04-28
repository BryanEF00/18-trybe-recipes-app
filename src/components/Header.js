import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProfileIcon from '../images/profileIcon.svg';
import SearchIcon from '../images/searchIcon.svg';
import './Header.css';

function Header({ title, withSearchButton }) {
  return (
    <header
      id="header"
      className="header"
    >
      <div
        id="icons"
      >
        <Link
          to="/profile"
        >
          <img
            data-testid="profile-top-btn"
            src={ ProfileIcon }
            alt="profile icon"
          />
        </Link>
        <h3
          data-testid="page-title"
          className="title"
          id="tile"
        >
          { title }
        </h3>
        {
          withSearchButton === true
            ? (
              <button
                type="button"
                data-testid="search-top-btn"
                id="search"
                className="search"
              /* onClick={ search } */
              >
                <img
                  data-testid="search-top-btn"
                  src={ SearchIcon }
                  alt="search icon"
                />
              </button>
            )
            : (<div />)
        }
      </div>
      <input
        type="text"
        data-testid="search-input"
        id="search-input"
      />
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  withSearchButton: PropTypes.bool,
}.isRequired;

export default Header;
