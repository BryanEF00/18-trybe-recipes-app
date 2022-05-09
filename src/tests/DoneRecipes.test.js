// ## Tela de receitas feitas

// ### 54 - Implemente os elementos da tela de receitas feitas respeitando os atributos descritos no protótipo

//   **Observações técnicas**

//   * Todos os data-testids estão presentes:
//     * O botão de filtro `All` deve ter o atributo `data-testid="filter-by-all-btn"`;
//     * O botão de filtro `Food` deve ter o atributo `data-testid="filter-by-food-btn"`;
//     * O botão de `Drinks` deve ter o atributo `data-testid="filter-by-drink-btn"`;
//     * O imagem do card de receita deve ter o atributo `data-testid="${index}-horizontal-image"`;
//     * O texto da categoria da receita deve ter o atributo `data-testid="${index}-horizontal-top-text"`;
//     * O texto do nome da receita deve ter o atributo `data-testid="${index}-horizontal-name"`;
//     * O texto da data que a receita foi feita deve ter o atributo `data-testid="${index}-horizontal-done-date"`;
//     * O elemento de compartilhar a receita deve ter o atributo `data-testid="${index}-horizontal-share-btn"`;
//     * As `tags` da receita devem possuir o atributo `data-testid=${index}-${tagName}-horizontal-tag`;

//   O que será verificado:
//   ```
//   - Todos os data-testids estão disponíveis
//   ```

// ### 55 - Desenvolva a tela de maneira que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita, o nome, a categoria, a nacionalidade, a data em que a pessoa fez a receita, as 2 primeiras tags retornadas pela API e um botão de compartilhar

// O ícone do botão de compartilhar pode ser encontrado em `src/images/shareIcon.svg`.

//   **Observações técnicas**

//   * O card possui os atributos corretos de uma comida

//   O que será verificado:
//   ```
//   - O card possui os atributos corretos de uma comida
//   ```

// ### 56 - Desenvolva a tela de maneira que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, o nome, se é alcoólica, a data em que a pessoa fez a receita e um botão de compartilhar

// O ícone do botão de compartilhar pode ser encontrado em `src/images/shareIcon.svg`.

//   O que será verificado:
//   ```
//   - O card possui os atributos corretos de uma bebida
//   ```

// ### 57 - Desenvolva a solução de maneira que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard

//   O que será verificado:
//   ```
//   - Ao clicar no botão de compartilhar deve aparecer a mensagem "Link copied!";
//   - A URL da tela de detalhes da receita é copiada para o clipboard.
//   ```

// ### 58 - Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros

// Os nomes dos botões devem ser "Food", "Drinks" e "All", respectivamente.

//   **Observações técnicas**

//   * Ao clicar no botão "Food" as receitas devem ser filtradas por comidas;
//   * Ao clicar no botão "Drinks" as receitas devem ser filtradas por bebidas;
//   * Ao clicar no botão "All" o filtro deve ser removido.

//   O que será verificado:
//   ```
//   - Ao clicar no botão "Food" as receitas devem ser filtradas por comidas;
//   - Ao clicar no botão "Drinks" as receitas devem ser filtradas por bebidas;
//   - Ao clicar no botão "All" o filtro deve ser removido.
//   ```

// ### 59 - Redirecione para a tela de detalhes da receita caso seja clicado na foto ou no nome da receita

//   O que será verificado:
//   ```
//   - Ao clicar na foto da receita, a rota deve mudar para a tela de detalhes daquela receita;
//   - Ao clicar no nome da receita, a rota deve mudar para a tela de detalhes daquela receita.
//   ```
