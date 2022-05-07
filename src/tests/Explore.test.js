// ## Tela de explorar

// ### 67 - Implemente os elementos da tela de explorar respeitando os atributos descritos no protótipo

//   O que será verificado:
//   ```
//   - Tem os data-testids explore-foods e explore-drinks.
//   ```

// ### 68 - Desenvolva a tela de maneira que tenha 2 botões: um para explorar comidas e o outro para explorar bebidas

// Verifica se o atributo `data-testid="explore-foods"` possui o texto "Explore Foods" e se o `data-testid="explore-drinks"` possui o texto "Explore Drinks".

//   O que será verificado:
//   ```
//   - O nomes dos botões devem ser "Explore Foods" e "Explore Drinks"
//   ```

// ### 69 - Redirecione a pessoa usuária ao clicar em um dos botões, a rota deve mudar para a página de explorar comidas ou de explorar bebidas

//   O que será verificado:
//   ```
//   - Ao clicar no botão "Explore Foods" a rota muda para a página de explorar comidas;
//   - Ao clicar no botão "Explore Drinks" a rota muda para a página de explorar bebidas.
//   ```

// ## Tela de explorar bebidas ou comidas

// ### 70 - Implemente os elementos da tela de explorar bebidas ou comidas respeitando os atributos descritos no protótipo

//   O que será verificado:
//   ```
//   - Tem os data-testids corretos para a tela de explorar comidas;
//   - Tem os data-testids corretos para a tela de explorar bebidas.
//   ```

// ### 71 - Desenvolva 3 botões: um para explorar por ingrediente, um para explorar por nacionalidade e um para pegar uma receita aleatória

// O nomes dos botões devem ser:
// 1. "By Ingredient" com o atributo `data-testid="explore-by-ingredient"`;
// 2. "By Nationality" com o atributo `data-testid="explore-by-nationality"` e;
// 3. "Surprise me!" com o atributo `data-testid="explore-surprise"`.

// Obs: se a opção escolhida for explorar bebidas, o botão para explorar por nacionalidade ("By Nationality") não deve estar disponível.

//   O que será verificado:
//   ```
//   - Tem os botões "By Ingredient", "By Nationality" e "Suprise me!" para a tela de explorar comidas;
//   - Tem apenas os botões "By Ingredient" e "Surprise me!" para a tela de explorar bebidas.
//   ```

// ### 72 - Redirecione a pessoa usuária ao clicar em "By Ingredient", para a tela de explorar por ingredientes

//   O que será verificado:
//   ```
//   - Ao clicar no botão "By Ingredient" da tela de *explorar comidas* a rota muda para a página de explorar comidas por ingrediente;
//   - Ao clicar no botão "By Ingredient" da tela de *explorar bebidas* a rota muda para a página de explorar bebidas por ingrediente.
//   ```

// ### 73 - Redirecione a pessoa usuária ao clicar em "By Nationality", a rota deve mudar para tela de explorar por nacionalidades

//   O que será verificado:
//   ```
//   - A rota deve mudar para tela de explorar por nacionalidades
//   ```

// ### 74 - Redirecione a pessoa usuária ao clicar em "Surprise me!", a rota deve mudar para a tela de detalhes de uma receita, que deve ser escolhida de forma aleatória através da API

//   **Observações técnicas**

//   * Ao clicar no botão "Surprise me!" da tela de *explorar comidas* a rota muda para a página de detalhes de uma comida aleatória obtida através do endpoint `https://www.themealdb.com/api/json/v1/1/random.php`;
//   * Ao clicar no botão "Surprise me!" da tela de *explorar bebidas* a rota muda para a página de detalhes de uma bebida aleatória obtida através do endpoint `https://www.thecocktaildb.com/api/json/v1/1/random.php`.

//   O que será verificado:
//   ```
//   - Ao clicar no botão "Surprise me!" da tela de explorar comidas a rota muda para a página de detalhes de uma comida aleatória
//   - Ao clicar no botão "Surprise me!" da tela de explorar bebidas a rota muda para a página de detalhes de uma bebida aleatória
//   ```
