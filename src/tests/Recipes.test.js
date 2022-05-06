// ## Tela principal de receitas (foods & drinks)

// ### 25 - Implemente os elementos da tela principal de receitas respeitando os atributos descritos no protótipo

// O que será verificado:
// - A tela tem os data-testids de todos os 12 cards da tela de comidas
// - A tela tem os data-testids de todos os 12 cards da tela de bebidas

// ### 26 - Carregue as 12 primeiras receitas de comidas ou bebidas, uma em cada card

// O Card de receita deve conter sua foto (`strMealThumb` ou `strDrinkThumb`) e seu nome (`strMeal` ou `strDrink`).

//  **Observações técnicas**
//  * Caso as receitas sejam de comida, deve-se carregar as 12 primeiras receitas obtidas através do endpoint `https://www.themealdb.com/api/json/v1/1/search.php?s=`;
//  * Caso as receitas sejam de bebida, deve-se carregar as 12 primeiras receitas obtidas através do endpoint `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`.

// O que será verificado:
// - Caso as receitas sejam de comida, deve-se carregar as 12 primeiras receitas
// - Caso as receitas sejam de bebida, deve-se carregar as 12 primeiras receitas
// ```

// ### 27 - Implemente os botões de categoria para serem utilizados como filtro

// Cada botão deve conter o atributo prefixado `data-testid=${categoryName}-category-filter` e devem ser exibidas apenas as 5 primeiras categorias retornadas da API.

//  **Observações técnicas**
//  * Caso as receitas sejam de comida, deve-se exibir as 5 primeiras categorias de comida obtidas através do endpoint `https://www.themealdb.com/api/json/v1/1/list.php?c=list`;
//  * Caso as receitas sejam de bebida, deve-se exibir as 5 primeiras categorias de bebida obtidas através do endpoint `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`.

// O que será verificado:
// - Caso as receitas sejam de comida, deve-se exibir as 5 primeiras categorias de comida
// - Caso as receitas sejam de bebida, deve-se exibir as 5 primeiras categorias de bebida
// ```

// ### 28 - Implemente o filtro das receitas através da API ao clicar no filtro de categoria

// As receitas, filtradas por categorias, devem ser obtidas através da API de [comidas](https://www.themealdb.com/api.php) ou [bebidas](https://www.thecocktaildb.com/api.php), utilizando para as duas API's os endpoints de `Filter by Category`.

//  O que será verificado:
//  - Caso as receitas sejam de comida e a categoria seja "Beef", deve-se carregar as 12 primeiras receitas da categoria "Beef"
//  - Caso as receitas sejam de comida e a categoria seja "Breakfast", deve-se carregar as 12 primeiras receitas da categoria "Breakfast"
//  - Caso as receitas sejam de comida e a categoria seja "Chicken", deve-se carregar as 12 primeiras receitas da categoria "Chicken"
//  - Caso as receitas sejam de comida e a categoria seja "Dessert", deve-se carregar as 12 primeiras receitas da categoria "Dessert"
//  - Caso as receitas sejam de comida e a categoria seja "Goat", deve-se carregar as 12 primeiras receitas da categoria "Goat"
//  - Caso as receitas sejam de bebida e a categoria seja "Ordinary Drink", deve-se carregar as 12 primeiras receitas da categoria "Ordinary Drink"
//  - Caso as receitas sejam de bebida e a categoria seja "Cocktail", deve-se carregar as 12 primeiras receitas da categoria "Cocktail"
//  - Caso as receitas sejam de bebida e a categoria seja "Milk / Float / Shake", deve-se carregar as 12 primeiras receitas da categoria "Milk / Float / Shake"
//  - Caso as receitas sejam de bebida e a categoria seja "Other/Unknown", deve-se carregar as 12 primeiras receitas da categoria "Other/Unknown"
//  - Caso as receitas sejam de bebida e a categoria seja "Cocoa", deve-se carregar as 12 primeiras receitas da categoria "Cocoa"
//  ```

// **Atenção:** Caso a categoria retorne apenas um resultado, **NÃO** deve ser feito o redirecionamento para a página de detalhes.

// ### 29 - Implemente o filtro como um toggle, que se for selecionado de novo, o app deve retornar as receitas sem nenhum filtro

//  O que será verificado:
//  - Caso as receitas sejam de comida e o filtro tenha sido selecionado novamente, deve-se retornar as 12 primeiras receitas sem filtro
//  - Caso as receitas sejam de bebida e o filtro tenha sido selecionado novamente, deve-se retornar as 12 primeiras receitas sem filtro
//  ```

// ### 30 - Implemente o filtro de categoria para que apenas um seja selecionado por vez

// Ou seja, se outro filtro de categoria for selecionado, ele deve substituir o anterior.

//  O que será verificado:
//  - Caso as receitas sejam de comida apenas um filtro de categoria deve poder ser selecionado por vez
//  - Caso as receitas sejam de bebida apenas um filtro de categoria deve poder ser selecionado por vez
//  ```

// ### 31 - Desenvolva o filtro de categorias com a opção de filtrar por todas as categorias

// Ou seja, retornando novamente todas as receitas. O nome do filtro deve ser "All", ele deve possuir `data-testid=All-category-filter`.

//  O que será verificado:
//  ```
//  - Caso as receitas sejam de comida deve existir a opção de filtrar por todas as categorias
//  - Caso as receitas sejam de bebida deve existir a opção de filtrar por todas as categorias
//  ```

// ### 32 - Redirecione a pessoa usuária, ao clicar no card, para a tela de detalhes, que deve mudar a rota e conter o id da receita na URL

//  Além de dizer se a pessoa veio da tela de comidas ou de bebidas. Exemplo: `/foods/{id-da-receita}`.

//  O que será verificado:
//  - Caso as receitas sejam de comida a rota deve mudar para a tela de detalhes da receita
//  - Caso as receitas sejam de bebida a rota deve mudar para a tela de detalhes da receita
//  ```

// ## Tela de detalhes de uma receita
// - **Observação:** lembre de componentizar muito bem os elementos em React nessa tela para evitar problemas de lógica e de complexidade ;).

// ### 33 - Implemente os elementos da tela de detalhes de uma receita respeitando os atributos descritos no protótipo

// A verificação será feita a partir dos atributos data-testids:

//  * A foto deve possuir o atributo `data-testid="recipe-photo"`;
//  * O título deve possuir o atributo `data-testid="recipe-title"`;
//  * O botão de compartilhar deve possuir o atributo `data-testid="share-btn"`;
//  * O botão de favoritar deve possuir o atributo `data-testid="favorite-btn"`;
//  * O texto da categoria deve possuir o atributo `data-testid="recipe-category"`;
//  * Os ingredientes devem possuir o atributo `data-testid="${index}-ingredient-name-and-measure"`;
//  * O texto de instruções deve possuir o atributo `data-testid="instructions"`;
//  * O vídeo, presente somente na tela de comidas, deve possuir o atributo `data-testid="video"`;
//  * O card de receitas recomendadas deve possuir o atributo `data-testid="${index}-recomendation-card"`;
//  * O botão de iniciar receita deve possuir o atributo `data-testid="start-recipe-btn"`;

//  O que será verificado:
//  - A tela de comida possui todos os atributos data-testid
//  - A tela de bebidas possui todos os atributos data-testid
//  ```

// ### 34 - Realize uma request para a API passando o `id` da receita que deve estar disponível nos parâmetros da URL

//  **Observações técnicas**

//  * Verifica se a requisição para a API de comidas foi realizada. O endpoint utilizado deve ser `https://www.themealdb.com/api/json/v1/1/lookup.php?i={id-da-receita}`;
//  * Verifica se a requisição para a API de bebidas foi realizada. O endpoint utilizado deve ser `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i={id-da-receita}`.

//  O que será verificado:
//  - Verifica se a requisição para a API de comidas foi realizada
//  - Verifica se a requisição para a API de bebidas foi realizada
//  ```

// ### 35 - Desenvolva a tela de forma que contenha uma imagem da receita, o título, a categoria (ou se é ou não alcoólico), uma lista de ingredientes seguidos pelas quantidades, instruções, um vídeo do youtube "embedado" e recomendações

// A verificação será feita através das receitas retornadas pela API, como por exemplo, o texto dos ingredientes e das instruções.

//  Lembre-se: O vídeo do youtube só deve estar disponível para receitas de comida, já que não é retornado pela [API de bebidas](https://www.thecocktaildb.com/api.php).

//  O que será verificado:
//  - Verifica se os elementos descritos no protótipo existem na tela de detalhes de comida
//  - Verifica se os elementos descritos no protótipo existem na tela de detalhes de bebida
//  ```

// ### 36 - Implemente as recomendações, para receitas de comida, a recomendação deverá ser bebida e vice-versa

//  **Observações técnicas**

//  * Verifica se a requisição para a API de bebidas foi realizada. O endpoint utilizado deve ser `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`;
//  * Verifica se a requisição para a API de comidas foi realizada. O endpoint utilizado deve ser `https://www.themealdb.com/api/json/v1/1/search.php?s=`.

//  O que será verificado:
//  ```
//  - Verifica se a requisição para a API de bebidas foi realizada
//  - Verifica se a requisição para a API de comidas foi realizada
//  ```

// ### 37 - Implemente os cards de recomendação, onde serão 6 cards, mas mostrando apenas 2 e o scroll é horizontal, similar a um `carousel`

//  **Observações técnicas**

//  * Verifica se existem todas as recomendações na tela de detalhes de uma comida. Apenas as 6 primeiras bebidas devem ser exibidas;
//  * Verifica se existem todas as recomendações na tela de detalhes de uma bebida. Apenas as 6 primeiras comidas devem ser exibidas.

//  O que será verificado:
//  ```
//  - Verifica se existem todas as recomendações na tela de detalhes de uma comida
//  - Verifica se existem todas as recomendações na tela de detalhes de uma bebida
//  ```

// ### 38 - Desenvolva um botão de nome "Start Recipe" que deve ficar fixo na parte de baixo da tela o tempo todo

// O que será verificado:
//  ```
//  - Verifica posicionamento do botão na tela de detalhes de comida
//  - Verifica posicionamento do botão na tela de detalhes de bebida
//  ```

// ### 39 - Implemente a solução de forma que caso a receita já tenha sido feita, o botão "Start Recipe" deve sumir
// >Obs: Lembre-se que as receitas `finalizadas` anteriormente estão salvas na chave `doneRecipes` assim como indicado na sessão [localStorage](#localstorage)!

//  O que será verificado:
//  ```
//  - Verifica se botão de iniciar receita não é visível na tela de detalhes de uma comida
//  - Verifica se botão de iniciar receita não é visível na tela de detalhes de uma bebida
//  ```

// ### 40 - Implemente a solução de modo que caso a receita tenha sido iniciada mas não finalizada, o texto do botão deve ser "Continue Recipe"
// >Obs: Lembre-se que as receitas `iniciadas` anteriormente estão salvas na chave `inProgressRecipes` assim como indicado na sessão [localStorage](#localstorage)!

//  O que será verificado:
//  ```
//  - Verifica botão de "Continue Recipe" na tela de detalhes de uma comida
//  - Verifica botão de "Continue Recipe" na tela de detalhes de uma bebida
//  ```

// ### 41 - Redirecione a pessoa usuária caso o botão "Start Recipe" seja clicado, a rota deve mudar para a tela de receita em progresso

//  O que será verificado:
//  ```
//  - Redireciona para tela de receita da comida em progresso
//  - Redireciona para tela de receita da bebida em progresso
//  ```

// ### 42 - Implemente um botão de compartilhar e um de favoritar a receita

//  O que será verificado:
//  ```
//  - Verifica se os botões estão disponíveis na tela de detalhes de uma comida
//  - Verifica se os botões estão disponíveis na tela de detalhes de uma bebida
//  ```

// ### 43 - Implemente a solução de forma que, ao clicar no botão de compartilhar, o link da receita dentro do app deve ser copiado para o clipboard e uma mensagem avisando que o link foi copiado deve aparecer

// O ícone do botão de compartilhar pode ser encontrado em `src/images/shareIcon.svg`.

//  O que será verificado:
//  ```
//  - Verifica a mensagem "Link copied!" e se o link da receita da comida foi copiado para o clipboard
//  - Verifica a mensagem "Link copied!" e se o link da receita da bebida foi copiado para o clipboard
//  ```

// ### 44 - Implemente o ícone do coração (favorito) de maneira que, deve vir preenchido caso a receita esteja favoritada e "despreenchido" caso contrário

// Os ícones dos botões podem ser encontrados em `src/images/whiteHeartIcon.svg` e em `src/images/blackHeartIcon.svg`, respectivamente.

//  O que será verificado:
//  ```
//  - Verifica se a comida favoritada vem com o coração preenchido
//  - Verifica se a comida não favoritada vem com o coração "despreenchido"
//  - Verifica se a bebida favoritada vem com o coração preenchido
//  - Verifica se a bebida não favoritada vem com o coração "despreenchido"
//  ```

// ### 45 - Implemente a lógica no botão de favoritar, caso seja clicado, o ícone do coração deve mudar seu estado atual, caso esteja preenchido deve mudar para "despreenchido" e vice-versa

//  O que será verificado:
//  ```
//  - Favorita a comida
//  - Desfavorita a comida
//  - Favorita a bebida
//  - Desfavorita a bebida
//  ```

// ### 46 - Salve as receitas favoritas no `localStorage` na chave `favoriteRecipes`

//  * As receitas favoritas devem ser salvas no `localStorage` na chave `favoriteRecipes` no formato `[{ id, type, nationality, category, alcoholicOrNot, name, image }]`.

//  O que será verificado:
//  ```
//  - Verifica se após favoritar a receita de uma comida, ela é salva corretamente no localStorage
//  - Verifica se após favoritar a receita de uma bebida, ela é salva corretamente no localStorage
//  ```
