import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

import loginPage from "../../../pages/loginPage";

let usuario;

Given("que possuo um usuário cadastrado", () => {
  usuario = {
    nome: "QA Login",
    email: `qa.login.${Date.now()}@teste.com`,
    password: "teste123",
    administrador: "false",
  };

  cy.request({
    method: "POST",
    url: `${Cypress.expose("apiUrl")}/usuarios`,
    body: usuario,
  }).then((response) => {
    expect(response.status).to.eq(201);
  });
});

//Cenario 01
Given("que estou na página de login", () => {
  loginPage.acessarPagina();
});

When("informo credenciais válidas", () => {
  loginPage.preencherEmail(usuario.email);
  loginPage.preencherSenha(usuario.password);
});

When("clico no botão entrar", () => {
  loginPage.clicarEntrar();
});

Then("o login deve ser realizado com sucesso", () => {
  loginPage.validarLoginComSucesso();
});

///Cenario 02

When("informo credenciais inválidas", () => {
  loginPage.preencherCredenciaisInvalidas();
});

Then("deve ser exibida uma mensagem de credenciais inválidas", () => {
  loginPage.validarMensagemLoginInvalido();
});