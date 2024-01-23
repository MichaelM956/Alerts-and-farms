describe('Alert spec', () => {
  it('passes', () => {
    cy.visit('https://demoqa.com/alerts')
    cy.get(':nth-child(1) > .col-md-6') 
    cy.get('#alertButton')
  })
})