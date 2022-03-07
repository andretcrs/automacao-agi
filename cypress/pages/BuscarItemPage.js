class BuscarItemPage {

  buscarItemExistente() {
    cy.get("#search-open").click();
    cy.get(".desktop-search > .search-form > label > .search-field").type(
      "Agi se estrutura para continuar avançando"
    );
    cy.get(".desktop-search > .search-form > .search-submit").click();
    cy.get(".entry-title > a").should(
      "have.text",
      "Agi se estrutura para continuar avançando"
    );
    cy.get(".archive-title").should(
      "have.text",
      "Resultados da busca por: Agi se estrutura para continuar avançando"
    );
  }
  buscareItemQueNaoExiste() {
    cy.get(
      "#site-branding > .custom-logo-wrap > .custom-logo-link > .custom-logo"
    ).click();
    cy.get("#search-open").click();
    cy.get(".desktop-search > .search-form > label > .search-field").type(
      "Item que não existe no blog"
    );
    cy.get(".desktop-search > .search-form > .search-submit").click();
    cy.get(".entry-title").should("have.text", "Nenhum resultado");
  }
  usuarioNavegador() {
    cy.get("#menu-item-569").click();
    cy.get(".archive-title").should("have.text", "Categoria: Suas finanças");
    cy.get("#menu-item-570").click();
    cy.get(".archive-title").should("have.text", "Categoria: Seus investimentos");
    cy.get("#menu-item-572").click();
    cy.get(".archive-title").should("have.text", "Categoria: Sua segurança");
  }
}



export default new BuscarItemPage();
