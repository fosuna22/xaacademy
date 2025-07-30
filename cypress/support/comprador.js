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

Cypress.Commands.add('comprarEntradasConButacas', () => {
  // cy.visit('https://vps-3696213-x.dattaweb.com/');
  cy.get('[data-cy="btn-ver-evento-4"]').click();
  cy.get('button').contains('Adquirir entrada').click();

  cy.contains('button', 'Con Butacas').click();

  // elección de 4 butacas desocupadas
  cy.get('button[title^="Fila"]')
    .not('[disabled]')
    .then(($butacas) => {
      expect($butacas.length).to.be.at.least(4);

      for (let i = 0; i < 4; i++) {
        cy.wrap($butacas[i]).click();
      }
    });

  cy.wait(1000)
  cy.contains('button', 'Comprar').click();
  cy.contains('button', 'Generar Entrada Gratuita').click();
  cy.get('[data-cy="titulo-mis-entradas"]')
    .should('be.visible')
    .and('contain', 'Mis Entradas');
});