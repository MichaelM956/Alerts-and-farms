describe('Alert spec', () => {
  it('passes', () => {
    cy.visit('https://demoqa.com/alerts')

    
    cy.get('#timerAlertButton').click();

    
    cy.get('#alertButton').click();

   
  })
})