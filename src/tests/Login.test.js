import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderPath from '../helpers/renderPath';

const TESTER_EMAIL = 'james@gmail.com';
const TESTER_PASSWORD = '12345678';
const WRONG_EMAIL = 'xablau';
const WRONG_PASSWORD = '12345';

describe('Tela de Login é renderizada corretamente',
  () => {
    it('Na rota /, os inputs e o botão especificados estão presentes',
      () => {
        renderPath('/');
        const EMAIL_INPUT = screen.getByTestId('email-input');
        const PASSWORD_INPUT = screen.getByTestId('password-input');
        const LOGIN_BTN = screen.getByTestId('login-submit-btn');
        expect(EMAIL_INPUT).toBeInTheDocument();
        expect(PASSWORD_INPUT).toBeInTheDocument();
        expect(LOGIN_BTN).toBeInTheDocument();
      });
    it('É possível inserir dados nos inputs',
      () => {
        renderPath('/');
        const EMAIL_INPUT = screen.getByTestId('email-input');
        const PASSWORD_INPUT = screen.getByTestId('password-input');
        userEvent.type(EMAIL_INPUT, TESTER_EMAIL);
        expect(EMAIL_INPUT).toHaveValue(TESTER_EMAIL);

        userEvent.type(PASSWORD_INPUT, TESTER_PASSWORD);
        expect(PASSWORD_INPUT).toHaveValue(TESTER_PASSWORD);
      });
  });

describe('Testa validação dos dados inseridos',
  () => {
    it('Botão desabilitado se o email for inválido',
      () => {
        renderPath('/');
        const EMAIL_INPUT = screen.getByTestId('email-input');
        const PASSWORD_INPUT = screen.getByTestId('password-input');
        const LOGIN_BTN = screen.getByTestId('login-submit-btn');
        userEvent.type(PASSWORD_INPUT, TESTER_PASSWORD);
        userEvent.type(EMAIL_INPUT, WRONG_EMAIL);
        expect(LOGIN_BTN).toBeDisabled();
      });

    it('Botão desabilitado se a senha for inválida',
      () => {
        renderPath('/');
        const EMAIL_INPUT = screen.getByTestId('email-input');
        const PASSWORD_INPUT = screen.getByTestId('password-input');
        const LOGIN_BTN = screen.getByTestId('login-submit-btn');
        userEvent.type(PASSWORD_INPUT, WRONG_PASSWORD);
        userEvent.type(EMAIL_INPUT, TESTER_EMAIL);
        expect(LOGIN_BTN).toBeDisabled();
      });

    it('Botão só é habilitado se o inputs forem válidos',
      () => {
        renderPath('/');
        const EMAIL_INPUT = screen.getByTestId('email-input');
        const PASSWORD_INPUT = screen.getByTestId('password-input');
        const LOGIN_BTN = screen.getByTestId('login-submit-btn');
        userEvent.type(EMAIL_INPUT, TESTER_EMAIL);
        userEvent.type(PASSWORD_INPUT, TESTER_PASSWORD);
        expect(LOGIN_BTN).toBeEnabled();
      });
  });

describe('Salva dados no local storage e redireciona para tela principal após o login',
  () => {
    beforeEach(() => {
      localStorage.clear();
    });

    it('Ao clicar no botão habilitado, o email é salvo no local storage',
      () => {
        renderPath('/');
        const EMAIL_INPUT = screen.getByTestId('email-input');
        const PASSWORD_INPUT = screen.getByTestId('password-input');
        const LOGIN_BTN = screen.getByTestId('login-submit-btn');
        userEvent.type(EMAIL_INPUT, TESTER_EMAIL);
        userEvent.type(PASSWORD_INPUT, TESTER_PASSWORD);
        userEvent.click(LOGIN_BTN);

        const storedUser = JSON.parse(localStorage.getItem('user')).email;
        expect(storedUser).toBe(TESTER_EMAIL);
      });
    it('mealsToken e cocktailsToken devem estar no localStorage',
      () => {
        renderPath('/');
        const EMAIL_INPUT = screen.getByTestId('email-input');
        const PASSWORD_INPUT = screen.getByTestId('password-input');
        const LOGIN_BTN = screen.getByTestId('login-submit-btn');
        userEvent.type(EMAIL_INPUT, TESTER_EMAIL);
        userEvent.type(PASSWORD_INPUT, TESTER_PASSWORD);
        userEvent.click(LOGIN_BTN);
        const keyMealsToken = 1;
        const keyCocktailsToken = 1;
        const mealsToken = localStorage.getItem('mealsToken');
        const cocktailsToken = localStorage.getItem('cocktailsToken');
        expect(mealsToken).toHaveValue(keyMealsToken);
        expect(cocktailsToken).toHaveValue(keyCocktailsToken);
      });
    it('Acessa tela principal de receitas de comidas após login',
      () => {
        renderPath('/');
        const EMAIL_INPUT = screen.getByTestId('email-input');
        const PASSWORD_INPUT = screen.getByTestId('password-input');
        const LOGIN_BTN = screen.getByTestId('login-submit-btn');
        userEvent.type(EMAIL_INPUT, TESTER_EMAIL);
        userEvent.type(PASSWORD_INPUT, TESTER_PASSWORD);
        userEvent.click(LOGIN_BTN);
        expect(window.location.pathname).toBe('/foods');
      });
  });
