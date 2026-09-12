import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

import usuariosService from "../../../services/usuariosService";

let usuario;
let resposta;

Given("que possuo os dados de um novo usuário", () => {
  usuario = {
    nome: "QA API",
    email: `qa.api.${Date.now()}@teste.com`,
    password: "teste123",
    administrador: "false",
  };
});

When("envio uma requisição para cadastrar o usuário", () => {
  usuariosService.cadastrarUsuario(usuario).then((response) => {
    resposta = response;
  });
});

Then("a API deve retornar o status 201", () => {
  expect(resposta.status).to.eq(201);
});

Then("deve retornar o identificador do usuário criado", () => {
  expect(resposta.body).to.have.property("_id");
  expect(resposta.body._id).to.not.be.empty;
});

///cenario 02
let usuarioId;

Given("que existe um usuário cadastrado via API", () => {
  usuario = {
    nome: "QA Consulta",
    email: `qa.consulta.${Date.now()}@teste.com`,
    password: "teste123",
    administrador: "false",
  };

  usuariosService.cadastrarUsuario(usuario).then((response) => {
    expect(response.status).to.eq(201);
    usuarioId = response.body._id;
  });
});

When("envio uma requisição para buscar o usuário pelo ID", () => {
  usuariosService.buscarUsuarioPorId(usuarioId).then((response) => {
    resposta = response;
  });
});

Then("a API deve retornar o status 200", () => {
  expect(resposta.status).to.eq(200);
});

Then("deve retornar os dados do usuário cadastrado", () => {
  expect(resposta.body.nome).to.eq(usuario.nome);
  expect(resposta.body.email).to.eq(usuario.email);
  expect(resposta.body).to.have.property("_id", usuarioId);
});