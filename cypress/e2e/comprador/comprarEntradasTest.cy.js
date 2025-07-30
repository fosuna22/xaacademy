describe('Usuario compra entradas de evento', () => {
    it('Compra exitosa de entradas con usuario ingresado', () => {
        cy.loginCompradorPos();
        cy.comprarEntradasConButacas();
    })

    it('Redirige a login si no está autenticado', () => {
        cy.visit('https://vps-3696213-x.dattaweb.com/');
        cy.comprarEntradasConButacas();
        cy.url().should('include', '/auth/login');
    })
})