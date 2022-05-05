import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { readInLocalStorage } from '../services/localStorage';
// import './Profile.css';

function Profile({ history }) {
  const [userEmail, setUserEmail] = useState({ email: '' });

  useEffect(() => {
    if (readInLocalStorage('user') === null) {
      setUserEmail({ email: 'mail@mail.com' });
    } else {
      setUserEmail(readInLocalStorage('user'));
    }
  }, []);

  return (
    <div>
      <Header
        title="Profile"
      />
      <div
        className="
          container-fluid
          d-flex
          flex-column
          justify-content-center
          profile"
        style={ { height: '520px' } }
      >
        <h1
          className="title mb-3"
          data-testid="profile-email"
        >
          {userEmail.email}
        </h1>
        <button
          className="btn btn-outline-secondary btn-block mb-3"
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => history.push('/done-recipes') }
        >
          Done Recipes
        </button>
        <button
          className="btn btn-outline-secondary btn-block mb-3"
          type="button"
          data-testid="profile-favorite-btn"
          onClick={ () => history.push('/favorite-recipes') }
        >
          Favorite Recipes
        </button>
        <button
          className="btn btn-outline-secondary btn-block mb-3"
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
