// ## Tela de explorar por nacionalidades

// ### 78 - Implemente os elementos da tela de explorar por nacionalidades respeitando os atributos descritos no protótipo

//   O elemento de dropdown deve possuir o atributo `data-testid="explore-by-nationality-dropdown"` e suas opções devem possuir o atributo `[data-testid="${nacionalidade}-option"]`.

//   O que será verificado:
//   ```
//   - A tela tem os data-testids de todos os 12 cards e de todas as nacionalidades.
//   ```

// ### 79 - Desenvolva as mesmas especificações da tela de receitas principal, com a diferença de que os filtros de categoria são substituídos por um dropdown

//   O elemento de dropdown deve possuir o atributo `data-testid="explore-by-nationality-dropdown"`.

//   O que será verificado:
//   ```
//   - Devem ser carregadas as 12 primeiras receitas de comidas;
//   - Ao selecionar um filtro de nacionalidade, todas as receitas devem mudar para os dados filtrados da API;
//   - Ao clicar no card, a rota deve mudar para a tela de detalhes da receita com o ID da mesma na URL.
//   ```

// ### 80 - Implemente o dropdown de maneira que devem estar disponíveis todas as áreas retornadas da API, incluindo a opção "All", que retorna as receitas sem nenhum filtro

//   O que será verificado:
//   ```
//   - No dropdown devem estar disponíveis todas as áreas retornadas da API, incluindo a opção "All";
//   - A opção "All" retorna as receitas sem nenhum filtro.
//   ```

// ### 81 - Implemente a rota que deve ser apenas `/explore/foods/nationalities`

// A rota `/explore/drinks/nationalities` não deve estar disponível, retornando um erro de "Not Found".

//   O que será verificado:
//   ```
//   - Ao acessar a rota ela retorna um erro de "Not Found".
//   ```
