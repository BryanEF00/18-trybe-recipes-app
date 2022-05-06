// ## Tela de receitas favoritas

// ### 60 - Implemente os elementos da tela de receitas favoritas (cumulativo com os atributos em comum com a tela de receitas feitas) respeitando os atributos descritos no protótipo

//   O que será verificado:
//   ```
//   - Todos os data-testids, cumulativo com os atributos em comum com a tela de receitas feitas, estão disponíveis
//   ```

// ### 61 - Desenvolva a tela de maneira que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita, o nome, a categoria, a nacionalidade, um botão de compartilhar e um de "desfavoritar"

// Os ícones dos botões podem ser encontrados em `src/images/shareIcon.svg` e em `src/images/blackHeartIcon.svg`, respectivamente.

//   O que será verificado:
//   ```
//   - O card possui os atributos corretos de uma comida
//   ```

// ### 62 - Desenvolva a tela de maneira que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, o nome, se é alcoólica ou não, um botão de compartilhar e um de "desfavoritar"

// Os ícones dos botões podem ser encontrados em `src/images/shareIcon.svg` e em `src/images/blackHeartIcon.svg`, respectivamente.

//   O que será verificado:
//   ```
//   - O card possui os atributos corretos de uma bebida.
//   ```

// ### 63 - Desenvolva a solução de maneira que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard

//   O que será verificado:
//   ```
//   - Ao clicar no botão de compartilhar deve aparecer a mensagem "Link copied!";
//   - A URL da tela de detalhes da receita é copiada para o clipboard.
//   ```

// ### 64 - Desenvolva a solução de maneira que o botão de "desfavoritar" deve remover a receita da lista de receitas favoritas do `localStorage` e da tela

//   O que será verificado:
//   ```
//   - Ao clicar no botão de "desfavoritar" a respectiva receita é removida da tela;
//   - Ao clicar no botão de "desfavoritar" a respectiva receita é removida do `localStorage`.
//   ```

// ### 65 - Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros

// Os nomes dos botões devem ser "Food", "Drinks" e "All", respectivamente

//   O que será verificado:
//   ```
//   - Ao clicar no botão "Food" as receitas devem ser filtradas por comidas;
//   - Ao clicar no botão "Drinks" as receitas devem ser filtradas por bebidas;
//   - Ao clicar no botão "All" o filtro deve ser removido.
//   ```

// ### 66 - Redirecione a pessoa usuária ao clicar na foto ou no nome da receita, a rota deve mudar para a tela de detalhes daquela receita

//   O que será verificado:
//   ```
//   - Ao clicar na foto da receita, a rota deve mudar para a tela de detalhes daquela receita;
//   - Ao clicar no nome da receita, a rota deve mudar para a tela de detalhes daquela receita.
