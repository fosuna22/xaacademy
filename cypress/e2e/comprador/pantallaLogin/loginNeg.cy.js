describe('TC004 - Login de usuario comprador casos negativos', () => {
    it.only('No permite login con email incorrecto', () => {
        cy.loginCompradorEmailNeg();
    })
    it('No permite login con contraseña incorrecta', () => {
        cy.loginCompradorPassNeg();
    })
})