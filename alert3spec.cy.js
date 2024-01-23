describe('Alert spec', () => {
  it('passes', () => {
    cy.visit('https://demoqa.com/alerts')

   
    cy.get('#confirmButton')
    cy.get('#alertButton')
  })
})