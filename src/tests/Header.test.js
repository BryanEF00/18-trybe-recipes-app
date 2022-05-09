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

describe('Header é mostrado nas páginas principais',
  () => {
    it('Exibir header na tela de principal de receitas de comidas',
      () => {
        renderPath('/foods');
        const profileBtn = screen.getByTestId(PROFILE_TOP_BTN);
        const searchBtn = screen.getByTestId(SEARCH_TOP_BTN);
        const pageTitle = screen.getByTestId(PAGE_TITLE);
        expect(profileBtn).toBeInTheDocument();
        expect(searchBtn).toBeInTheDocument();
        expect(pageTitle).toBeInTheDocument();
      });
    it('Exibir header na tela de principal de receitas de bebidas',
      () => {
        renderPath('/drinks');
        const profileBtn = screen.getByTestId(PROFILE_TOP_BTN);
        const searchBtn = screen.getByTestId(SEARCH_TOP_BTN);
        const pageTitle = screen.getByTestId(PAGE_TITLE);
        expect(profileBtn).toBeInTheDocument();
        expect(searchBtn).toBeInTheDocument();
        expect(pageTitle).toBeInTheDocument();
      });
    it('Exibir header na tela de explorar',
      () => {
        renderPath('/explore');
        const profileBtn = screen.getByTestId(PROFILE_TOP_BTN);
        const searchBtn = screen.getByTestId(SEARCH_TOP_BTN);
        const pageTitle = screen.getByTestId(PAGE_TITLE);
        expect(profileBtn).toBeInTheDocument();
        expect(searchBtn).toBeInTheDocument();
        expect(pageTitle).toBeInTheDocument();
      });
  });

describe('Header é mostrado nas sub-páginas de explorar',
  () => {
    it('Exibir header na tela de explorar comidas',
      () => {
        renderPath('/explore/foods');
        const profileBtn = screen.getByTestId(PROFILE_TOP_BTN);
        const searchBtn = screen.getByTestId(SEARCH_TOP_BTN);
        const pageTitle = screen.getByTestId(PAGE_TITLE);
        expect(profileBtn).toBeInTheDocument();
        expect(searchBtn).toBeInTheDocument();
        expect(pageTitle).toBeInTheDocument();
      });
    it('Exibir header na tela de explorar bebidas',
      () => {
        renderPath('/explore/drinks');
        const profileBtn = screen.getByTestId(PROFILE_TOP_BTN);
        const searchBtn = screen.getByTestId(SEARCH_TOP_BTN);
        const pageTitle = screen.getByTestId(PAGE_TITLE);
        expect(profileBtn).toBeInTheDocument();
        expect(searchBtn).toBeInTheDocument();
        expect(pageTitle).toBeInTheDocument();
      });
    it('Exibir header na tela de explorar comidas por ingrediente',
      () => {
        renderPath('/explore/foods/ingredients');
        const profileBtn = screen.getByTestId(PROFILE_TOP_BTN);
        const searchBtn = screen.getByTestId(SEARCH_TOP_BTN);
        const pageTitle = screen.getByTestId(PAGE_TITLE);
        expect(profileBtn).toBeInTheDocument();
        expect(searchBtn).toBeInTheDocument();
        expect(pageTitle).toBeInTheDocument();
      });
    it('Exibir header na tela de explorar bebidas por ingrediente',
      () => {
        renderPath('/explore/drinks/ingredients');
        const profileBtn = screen.getByTestId(PROFILE_TOP_BTN);
        const searchBtn = screen.getByTestId(SEARCH_TOP_BTN);
        const pageTitle = screen.getByTestId(PAGE_TITLE);
        expect(profileBtn).toBeInTheDocument();
        expect(searchBtn).toBeInTheDocument();
        expect(pageTitle).toBeInTheDocument();
      });
    it('Exibir header na tela de explorar comidas por nacionalidade',
      () => {
        renderPath('/explore/foods/nationalities');
        const profileBtn = screen.getByTestId(PROFILE_TOP_BTN);
        const searchBtn = screen.getByTestId(SEARCH_TOP_BTN);
        const pageTitle = screen.getByTestId(PAGE_TITLE);
        expect(profileBtn).toBeInTheDocument();
        expect(searchBtn).toBeInTheDocument();
        expect(pageTitle).toBeInTheDocument();
      });
  });

describe('Header é mostrado nas telas do user',
  () => {
    it('Exibir header na tela de perfil',
      () => {
        renderPath('/profile');
        const profileBtn = screen.getByTestId(PROFILE_TOP_BTN);
        const searchBtn = screen.getByTestId(SEARCH_TOP_BTN);
        const pageTitle = screen.getByTestId(PAGE_TITLE);
        expect(profileBtn).toBeInTheDocument();
        expect(searchBtn).toBeInTheDocument();
        expect(pageTitle).toBeInTheDocument();
      });
    it('Exibir header na tela de receitas favoritas',
      () => {
        renderPath('/favorite-recipes');
        const profileBtn = screen.getByTestId(PROFILE_TOP_BTN);
        const searchBtn = screen.getByTestId(SEARCH_TOP_BTN);
        const pageTitle = screen.getByTestId(PAGE_TITLE);
        expect(profileBtn).toBeInTheDocument();
        expect(searchBtn).toBeInTheDocument();
        expect(pageTitle).toBeInTheDocument();
      });
    it('Exibir header na tela de receitas feitas',
      () => {
        renderPath('/done-recipes');
        const profileBtn = screen.getByTestId(PROFILE_TOP_BTN);
        const searchBtn = screen.getByTestId(SEARCH_TOP_BTN);
        const pageTitle = screen.getByTestId(PAGE_TITLE);
        expect(profileBtn).toBeInTheDocument();
        expect(searchBtn).toBeInTheDocument();
        expect(pageTitle).toBeInTheDocument();
      });
  });

describe('Header não deve ser exibido nas páginas especificadas',
  () => {
    it('Não exibir header na tela de login',
      () => {
        const { history } = renderPath('/foods');
        const profileBtn = screen.getByTestId(PROFILE_TOP_BTN);
        const searchBtn = screen.getByTestId(SEARCH_TOP_BTN);
        const pageTitle = screen.getByTestId(PAGE_TITLE);
        history.push('/');
        expect(profileBtn).not.toBeInTheDocument();
        expect(searchBtn).not.toBeInTheDocument();
        expect(pageTitle).not.toBeInTheDocument();
      });
    it('Não exibir header nas telas de detalhes de receitas de comidas ou bebidas',
      () => {
        const { history } = renderPath('/foods');
        const profileBtn = screen.getByTestId(PROFILE_TOP_BTN);
        const searchBtn = screen.getByTestId(SEARCH_TOP_BTN);
        const pageTitle = screen.getByTestId(PAGE_TITLE);
        history.push('/foods/52771');
        expect(profileBtn).not.toBeInTheDocument();
        expect(searchBtn).not.toBeInTheDocument();
        expect(pageTitle).not.toBeInTheDocument();
        history.push('/foods/52771');
        expect(profileBtn).not.toBeInTheDocument();
        expect(searchBtn).not.toBeInTheDocument();
        expect(pageTitle).not.toBeInTheDocument();
      });
    it('Não tem header na tela de receita em progresso de comida ou bebida',
      () => {
        const { history } = renderPath('/foods');
        const profileBtn = screen.getByTestId(PROFILE_TOP_BTN);
        const searchBtn = screen.getByTestId(SEARCH_TOP_BTN);
        const pageTitle = screen.getByTestId(PAGE_TITLE);
        history.push('/foods/52771/in-progress');
        expect(profileBtn).not.toBeInTheDocument();
        expect(searchBtn).not.toBeInTheDocument();
        expect(pageTitle).not.toBeInTheDocument();
        history.push('/drinks/178319/in-progress');
        expect(profileBtn).not.toBeInTheDocument();
        expect(searchBtn).not.toBeInTheDocument();
        expect(pageTitle).not.toBeInTheDocument();
      });
  });
