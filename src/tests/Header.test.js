import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderPath from '../helpers/tests/renderPath';
import {
  TESTER_EMAIL,
  TESTER_PASSWORD,
  EMAIL_TESTID,
  PASSWORD_TESTID,
  LOGIN_BTN_TESTID,
  PROFILE_TOP_BTN,
  SEARCH_TOP_BTN,
  PAGE_TITLE,
  SEARCH_INPUT,
} from '../helpers/tests/constants';

describe('Há um header na tela principal de receitas de comidas após login',
  () => {
    it('Há um header contendo ícone de perfil, o título da página e um ícone de busca',
      () => {
        renderPath('/');
        const EMAIL_INPUT = screen.getByTestId(EMAIL_TESTID);
        const PASSWORD_INPUT = screen.getByTestId(PASSWORD_TESTID);
        const LOGIN_BTN = screen.getByTestId(LOGIN_BTN_TESTID);
        userEvent.type(EMAIL_INPUT, TESTER_EMAIL);
        userEvent.type(PASSWORD_INPUT, TESTER_PASSWORD);
        userEvent.click(LOGIN_BTN);
        const profileBtn = screen.getByTestId(PROFILE_TOP_BTN);
        const searchBtn = screen.getByTestId(SEARCH_TOP_BTN);
        const pageTitle = screen.getByTestId(PAGE_TITLE);

        expect(window.location.pathname).toBe('/foods');
        expect(profileBtn).toBeInTheDocument();
        expect(searchBtn).toBeInTheDocument();
        expect(pageTitle).toBeInTheDocument();
      });
    it('Botão de perfil redireciona corretamente para página de perfil',
      () => {
        renderPath('/');
        const EMAIL_INPUT = screen.getByTestId(EMAIL_TESTID);
        const PASSWORD_INPUT = screen.getByTestId(PASSWORD_TESTID);
        const LOGIN_BTN = screen.getByTestId(LOGIN_BTN_TESTID);
        userEvent.type(EMAIL_INPUT, TESTER_EMAIL);
        userEvent.type(PASSWORD_INPUT, TESTER_PASSWORD);
        userEvent.click(LOGIN_BTN);
        const profileBtn = screen.getByTestId(PROFILE_TOP_BTN);

        expect(window.location.pathname).toBe('/foods');
        userEvent.click(profileBtn);
        expect(window.location.pathname).toBe('/profile');
      });
    it('Botão de busca ativa e desativa corretamente a barra de busca',
      () => {
        renderPath('/');
        const EMAIL_INPUT = screen.getByTestId(EMAIL_TESTID);
        const PASSWORD_INPUT = screen.getByTestId(PASSWORD_TESTID);
        const LOGIN_BTN = screen.getByTestId(LOGIN_BTN_TESTID);
        userEvent.type(EMAIL_INPUT, TESTER_EMAIL);
        userEvent.type(PASSWORD_INPUT, TESTER_PASSWORD);
        userEvent.click(LOGIN_BTN);

        const searchBtn = screen.getByTestId(SEARCH_TOP_BTN);
        userEvent.click(searchBtn);
        const searchInput = screen.getByTestId(SEARCH_INPUT);
        expect(searchInput).toBeInTheDocument();
        userEvent.click(searchBtn);
        expect(searchInput).not.toBeInTheDocument();
      });
  });

describe('Header é mostrado nas páginas especificadas',
  () => {});

describe('Header não deve ser exibido nas páginas especificadas',
  () => {});

// Todas as [rotas](#rotas) serão verificadas. Os ícones podem ser encontrados em `src/images/profileIcon.svg` e em `src/images/searchIcon.svg`.

//   O que será verificado:
//   ```
//   - Não tem header na tela de login
//   - O header tem os ícones corretos na tela de principal de receitas de comidas
//   - O header tem os ícones corretos na tela de principal de receitas de bebidas
//   - Não tem header na tela de detalhes de uma receita de comida
//   - Não tem header na tela de detalhes de uma receita de bebida
//   - Não tem header na tela de receita em progresso de comida
//   - Não tem header na tela de receita em progresso de bebida
//   - O header tem os ícones corretos na tela de explorar
//   - O header tem os ícones corretos na tela de explorar comidas
//   - O header tem os ícones corretos na tela de explorar bebidas
//   - O header tem os ícones corretos na tela de explorar comidas por ingrediente
//   - O header tem os ícones corretos na tela de explorar bebidas por ingrediente
//   - O header tem os ícones corretos na tela de explorar comidas por nacionalidade
//   - O header tem os ícones corretos na tela de perfil
//   - O header tem os ícones corretos na tela de receitas feitas
//   - O header tem os ícones corretos na tela de receitas favoritas
//   ```
