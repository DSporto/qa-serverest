class CadastroPage {
  elementos = {
    nome: () => cy.get('[data-testid="nome"]'),
    email: () => cy.get('[data-testid="email"]'),
    senha: () => cy.get('[data-testid="password"]'),
    cadastrar: () => cy.get('[data-testid="cadastrar"]'),
  };

  acessarPagina() {
    cy.visit("/cadastrarusuarios");
  }

  preencherNome(nome) {
    this.elementos.nome().type(nome);
  }

  preencherEmail(email) {
    this.elementos.email().type(email);
  }

  preencherSenha(senha) {
    this.elementos.senha().type(senha);
  }

  clicarCadastrar() {
    cy.intercept("POST", "**/usuarios").as("cadastrarUsuario");
    cy.intercept("POST", "**/login").as("loginAutomatico");
    cy.intercept("GET", "**/produtos").as("carregarProdutos");

    this.elementos.cadastrar().click();

    cy.wait("@cadastrarUsuario")
      .its("response.statusCode")
      .should("eq", 201);

    cy.wait("@loginAutomatico")
      .its("response.statusCode")
      .should("eq", 200);

    cy.wait("@carregarProdutos")
      .its("response.statusCode")
      .should("eq", 200);
  }

  validarCadastroComSucesso() {
    cy.contains("Produtos").should("be.visible");
  }
}

export default new CadastroPage();