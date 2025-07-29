describe("Filtrar por 3 categorías", () => {
  const categorias = ["Fiesta", "Teatro", "StandUp"];
  
  it("Selecciona 3 categorías específicas desde el dropdown y verifica los resultados", () => {
    categorias.forEach((categoria) => {
      cy.visit("https://vps-3696213-x.dattaweb.com/");
      cy.contains('[data-slot="innerWrapper"]', "Categoría").click();
      cy.get('[data-slot="listbox"]')
        .contains(categoria)
        .click({ force: true });
      cy.wait(2000);
      cy.get('[data-cy="evento-titulo"]').should("exist");
    });
  });
});

