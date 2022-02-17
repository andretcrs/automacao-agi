import BuscarItemPage from "../pages/BuscarItemPage";
import PaginaInicialPage from "../pages/PaginaInicialPage";

describe("Acessar Página inicial", () => {
  it("Blog deve estar online ", () => {
    PaginaInicialPage.acessarPaginaInicial();
  });
});

describe("Realiza a pesquisa item existente ", () => {
  it("Deve encontrar o item pesquisado", () => {
    BuscarItemPage.buscarItemExistente();
  });
});

describe("Realiza a pesquisa de algo que não possui resultado", () => {
  it("Deve retornar nenhum resultado encontrado", () => {
    BuscarItemPage.buscareItemQueNaoExiste();
  });
});

describe("Navegar nas categorias ", () => {
  it("Deve direcionar para a categoria escolhida ", () => {
    BuscarItemPage.usuarioNavegador();
  });
});
