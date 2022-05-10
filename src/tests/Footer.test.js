import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// import { toHaveStyle } from '@testing-library/jest-dom';
import renderPath from '../helpers/tests/renderPath';
import {
  FOOTER,
  DRINKS_BOTTON_BTN,
  FOOD_BOTTON_BTN,
  EXPLORE_BOTTON_BTN,
  DRINKS_ICON,
  FOOD_ICON,
  EXPLORE_ICON,
} from '../helpers/tests/constants';

describe('Elementos do menu inferior presentes conforme atributos no protótipo',
  () => {
    it('Tem data-testids footer, drinks-bottom-btn, explore-bottom-btn e food-bottom-btn',
      () => {
        renderPath('/foods');

        const footer = screen.getByTestId(FOOTER);
        const drinksBottomBtn = screen.getByTestId(DRINKS_BOTTON_BTN);
        const foodBottomBtn = screen.getByTestId(FOOD_BOTTON_BTN);
        const exploreBottomBtn = screen.getByTestId(EXPLORE_BOTTON_BTN);

        expect(footer).toBeInTheDocument();
        expect(drinksBottomBtn).toBeInTheDocument();
        expect(foodBottomBtn).toBeInTheDocument();
        expect(exploreBottomBtn).toBeInTheDocument();
      });
    it('Apresenta os ícones corretos',
      () => {
        renderPath('/foods');
        const footer = screen.getByTestId(FOOTER);
        const drinksBottomBtn = screen.getByTestId(DRINKS_BOTTON_BTN);
        const foodBottomBtn = screen.getByTestId(FOOD_BOTTON_BTN);
        const exploreBottomBtn = screen.getByTestId(EXPLORE_BOTTON_BTN);
        const imgFood = screen.getByAltText(FOOD_ICON);
        const imgDrink = screen.getByAltText(DRINKS_ICON);
        const imgExplore = screen.getByAltText(EXPLORE_ICON);
        const DRINK_IMG_SRC = 'drinkIcon.svg';
        const EXPLORE_IMG_SRC = 'exploreIcon.svg';
        const MEAL_IMG_SRC = 'mealIcon.svg';

        expect(footer).toBeInTheDocument();
        expect(drinksBottomBtn).toHaveAttribute('src', DRINK_IMG_SRC);
        expect(foodBottomBtn).toHaveAttribute('src', MEAL_IMG_SRC);
        expect(exploreBottomBtn).toHaveAttribute('src', EXPLORE_IMG_SRC);
        expect(imgFood.src).toBe(`http://localhost/${MEAL_IMG_SRC}`);
        expect(imgDrink.src).toBe(`http://localhost/${DRINK_IMG_SRC}`);
        expect(imgExplore.src).toBe(`http://localhost/${EXPLORE_IMG_SRC}`);
      });
    it('O menu inferior deve ficar fixado sempre ao final da página',
      () => {
        renderPath('/foods');

        const footer = screen.getByTestId(FOOTER);
        const style = window.getComputedStyle(footer);
        // expect(footer).toHaveAttribute('fixed');
        expect(style.position).toBe('bottom');
        expect(style.bottom).toBe('0px');
      });
  });

describe('Footer é mostrado nas páginas principais',
  () => {
    it('Exibir Footer na tela de principal de receitas de comidas',
      () => {
        renderPath('/foods');
        const footer = screen.getByTestId(FOOTER);
        expect(footer).toBeInTheDocument();
      });
    it('Exibir Footer na tela de principal de receitas de bebidas',
      () => {
        renderPath('/drinks');
        const footer = screen.getByTestId(FOOTER);
        expect(footer).toBeInTheDocument();
      });
    it('Exibir Footer na tela de explorar',
      () => {
        renderPath('/explore');
        const footer = screen.getByTestId(FOOTER);
        expect(footer).toBeInTheDocument();
      });
  });

describe('Footer é mostrado nas sub-páginas de explorar',
  () => {
    it('Exibir Footer na tela de explorar comidas',
      () => {
        renderPath('/explore/foods');
        const footer = screen.getByTestId(FOOTER);
        expect(footer).toBeInTheDocument();
      });
    it('Exibir Footer na tela de explorar bebidas',
      () => {
        renderPath('/explore/drinks');
        const footer = screen.getByTestId(FOOTER);
        expect(footer).toBeInTheDocument();
      });
    it('Exibir Footer na tela de explorar comidas por ingrediente',
      () => {
        renderPath('/explore/foods/ingredients');
        const footer = screen.getByTestId(FOOTER);
        expect(footer).toBeInTheDocument();
      });
    it('Exibir Footer na tela de explorar bebidas por ingrediente',
      () => {
        renderPath('/explore/drinks/ingredients');
        const footer = screen.getByTestId(FOOTER);
        expect(footer).toBeInTheDocument();
      });
    it('Exibir Footer na tela de explorar comidas por nacionalidade',
      () => {
        renderPath('/explore/foods/nationalities');
        const footer = screen.getByTestId(FOOTER);
        expect(footer).toBeInTheDocument();
      });
  });

describe('Footer é mostrado nas telas do user',
  () => {
    it('Exibir Footer na tela de perfil',
      () => {
        renderPath('/profile');
        const footer = screen.getByTestId(FOOTER);
        expect(footer).toBeInTheDocument();
      });
  });

describe('Footer não deve ser exibido nas páginas especificadas',
  () => {
    it('Não exibir Footer na tela de login',
      () => {
        const { history } = renderPath('/foods');
        const footer = screen.getByTestId(FOOTER);
        expect(footer).toBeInTheDocument();
        history.push('/');
        expect(footer).not.toBeInTheDocument();
      });
    it('Não exibir Footer nas telas de detalhes de receitas de comidas ou bebidas',
      () => {
        const { history } = renderPath('/foods');
        const footer = screen.getByTestId(FOOTER);
        expect(footer).toBeInTheDocument();
        history.push('/foods/52771');
        expect(footer).not.toBeInTheDocument();
        history.push('/drinks/178319');
        expect(footer).not.toBeInTheDocument();
      });
    it('Não tem Footer na tela de receita em progresso de comida ou bebida',
      () => {
        const { history } = renderPath('/foods');
        const footer = screen.getByTestId(FOOTER);
        expect(footer).toBeInTheDocument();
        history.push('/foods/52771/in-progress');
        expect(footer).not.toBeInTheDocument();
        history.push('/drinks/178319/in-progress');
        expect(footer).not.toBeInTheDocument();
      });
    it('Não exibir Footer na tela de receitas favoritas',
      () => {
        const { history } = renderPath('/foods');
        const footer = screen.getByTestId(FOOTER);
        expect(footer).toBeInTheDocument();
        history.push('/favorite-recipes');
        expect(footer).not.toBeInTheDocument();
      });
    it('Não exibir Footer na tela de receitas feitas',
      () => {
        const { history } = renderPath('/foods');
        const footer = screen.getByTestId(FOOTER);
        expect(footer).toBeInTheDocument();
        history.push('/done-recipes');
        expect(footer).not.toBeInTheDocument();
      });
  });

describe('Redirecione a pessoa usuária ao clicar em um dos itens do Footer',
  () => {
    it('Redireciona para uma lista de cocktails ao clicar no ícone de bebidas',
      () => {
        renderPath('/foods');
        const drinksBottomBtn = screen.getByTestId(DRINKS_BOTTON_BTN);
        userEvent.click(drinksBottomBtn);
        expect(window.location.pathname).toBe('/drinks');
      });
    it('Redireciona para uma lista de comidas ao clicar no ícone de comidas',
      () => {
        renderPath('/foods');
        const foodBottomBtn = screen.getByTestId(FOOD_BOTTON_BTN);
        userEvent.click(foodBottomBtn);
        expect(window.location.pathname).toBe('/foods');
      });
    it('Redireciona para a tela de explorar ao clicar no ícone de exploração',
      () => {
        renderPath('/foods');
        const exploreBottomBtn = screen.getByTestId(EXPLORE_BOTTON_BTN);
        userEvent.click(exploreBottomBtn);
        expect(window.location.pathname).toBe('/explore');
      });
  });

// FALTA TESTAR:

// ### 20 - Posicione o menu inferior de forma fixa e apresente 3 ícones: um para comidas, um para bebidas e outro para exploração
//   **Observações técnicas**
//   * O menu inferior deve ficar fixado sempre ao final da página;
//   O que será verificado:
//   - O menu inferior deve ficar fixado sempre ao final da página
