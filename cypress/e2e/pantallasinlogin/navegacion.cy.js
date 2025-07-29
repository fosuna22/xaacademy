describe("Probando pagina sin logueo", () => {
  beforeEach(() => {
    cy.visit("https://vps-3696213-x.dattaweb.com/");
  });

  it("Probando tres eventos aleatorios", () => {
    cy.clickEventoAleatorio();
  });
});


