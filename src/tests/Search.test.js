// ## Barra de busca - Header
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderPath from '../helpers/tests/renderPath';

import fetchMock from '../../cypress/mocks/fetch';
import {
  EXEC_SEARCH_BTN,
  FIRSTLETTER_SEARCH_RADIO,
  INGREDIENTS_SEARCH_RADIO,
  NAME_SEARCH_RADIO,
  SEARCH_INPUT,
  SEARCH_TOP_BTN,
} from '../helpers/tests/constants';

describe('Barra de busca é renderizada conforme especificado em protótipo',
  () => {
    it('Há o input para inserir dados e 3 radio buttons: Ingredient, First Letter e Name',
      () => {
        renderPath('/foods');
        const searchBtn = screen.getByTestId(SEARCH_TOP_BTN);
        userEvent.click(searchBtn);
        const searchInput = screen.getByTestId(SEARCH_INPUT);
        const ingredientRadio = screen.getByTestId(INGREDIENTS_SEARCH_RADIO);
        const nameRadio = screen.getByTestId(NAME_SEARCH_RADIO);
        const firstLetterRadio = screen.getByTestId(FIRSTLETTER_SEARCH_RADIO);
        const execSearchBtn = screen.getByTestId(EXEC_SEARCH_BTN);
        expect(ingredientRadio).toBeInTheDocument();
        expect(nameRadio).toBeInTheDocument();
        expect(firstLetterRadio).toBeInTheDocument();
        expect(execSearchBtn).toBeInTheDocument();
        expect(searchInput).toBeInTheDocument();
      });
  });

describe('Busca item conforme tipo selecionado via radio button',
  () => {
    beforeEach(() => {
      global.fetch = jest.fn((url) => fetchMock(url));
    });
    afterEach(() => {
      jest.clearAllMocks();
    });
    it('Selecionando radio Ingredient, busca na API é feita pelo ingrediente',
      async () => {
        renderPath('/foods');
        const searchBtn = screen.getByTestId(SEARCH_TOP_BTN);
        userEvent.click(searchBtn);
        const searchInput = screen.getByTestId(SEARCH_INPUT);
        const ingredientRadio = screen.getByTestId(INGREDIENTS_SEARCH_RADIO);
        const execSearchBtn = screen.getByTestId(EXEC_SEARCH_BTN);

        userEvent.click(ingredientRadio);
        userEvent.type(searchInput, 'chicken');
        userEvent.click(execSearchBtn);

        await waitFor(() => expect(global.fetch).toHaveBeenCalled());
        await waitFor(() => expect(global.fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/filter.php?i=Chicken'));
      });
    it('Selecionando radio Name, busca na API é feita pelo nome',
      async () => {
        renderPath('/foods');
        const searchBtn = screen.getByTestId(SEARCH_TOP_BTN);
        userEvent.click(searchBtn);
        const searchInput = screen.getByTestId(SEARCH_INPUT);
        const nameRadio = screen.getByTestId(NAME_SEARCH_RADIO);
        const execSearchBtn = screen.getByTestId(EXEC_SEARCH_BTN);

        userEvent.click(nameRadio);
        userEvent.type(searchInput, 'soup');
        userEvent.click(execSearchBtn);

        await waitFor(() => expect(global.fetch).toHaveBeenCalled());
        await waitFor(() => expect(global.fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/search.php?s=soup'));
      });
  });
describe('Busca item utilizando radio button First Letter',
  () => {
    beforeEach(() => {
      global.fetch = jest.fn((url) => fetchMock(url));
    });
    afterEach(() => {
      jest.clearAllMocks();
    });
    it('Selecionando radio  First letter, a busca na API é feita pelo primeira letra',
      async () => {
        renderPath('/foods');
        const searchBtn = screen.getByTestId(SEARCH_TOP_BTN);
        userEvent.click(searchBtn);
        const searchInput = screen.getByTestId(SEARCH_INPUT);
        const firstLetterRadio = screen.getByTestId(FIRSTLETTER_SEARCH_RADIO);
        const execSearchBtn = screen.getByTestId(EXEC_SEARCH_BTN);

        userEvent.click(firstLetterRadio);
        userEvent.type(searchInput, 'a');
        userEvent.click(execSearchBtn);

        await waitFor(() => expect(global.fetch).toHaveBeenCalled());
        await waitFor(() => expect(global.fetch).toHaveBeenCalledWith('https://www.themealdb.com/api/json/v1/1/search.php?f=a'));
      });
    it('Selecionando First letter, exibe alert se busca for feita com mais de uma letra',
      async () => {
        renderPath('/foods');
        const searchBtn = screen.getByTestId(SEARCH_TOP_BTN);
        userEvent.click(searchBtn);
        const searchInput = screen.getByTestId(SEARCH_INPUT);
        const firstLetterRadio = screen.getByTestId(FIRSTLETTER_SEARCH_RADIO);
        const execSearchBtn = screen.getByTestId(EXEC_SEARCH_BTN);

        userEvent.click(firstLetterRadio);
        userEvent.type(searchInput, 'xablau');
        userEvent.click(execSearchBtn);

        await waitFor(() => expect(global.alert).toHaveBeenCalledWith(
          'Your search must have only 1 (one) character',
        ));
      });
  });

// ### 15 - Busque na API de comidas caso a pessoa esteja na página de comidas e na de bebidas caso esteja na de bebidas

//   **Observações técnicas**

//   * Na tela de bebidas, se o radio selecionado for `Ingredient`, a busca na API é feita corretamente pelo ingrediente. O endpoint utilizado deve ser `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i={ingrediente}`;
//   * Na tela de bebidas, se o radio selecionado for `Name`, a busca na API é feita corretamente pelo nome. O endpoint utilizado deve ser `https://www.thecocktaildb.com/api/json/v1/1/search.php?s={nome}`;
//   * Na tela de bebidas, se o radio selecionado for `First letter`, a busca na API é feita corretamente pela primeira letra. O endpoint utilizado deve ser `https://www.thecocktaildb.com/api/json/v1/1/search.php?f={primeira-letra}`;
//   * Na tela de bebidas, se o radio selecionado for `First letter` e a busca na API for feita com mais de uma letra, deve-se exibir um `alert` com a mensagem "Your search must have only 1 (one) character".
// ##### Observação: Para esse requisito será verificada apenas a tela principal de receitas de bebidas, já que a de comidas já foi verificada no requisito 14.

//   O que será verificado:
//   ```
//   - Na tela de bebidas, se o radio selecionado for Ingredient, a busca na API é feita corretamente pelo ingrediente
//   - Na tela de bebidas, se o radio selecionado for Name, a busca na API é feita corretamente pelo nome
//   - Na tela de bebidas, se o radio selecionado for First letter, a busca na API é feita corretamente pela primeira letra
//   - Na tela de bebidas, se o radio selecionado for First letter e a busca na API for feita com mais de uma letra, deve-se exibir um alert
//   ```

// ### 16 - Redirecione para a tela de detalhes da receita caso apenas uma receita seja encontrada, com o ID da mesma na URL

//   **Observações técnicas**

//   * Caso apenas uma comida seja encontrada, deve-se ir para sua rota de detalhes (`/foods/{id-da-receita}`);
//   * Caso apenas uma bebida seja encontrada, deve-se ir para sua rota de detalhes (`/drinks/{id-da-receita}`).

//   O que será verificado:
//   ```
//   - Caso apenas uma comida seja encontrada, deve-se ir para sua rota de detalhes
//   - Caso apenas uma bebida seja encontrada, deve-se ir para sua rota de detalhes
//   ```

// ### 17 - Mostre as receitas em cards caso mais de uma receita seja encontrada

//   Mostre as receitas em cards como as da tela principal, caso mais de uma receita seja encontrada.

//    **Observações técnicas**
//   * Cada card deve conter o `data-testid="${index}-recipe-card"`.
//   * Cada imagem deve conter o `data-testid="${index}-card-img"`.
//   * Cada tag com o nome da receita deve ter o `data-testid="${index}-card-name"`.
//   * Caso mais de uma bebida seja encontrada, mostrar as 12 primeiras (ou menos, se não hoverem 12).

//   O que será verificado:
//   ```
//   - Caso mais de uma comida seja encontrada, mostrar as 12 primeiras
//   - Caso mais de uma bebida seja encontrada, mostrar as 12 primeiras
//   ```

// ### 18 - Exiba um `alert` caso nenhuma receita seja encontrada

//   O alert deve contendo o texto "Sorry, we haven't found any recipes for these filters."

//   O que será verificado:
//   ```
//   - Caso nenhuma comida seja encontrada o alert deve ser exibido
//   - Caso nenhuma bebida seja encontrada o alert deve ser exibido
