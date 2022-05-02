import PropTypes from 'prop-types';
import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { readInLocalStorage } from '../services/localStorage';
import './Profile.css';

function Profile({ history }) {
  const { email } = readInLocalStorage('user');
  return (
    <div>
      <Header
        title="Profile"
      />
      <div className="profile">
        <h1 data-testid="profile-email">{email}</h1>
        <button
          className="btn btn-outline-secondary"
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => history.push('/done-recipes') }
        >
          Done Recipes
        </button>
        <button
          className="btn btn-outline-secondary"
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('/favorite-recipes') }
        >
          Favorite Recipes
        </button>
        <button
          className="btn btn-outline-secondary"
          type="button"
          data-testid="profile-logout-btn"
          onClick={ () => { localStorage.clear(); history.push('/'); } }
        >
          Logout
        </button>
      </div>
      <Footer />
    </div>
  );
}

Profile.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Profile;
