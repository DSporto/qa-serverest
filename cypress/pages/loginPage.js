class LoginPage {
  elementos = {
    email: () => cy.get('[data-testid="email"]'),
    senha: () => cy.get('[data-testid="senha"]'),
    entrar: () => cy.get('[data-testid="entrar"]'),
  };

  acessarPagina() {
    cy.visit("/login");
  }

  preencherEmail(email) {
    this.elementos.email().clear().type(email);
  }

  preencherSenha(senha) {
    this.elementos.senha().clear().type(senha);
  }

  clicarEntrar() {
    this.elementos.entrar().click();
  }

  validarLoginComSucesso() {
    cy.contains("Produtos").should("be.visible");
  }

  preencherCredenciaisInvalidas() {
    this.elementos.email().clear().type("usuario.invalido@teste.com");
    this.elementos.senha().clear().type("senhaInvalida123");
  }

  validarMensagemLoginInvalido() {
    cy.contains("Email e/ou senha inválidos").should("be.visible");
  }
}

export default new LoginPage();