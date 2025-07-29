// caso positivo de cuenta de usuario comprador
const compradorEmail = 'team.tester8@yahoo.com';
const compradorPassword = 'team8TEST*';

Cypress.Commands.add('loginCompradorPos', () => {
  cy.visit('https://vps-3696213-x.dattaweb.com/');
  cy.get('a > .z-0').click(); // Click on "Iniciar sesión"
  cy.get('[data-cy="input-email"]').type(compradorEmail);
  cy.get('[data-cy="input-password"]').type(compradorPassword);
  cy.get('[data-cy="btn-login"]').click();
  cy.get('[data-cy="error-message"]').should('not.exist');
});

Cypress.Commands.add('loginCompradorEmailNeg', () => {
  cy.visit('https://vps-3696213-x.dattaweb.com/');
  cy.get('a > .z-0').click();
  cy.get('[data-cy="input-email"]').type(compradorEmail + 'incorrecto'); // Email incorrecto
  cy.get('[data-cy="input-password"]').type(compradorPassword);
  cy.get('[data-cy="btn-login"]').click();
  cy.get('[data-cy="error-message"]').should('be.visible');
})

Cypress.Commands.add('loginCompradorPassNeg', () => {
  cy.visit('https://vps-3696213-x.dattaweb.com/');
  cy.get('a > .z-0').click();
  cy.get('[data-cy="input-email"]').type(compradorEmail);
  cy.get('[data-cy="input-password"]').type(compradorPassword + 'incorrecto'); // Contraseña incorrecta
  cy.get('[data-cy="btn-login"]').click();
  cy.get('[data-cy="error-message"]').should('be.visible');
});

Cypress.Commands.add('comprarEntradas', () => {
  cy.visit('https://vps-3696213-x.dattaweb.com/');
  cy.get('[data-cy="btn-ver-evento-8"]').click();
  cy.get('button').contains('Adquirir entrada').click();
});

Cypress.Commands.add('clickEventoAleatorio', () => {
  Cypress._.times(3, () => {
    cy.get('button[type="button"]:contains("evento")').then($eventos => {
      const randomIndex = Math.floor(Math.random() * $eventos.length);
      cy.wrap($eventos[randomIndex]).click();
      cy.get('[role="dialog"]', { timeout: 8000 }).should('be.visible');
      cy.wait(3000);
      cy.get('body').click(10, 10);
    });
  });
});