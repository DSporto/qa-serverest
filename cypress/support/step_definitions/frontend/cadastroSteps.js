import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

import cadastroPage from "../../../pages/cadastroPage";

Given("que estou na página de cadastro", () => {
  cadastroPage.acessarPagina();
});

When("preencho os dados de um novo usuário", () => {
  const email = `qa.${Date.now()}@teste.com`;

  cadastroPage.preencherNome("QA Automation");
  cadastroPage.preencherEmail(email);
  cadastroPage.preencherSenha("teste123");
});

When("clico no botão cadastrar", () => {
  cadastroPage.clicarCadastrar();
});

Then("o cadastro deve ser realizado com sucesso", () => {
  cadastroPage.validarCadastroComSucesso();
});