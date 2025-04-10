describe('Quiz Component', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:3001');
  });

  it('should start the quiz and display the first question', () => {
    cy.contains('Start Quiz').click();


    cy.get('.card', { timeout: 5000 }).should('be.visible');
    cy.get('h2').should('not.be.empty');
  });

  it('should answer questions and complete the quiz', () => {
    cy.contains('Start Quiz').click().should('not.exist');


    for (let i = 0; i < 10; i++) {
      cy.get('button').eq(0).click(); // click the first button each time
    }


    cy.contains('Your score').should('be.visible');
  });

  it('should restart the quiz after completion', () => {
    cy.contains('Start Quiz').click();

    for (let i = 0; i < 10; i++) {
      cy.get('button').eq(0).click();
    }

    cy.contains('Take New Quiz').click();

    cy.get('.card', { timeout: 5000 }).should('be.visible');
    cy.get('h2').should('not.be.empty');
  });
});
