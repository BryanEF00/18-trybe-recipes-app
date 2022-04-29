import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import App from '../App';
// import renderWithRouter from '../helpers/renderWithRouter';
import Login from '../pages/Login';

const TESTER_EMAIL = 'james@gmail.com';
const TESTER_PASSWORD = 't1234567';
// const WRONG_EMAIL = '123';

describe('2. Verifica se a tela de login é mostrada conforme especificações', () => {
  it('Verifica se é mostrado campo para inserir email', () => {
    render(<Login />);
    const inputEmail = screen.getByTestId('email-input');
    expect(inputEmail).toBeInTheDocument();
  });
  it('Verifica se é mostrado campo para inserir senha', () => {
    render(<Login />);
    const inputPassword = screen.getByTestId('password-input');
    expect(inputPassword).toBeInTheDocument();
  });
  it('Verifica se é mostrado um botão para acesso', () => {
    render(<Login />);
    const btnSubmit = screen.getByTestId('login-submit-btn');
    expect(btnSubmit).toBeInTheDocument();
  });
});

describe('3. A pessoa deve conseguir escrever seu email no input de email', () => {
  it('É possivel digitar o email', () => {
    render(<Login />);
    const inputEmail = screen.getByTestId('email-input');
    userEvent.type(inputEmail, TESTER_EMAIL);
    expect(inputEmail).toHaveValue(TESTER_EMAIL);
  });
});

describe('4. A pessoa deve conseguir escrever sua senha no input de senha', () => {
  it('É possível escrever a senha', () => {
    render(<Login />);
    const inputPassword = screen.getByTestId('password-input');
    userEvent.type(inputPassword, TESTER_PASSWORD);
    expect(inputPassword).toHaveValue(TESTER_PASSWORD);
  });
});

// 2 - Crie todos os elementos que devem respeitar os atributos descritos no protótipo para a tela de login
// Observações técnicas

// O input de email deve possuir o atributo data-testid="email-input";
// O input de senha deve possuir o atributo data-testid="password-input";
// O botão "Enter" deve possuir o atributo data-testid="login-submit-btn".
// O que será verificado:

// - Tem os data-testids email-input, password-input e login-submit-btn
// 3 - Desenvolva a tela de maneira que a pessoa deve conseguir escrever seu email no input de email
// O que será verificado:

// - É possível escrever o email
// 4 - Desenvolva a tela de maneira que a pessoa deve conseguir escrever sua senha no input de senha
// O que será verificado:

// - É possível escrever a senha
// 5 - Desenvolva a tela de maneira que o formulário só seja válido após um email válido e uma senha de mais de 6 caracteres serem preenchidos
// O formulário só fica válido após um email válido e uma senha de mais de 6 caracteres serem preenchidos. Caso o formulário esteja inválido, o botão de submeter deve estar desativado, contendo a propriedade disabled. Caso contrário, deve estar ativado, não contendo a propriedade disabled.
// O que será verificado:
// - O botão deve estar desativado se o email for inválido
// - O botão deve estar desativado se a senha deve tiver 6 caracteres ou menos
// - O botão deve estar ativado se o email e a senha forem válidos

// 6 - Salve 2 tokens no localStorage após a submissão, identificados pelas chaves mealsToken e cocktailsToken
// Observações técnicas

// O token de teste é sempre 1.
// O que será verificado:

// - Após a submissão mealsToken e cocktailsToken devem estar salvos em localStorage
// 7 - Salve o e-mail da pessoa usuária no localStorage na chave user após a submissão
// Observações técnicas

// Após a submissão, o e-mail de pessoa usuária deve ser salvo em localStorage na chave user no formato { email: email-da-pessoa }.
// O que será verificado:

// - Após a submissão a chave user deve estar salva em localStorage
// 8 - Redirecione a pessoa usuária para a tela principal de receitas de comidas após a submissão e validação com sucesso do login
// O que será verificado:

// - A rota muda para a tela principal de receitas de comidas
