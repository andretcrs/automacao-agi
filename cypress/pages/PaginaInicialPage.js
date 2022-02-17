class PaginaInicialPage {
  acessarPaginaInicial() {
    cy.visit('/')
    cy.get(".custom-logo-wrap");
  }
}
export default new PaginaInicialPage
