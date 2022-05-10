// Tela principal de receitas
// Observação: lembre de componentizar muito bem os elementos em React nessa tela para evitar problemas de lógica e de complexidade ;).
// 25 - Implemente os elementos da tela principal de receitas respeitando os atributos descritos no protótipo
// O que será verificado:

// - A tela tem os data-testids de todos os 12 cards da tela de comidas
// - A tela tem os data-testids de todos os 12 cards da tela de bebidas
// 26 - Carregue as 12 primeiras receitas de comidas ou bebidas, uma em cada card
// O Card de receita deve conter sua foto (strMealThumb ou strDrinkThumb) e seu nome (strMeal ou strDrink).

// Observações técnicas

// Caso as receitas sejam de comida, deve-se carregar as 12 primeiras receitas obtidas através do endpoint https://www.themealdb.com/api/json/v1/1/search.php?s=;
// Caso as receitas sejam de bebida, deve-se carregar as 12 primeiras receitas obtidas através do endpoint https://www.thecocktaildb.com/api/json/v1/1/search.php?s=.
// O que será verificado:

// - Caso as receitas sejam de comida, deve-se carregar as 12 primeiras receitas
// - Caso as receitas sejam de bebida, deve-se carregar as 12 primeiras receitas
// 27 - Implemente os botões de categoria para serem utilizados como filtro
// Cada botão deve conter o atributo prefixado data-testid=${categoryName}-category-filter e devem ser exibidas apenas as 5 primeiras categorias retornadas da API.

// Observações técnicas

// Caso as receitas sejam de comida, deve-se exibir as 5 primeiras categorias de comida obtidas através do endpoint https://www.themealdb.com/api/json/v1/1/list.php?c=list;
// Caso as receitas sejam de bebida, deve-se exibir as 5 primeiras categorias de bebida obtidas através do endpoint https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list.
// O que será verificado:

// - Caso as receitas sejam de comida, deve-se exibir as 5 primeiras categorias de comida
// - Caso as receitas sejam de bebida, deve-se exibir as 5 primeiras categorias de bebida
// 28 - Implemente o filtro das receitas através da API ao clicar no filtro de categoria
// As receitas, filtradas por categorias, devem ser obtidas através da API de comidas ou bebidas, utilizando para as duas API's os endpoints de Filter by Category.

// O que será verificado:

// - Caso as receitas sejam de comida e a categoria seja "Beef", deve-se carregar as 12 primeiras receitas da categoria "Beef"
// - Caso as receitas sejam de comida e a categoria seja "Breakfast", deve-se carregar as 12 primeiras receitas da categoria "Breakfast"
// - Caso as receitas sejam de comida e a categoria seja "Chicken", deve-se carregar as 12 primeiras receitas da categoria "Chicken"
// - Caso as receitas sejam de comida e a categoria seja "Dessert", deve-se carregar as 12 primeiras receitas da categoria "Dessert"
// - Caso as receitas sejam de comida e a categoria seja "Goat", deve-se carregar as 12 primeiras receitas da categoria "Goat"
// - Caso as receitas sejam de bebida e a categoria seja "Ordinary Drink", deve-se carregar as 12 primeiras receitas da categoria "Ordinary Drink"
// - Caso as receitas sejam de bebida e a categoria seja "Cocktail", deve-se carregar as 12 primeiras receitas da categoria "Cocktail"
// - Caso as receitas sejam de bebida e a categoria seja "Milk / Float / Shake", deve-se carregar as 12 primeiras receitas da categoria "Milk / Float / Shake"
// - Caso as receitas sejam de bebida e a categoria seja "Other/Unknown", deve-se carregar as 12 primeiras receitas da categoria "Other/Unknown"
// - Caso as receitas sejam de bebida e a categoria seja "Cocoa", deve-se carregar as 12 primeiras receitas da categoria "Cocoa"
// Atenção: Caso a categoria retorne apenas um resultado, NÃO deve ser feito o redirecionamento para a página de detalhes.

// 29 - Implemente o filtro como um toggle, que se for selecionado de novo, o app deve retornar as receitas sem nenhum filtro
// O que será verificado:

// - Caso as receitas sejam de comida e o filtro tenha sido selecionado novamente, deve-se retornar as 12 primeiras receitas sem filtro
// - Caso as receitas sejam de bebida e o filtro tenha sido selecionado novamente, deve-se retornar as 12 primeiras receitas sem filtro
// 30 - Implemente o filtro de categoria para que apenas um seja selecionado por vez
// Ou seja, se outro filtro de categoria for selecionado, ele deve substituir o anterior.

// O que será verificado:

// - Caso as receitas sejam de comida apenas um filtro de categoria deve poder ser selecionado por vez
// - Caso as receitas sejam de bebida apenas um filtro de categoria deve poder ser selecionado por vez
// 31 - Desenvolva o filtro de categorias com a opção de filtrar por todas as categorias
// Ou seja, retornando novamente todas as receitas. O nome do filtro deve ser "All", ele deve possuir data-testid=All-category-filter.

// O que será verificado:

// - Caso as receitas sejam de comida deve existir a opção de filtrar por todas as categorias
// - Caso as receitas sejam de bebida deve existir a opção de filtrar por todas as categorias
// 32 - Redirecione a pessoa usuária, ao clicar no card, para a tela de detalhes, que deve mudar a rota e conter o id da receita na URL
// Além de dizer se a pessoa veio da tela de comidas ou de bebidas. Exemplo: /foods/{id-da-receita}.

// O que será verificado:

// - Caso as receitas sejam de comida a rota deve mudar para a tela de detalhes da receita
// - Caso as receitas sejam de bebida a rota deve mudar para a tela de detalhes da receita
