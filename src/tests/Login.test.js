import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';
import Login from '../pages/Login';

const TESTER_EMAIL = 'james@gmail.com';
const TESTER_PASSWORD = 't1234567';
const WRONG_EMAIL = 'xablau';
const WRONG_PASSWORD = 't1234567';

describe('2. Verifica se a tela de login é mostrada conforme especificações', () => {
  it('Verifica se é mostrado campo para inserir email', () => {
    render(<Login />);
    const inputEmail = screen.getByTestId('email-input');
    expect(inputEmail).toBeInTheDocument();
  });
  it('Verifica se é mostrado campo para inserir senha', () => {
    render(<Login />);
    const inputPassword = screen.getByTestId('password-input');
    expect(inputPassword).toBeInTheDocument();
  });
  it('Verifica se é mostrado um botão para acesso', () => {
    render(<Login />);
    const btnSubmit = screen.getByTestId('login-submit-btn');
    expect(btnSubmit).toBeInTheDocument();
  });
});

describe('3. A pessoa deve conseguir escrever seu email no input de email', () => {
  it('É possivel digitar o email', () => {
    render(<Login />);
    const inputEmail = screen.getByTestId('email-input');
    userEvent.type(inputEmail, TESTER_EMAIL);
    expect(inputEmail).toHaveValue(TESTER_EMAIL);
  });
});

describe('4. A pessoa deve conseguir escrever sua senha no input de senha', () => {
  it('É possível escrever a senha', () => {
    render(<Login />);
    const inputPassword = screen.getByTestId('password-input');
    userEvent.type(inputPassword, TESTER_PASSWORD);
    expect(inputPassword).toHaveValue(TESTER_PASSWORD);
  });
});

describe('5. O botão só ativa quando o form for válido', () => {
  it('O botão deve estar desativado se o email for inválido', () => {
    render(<Login />);
    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    const btnSubmit = screen.getByTestId('password-input');
    userEvent.type(inputPassword, TESTER_PASSWORD);
    userEvent.type(inputEmail, WRONG_EMAIL);
    expect(btnSubmit).toBeDisabled();
  });
  it('O botão deve estar desativado se a senha for inválida', () => {
    render(<Login />);
    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    const btnSubmit = screen.getByTestId('password-input');
    userEvent.type(inputPassword, WRONG_PASSWORD);
    userEvent.type(inputEmail, TESTER_EMAIL);
    expect(btnSubmit).toBeDisabled();
  });
  it('O botão deve estar ativado se email e senha forem válidos', () => {
    render(<Login />);
    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    const btnSubmit = screen.getByTestId('password-input');
    userEvent.type(inputPassword, TESTER_PASSWORD);
    userEvent.type(inputEmail, TESTER_EMAIL);
    expect(btnSubmit).toBeEnabled();
  });
});

describe('6. Verifica se há 2 tokens no localStorage.', () => {
  it('mealsToken e cocktailsToken devem estar no localStorage', () => {
    renderWithRouter(<App />);
    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    const btnSubmit = screen.getByTestId('password-input');
    userEvent.type(inputPassword, TESTER_PASSWORD);
    userEvent.type(inputEmail, TESTER_EMAIL);
    userEvent.click(btnSubmit);
    const keyMealsToken = '1';
    const keyCocktailsToken = '1';
    const mealsToken = localStorage.getItem('mealsToken');
    const cocktailsToken = localStorage.getItem('cocktailsToken');
    expect(mealsToken).toBe(keyMealsToken);
    expect(cocktailsToken).toBe(keyCocktailsToken);
  });
});

describe('7. Verifica se o e-mail esta no localStorage.', () => {
  it('a chave user deve estar salva em localStorage', () => {
    renderWithRouter(<App />);
    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    const btnSubmit = screen.getByTestId('password-input');
    userEvent.type(inputPassword, TESTER_PASSWORD);
    userEvent.type(inputEmail, TESTER_EMAIL);
    userEvent.click(btnSubmit);
    const userLogin = localStorage.getItem('user');
    expect(userLogin).toBe({ email: TESTER_EMAIL });
  });
});

describe('8. Verifica se a rota esta correta', () => {
  it('A rota muda para a tela principal de receitas de comidas', () => {
    const { history } = renderWithRouter(<App />);
    const inputEmail = screen.getByTestId('email-input');
    const inputPassword = screen.getByTestId('password-input');
    const btnSubmit = screen.getByTestId('password-input');
    userEvent.type(inputPassword, TESTER_PASSWORD);
    userEvent.type(inputEmail, TESTER_EMAIL);
    userEvent.click(btnSubmit);
    const { pathname } = history.location;
    expect(pathname).toBe('/foods');
  });
});
