import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, FormControl, InputGroup } from 'react-bootstrap';
import { saveInLocalStorage } from '../services/localStorage';

function Login({ history }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  function validate() {
    const MIN_PASS_LENGTH = 6;
    const emailFormat = /\S+@\S+\.\S+/;
    const validEmail = emailFormat.test(email);
    if (password.length >= MIN_PASS_LENGTH && validEmail) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }

  function handleClick() {
    saveInLocalStorage('mealsToken', 1);
    saveInLocalStorage('cocktailsToken', 1);
    saveInLocalStorage('user', { email });
    history.push('/foods');
  }

  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      style={ { height: '600px' } }
    >
      <h1>LOGIN</h1>
      <InputGroup className="mb-3 row">
        <FormControl
          data-testid="email-input"
          onChange={ ({ target }) => {
            setEmail(target.value);
            validate();
          } }
          placeholder="E-mail"
          type="email"
          value={ email }
        />
      </InputGroup>
      <InputGroup className="mb-3 row">
        <FormControl
          data-testid="password-input"
          onChange={ ({ target }) => {
            setPassword(target.value);
            validate();
          } }
          placeholder="Password"
          type="password"
          value={ password }
        />
      </InputGroup>
      <Button
        className="btn btn-success btn-block"
        data-testid="login-submit-btn"
        disabled={ disabled }
        onClick={ () => handleClick() }
        type="button"
      >
        Enter
      </Button>
    </Container>
  );
}

Login.propTypes = {
  history: PropTypes.objectOf(PropTypes.any),
}.isRequired;

export default Login;
