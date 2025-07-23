describe('Registro de un nuevo usuario', () => {
  it('TC001 - Debería registrar un nuevo usuario', () => {
    cy.visit('https://ticketazo.com.ar');
    cy.get('a > .z-0').click(); //*******/ Paso 1 : Hacer clcik on log in 
    cy.get('[data-cy="btn-register-user"]').click(); // ******Paso 2 : Hacer click en No tienes cuenta Regsitrate 
    // *********Paso 3 : Completar el formulario de registro
    cy.get('[data-cy="input-nombres"]').type('team');
    cy.get('[data-cy="input-apellido"]').type('tester');
    cy.get('[data-cy="input-telefono"]').type('1234567890');
    cy.get('[data-cy="input-dni"]').type('70123456');

    // Seleccionar la provincia
    cy.get('[data-cy="select-provincia"]').click(); // Abre el dropdown
    cy.contains('.cursor-pointer', 'Buenos Aires').click(); // Selecciona la opción
    cy.get('[data-cy="select-provincia"]').click(); 
    // Seleccionar la localidad
    cy.get('[data-cy="select-localidad"]').click().type('Tres de Febrero');
    cy.contains('.cursor-pointer', 'Tres de Febrero').click();
    // Seleccionar la fecha de nacimiento
    cy.get('[data-cy="input-fecha-nacimiento"]').click(); 
    cy.contains('dd').type('01'); // Seleccionar el dia
    cy.contains('mm').type('01'); // Seleccionar el mes.
    cy.contains('aaaa').type('1999'); // Seleccionar el anio
    // Completar el email
    cy.get('[data-cy="input-email"]').type('team.tester8@yahoo.com');
    cy.get('[data-cy="input-confirmar-email"]').type('team.tester8@yahoo.com');
    // Completar la contraseña
    cy.get('[data-cy="input-password"]').type('team8TEST*');
    cy.get('[data-cy="input-repetir-password"]').type('team8TEST*');
    //******* */ Paso 4 Hacer click en el botón de registro
    cy.get('[data-cy="btn-registrarse"]').click();
    
  });
});