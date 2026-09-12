class CadastroPage {
  acessarPagina() {
    cy.visit("/cadastrarusuarios");
  }

  preencherNome(nome) {
    cy.get('[data-testid="nome"]').type(nome);
  }

  preencherEmail(email) {
    cy.get('[data-testid="email"]').type(email);
  }

  preencherSenha(senha) {
    cy.get('[data-testid="password"]').type(senha);
  }

  clicarCadastrar() {
    cy.intercept("POST", "**/usuarios").as("cadastrarUsuario");
    cy.intercept("POST", "**/login").as("loginAutomatico");
    cy.intercept("GET", "**/produtos").as("carregarProdutos");

    cy.get('[data-testid="cadastrar"]').click();

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