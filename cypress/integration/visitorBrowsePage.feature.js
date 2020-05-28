
describe("Visitor can see page information.", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it('Visitor sees ', () => {
    cy.get('#home').within(() => {
      cy.get('h1').should('contain', "I'm Alexander Pettersson.") 
      cy.get('textarea').type('is a developer') 
    })
  });
});