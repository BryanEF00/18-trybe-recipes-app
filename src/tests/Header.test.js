import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';
import Foods from '../pages/Foods';

describe(`9 - Implemente os elementos do header na tela principal de receitas, 
respeitando os atributos descritos no protótipo`, () => {
  it('Tem os data-testids `profile-top-btn`, `page-title` e `search-top-btn`', () => {
    render(<Foods />);
    const profileBtn = screen.getByTestId('profile-top-btn');
    expect(profileBtn).toBeInTheDocument();
  });
  it('Há um elemento com o data-testid page-title', () => {
    render(<Foods />);
    const pageTitle = screen.getByTestId('page-title');
    expect(pageTitle).toBeInTheDocument();
  });
  it('Há um elemento com o data-testid search-top-btn', () => {
    render(<Foods />);
    const searchTopBtn = screen.getByTestId('search-top-btn');
    expect(searchTopBtn).toBeInTheDocument();
  });
});

// beforeEach(() => {
//   localStorage.clear();
// });
// it('Testar navegação', () => {
//   const { history } = renderWithRouter(<App />);
//   const inputEmail = screen.getByTestId('email-input');
//   const inputPassword = screen.getByTestId('password-input');
//   const btnSubmit = screen.getByTestId('password-input');
//   userEvent.type(inputPassword, TESTER_PASSWORD);
//   userEvent.type(inputEmail, TESTER_EMAIL);
//   userEvent.click(btnSubmit);
//   const { pathname } = history.location;
//   expect(pathname).toBe('/foods');
// });

// ## Header

// ### 9 - Implemente os elementos do header na tela principal de receitas, respeitando os atributos descritos no protótipo

//   O que será verificado:
//   ```
//   - Tem os data-testids `profile-top-btn`, `page-title` e `search-top-btn`
//   ```

// ### 10 - Implemente um ícone para a tela de perfil, um título e um ícone para a busca, caso exista no protótipo

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

// ### 11 - Redirecione a pessoa usuária para a tela de perfil ao clicar no botão de perfil

//   O que será verificado:
//   ```
//   - A mudança de tela ocorre corretamente
//   ```

// ### 12 - Desenvolva o botão de busca que, ao ser clicado, a barra de busca deve aparecer. O mesmo serve para escondê-la

//   * O input de busca deve possuir o atributo `data-testid="search-input"`

//   O que será verificado:
//   ```
//   - Ao clicar no botão de busca pela primeira vez a barra de busca aparece
//   - Ao clicar no botão de busca pela segunda vez a barra de busca desaparece
//   ```
