// ## Tela de receita em progresso

//  - **Observação:** lembre de componentizar muito bem os elementos em React nessa tela para evitar problemas de lógica e de complexidade ;).

// ### 47 - Desenvolva a tela de maneira que contenha uma imagem da receita, seu titulo, sua categoria (ou se a bebida é alcoólica ou não) uma lista de ingredientes com suas respectivas quantidades e suas instruções

// Verifica se os atributos data-testid estão presentes na tela com suas respectivas quantidades:

//   * A foto deve possuir o atributo `data-testid="recipe-photo"`;
//   * O título deve possuir o atributo `data-testid="recipe-title"`;
//   * O botão de compartilhar deve possuir o atributo `data-testid="share-btn"`;
//   * O botão de favoritar deve possuir o atributo `data-testid="favorite-btn"`;
//   * O texto da categoria deve possuir o atributo `data-testid="recipe-category"`;
//   * Os ingredientes devem possuir o atributo `data-testid=${index}-ingredient-step`, a verificação será feita pelo length do atributo.
//   * O elemento de instruções deve possuir o atributo `data-testid="instructions"`;
//   * O botão para finalizar a receita deve possuir o atributo `data-testid="finish-recipe-btn"`.

//   O que será verificado:
//   ```
//   - verifica elementos de uma receita de comida
//   - verifica elementos de uma receita de bebida
//   ```

// ### 48 - Desenvolva um checkbox para cada item da lista de ingredientes

//   O que será verificado:
//   ```
//   - todos os ingredientes de uma receita de comida possuem um checkbox
//   - todos os ingredientes de uma receita de bebida possuem um checkbox
//   ```

// ### 49 - Implemente uma lógica que, ao clicar no checkbox de um ingrediente, o nome dele deve ser "riscado" da lista

// Ao clicar no checkbox, o item deve ser riscado, mostrando que esse passo foi finalizado

//   O que será verificado:
//   ```
//   - verifica se é possível marcar todos os passos da receita de comida
//   - verifica se é possível marcar todos os passos da receita de bebida
//   ```

// ### 50 - Salve o estado do progresso, que deve ser mantido caso a pessoa atualize a página ou volte para a mesma receita

// O progresso das receitas devem ser salvos em `localStorage` na chave` inProgressRecipes` no formato especificado na seção [`localStorage`](#localStorage);

//   **Observações técnicas**

//   O que será verificado:
//   ```
//   - Salva o progresso de uma receita de comida em andamento
//   - Salva o progresso de uma receita de bebida em andamento
//   ```

// ### 51 - Desenvolva a lógica de favoritar e compartilhar, a lógica da tela de detalhes de uma receita se aplica aqui

//   O que será verificado:
//   ```
//   - verifica se os botões estão disponíveis na tela de detalhes de uma comida
//   - verifica se os botões estão disponíveis na tela de detalhes de uma bebida
//   - verifica a mensagem "Link copied!" e se o link da receita da comida foi copiado para o clipboard
//   - verifica a mensagem "Link copied!" e se o link da receita da bebida foi copiado para o clipboard
//   - verifica comida favoritada
//   - verifica comida não favoritada
//   - verifica bebida favoritada
//   - verifica bebida não favoritada
//   - favorita comida
//   - desfavorita comida
//   - favorita bebida
//   - desfavorita bebida
//   - favorita receita de uma comida
//   - favorita receita de uma bebida
//   ```

// ### 52 - Implemente a solução de maneira que o botão de finalizar receita ("Finish Recipe") só pode estar habilitado quando todos os ingredientes estiverem _"checkados"_ (marcados)

//   O botão deve ficar desabilitado em quanto todos os checkboxs não forem marcados. O botão deve ficar fixo na parte de baixo da tela o tempo todo, semelhante ao botão de "Start Recipe"

//   O que será verificado:
//   ```
//   - verifica se botão para finalizar está desabilitado em receitas de comidas
//   - verifica se botão para finalizar está desabilitado em receitas de bebidas
//   - verifica se botão para finalizar está habilitado em receitas de comidas
//   - verifica se botão para finalizar está habilitado em receitas de bebidas
//   ```

// ### 53 - Redirecione a pessoa usuária após clicar no botão de finalizar receita ("Finish Recipe"), para a página de receitas feitas, cuja rota deve ser `/done-recipes`

//   O que será verificado:
//   ```
//   - Redireciona após concluir uma receita de comida;
//   - Redireciona após concluir uma receita de bebida.
