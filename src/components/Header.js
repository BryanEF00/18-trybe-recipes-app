import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ProfileIcon from '../images/profileIcon.svg';
import SearchIcon from '../images/searchIcon.svg';
// import './Header.css';
import SearchBarFoods from './SearchBarFoods';

function Header({ title, withSearchButton }) {
  const [onInputSearch, setOnInputSearch] = useState(false);

  function InputSearch() {
    if (onInputSearch === false) setOnInputSearch(true);
    if (onInputSearch === true) setOnInputSearch(false);
  }

  return (
    <header
      id="header"
      className="d-flex flex-column align-items-center header"
    >
      <div
        className="
          container-fluid
          bg-light
          p-2
          d-flex
          justify-content-between
          align-items-center"
        id="icons"
      >
        <Link
          className="btn btn-light col-2"
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
          className="text-center title"
          id="tile"
        >
          { title }
        </h3>
        {
          withSearchButton === true
            ? (
              <button
                type="button"
                id="search"
                className="btn btn-light col-2 my-0"
                onClick={ InputSearch }
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
      {
        onInputSearch === true
          ? <SearchBarFoods title={ title } />
          : null
      }
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string,
  withSearchButton: PropTypes.bool,
}.isRequired;

export default Header;
