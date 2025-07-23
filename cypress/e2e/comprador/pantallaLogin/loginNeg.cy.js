describe('TC004 - Login de usuario comprador casos negativos', () => {
    it.skip('No permite login con email incorrecto', () => {
        cy.loginCompradorEmailNeg();
    })
    it('No permite login con contraseña incorrecta', () => {
        cy.loginCompradorPassNeg();
    })
})