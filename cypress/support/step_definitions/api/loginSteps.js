import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

import usuariosService from "../../../services/usuariosService.js";
import loginService from "../../../services/loginService.js";

let usuario;
let resposta;

Given("que existe um usuário válido para autenticação", () => {
  usuario = {
    nome: "QA Login API",
    email: `qa.login.api.${Date.now()}@teste.com`,
    password: "teste123",
    administrador: "false",
  };

  usuariosService.cadastrarUsuario(usuario).then((response) => {
    expect(response.status).to.eq(201);
  });
});

When("envio uma requisição de login com credenciais válidas", () => {
  loginService
    .realizarLogin(usuario.email, usuario.password)
    .then((response) => {
      resposta = response;
    });
});

Then("a API de login deve retornar o status 200", () => {
  expect(resposta.status).to.eq(200);
});

Then("deve retornar um token de autorização", () => {
  expect(resposta.body).to.have.property("authorization");
  expect(resposta.body.authorization).to.be.a("string");
  expect(resposta.body.authorization).to.not.be.empty;
});