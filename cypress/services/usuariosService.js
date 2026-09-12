class UsuariosService {
  cadastrarUsuario(usuario) {
    return cy.request({
      method: "POST",
      url: `${Cypress.expose("apiUrl")}/usuarios`,
      body: usuario,
      failOnStatusCode: false,
    });
  }

  buscarUsuarioPorId(id) {
    return cy.request({
      method: "GET",
      url: `${Cypress.expose("apiUrl")}/usuarios/${id}`,
      failOnStatusCode: false,
    });
  }
}

export default new UsuariosService();