// ## Barra de busca - Header
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import renderPath from '../helpers/tests/renderPath';

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
    it('Há um input para inserir dados e radios Ingredient, First Letter e Name',
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

// ### 13 - Implemente os elementos da barra de busca respeitando os atributos descritos no protótipo

// Deve existir os data-testids tanto da barra de busca quanto de todos os radio-buttons.

//   **Observações técnicas**

//   * O radio button de busca de ingrediente deve possuir o atributo `data-testid="ingredient-search-radio"`;
//   * O radio button de busca por nome deve possuir o atributo `data-testid="name-search-radio"`;
//   * O radio button de busca da primeira letra deve possuir o atributo `data-testid="first-letter-search-radio"`.
//   * O botão de busca deve possuir o atributo `data-testid="exec-search-btn"`

//   O que será verificado:
//   ```
//   - Tem os data-testids tanto da barra de busca quanto de todos os radio-buttons
//   ```

// ### 14 - Posicione a barra logo abaixo do header e implemente 3 radio buttons: Ingredient, Name e First letter

// A barra de busca deve ficar logo abaixo do header e deve possuir 3 _radio buttons_: `Ingredient`, `Name` e `First letter`. Eles, em conjunto com a `search-input`, devem mudar a forma como serão filtradas as receitas após clicar no botão `Search`.  Os _endpoints_ da API que você deve usar podem ser consultados [aqui para a API de comidas](https://www.themealdb.com/api.php) e [aqui para a API de bebidas](https://www.thecocktaildb.com/api.php).

//   **Observações técnicas**

//   * Se o radio selecionado for `Ingredient`, a busca na API é feita corretamente pelo ingrediente. O endpoint utilizado deve ser `https://www.themealdb.com/api/json/v1/1/filter.php?i={ingrediente}`;
//   * Se o radio selecionado for `Name`, a busca na API é feita corretamente pelo nome. O endpoint utilizado deve ser `https://www.themealdb.com/api/json/v1/1/search.php?s={nome}`;
//   * Se o radio selecionado for `First letter`, a busca na API é feita corretamente pela primeira letra. O endpoint utilizado deve ser `https://www.themealdb.com/api/json/v1/1/search.php?f={primeira-letra}`;
//   * Se o radio selecionado for `First letter` e a busca na API for feita com mais de uma letra, deve-se exibir um `alert` com a mensagem "Your search must have only 1 (one) character".

// **Atenção:** Utilize `global.alert` para evitar os `warnings` do eslint sobre o uso de `alert` no código.

// ##### Exemplo: Ao selecionar `Ingredient` e buscar por `chicken`, deve-se utilizar o endpoint `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken`.

// ##### Observação: Para esse requisito será verificada apenas a tela principal de receitas de comidas.

//   O que será verificado:
//   ```
//   - Se o radio selecionado for Ingredient, a busca na API é feita corretamente pelo ingrediente
//   - Se o radio selecionado for Name, a busca na API é feita corretamente pelo nome
//   - Se o radio selecionado for First letter, a busca na API é feita corretamente pela primeira letra
//   - Se o radio selecionado for First letter e a busca na API for feita com mais de uma letra, deve-se exibir um alert
//   ```

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
