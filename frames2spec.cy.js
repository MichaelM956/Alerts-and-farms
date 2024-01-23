describe('Frames spec', () => {
  it('should interact with frames', () => {
   
    cy.visit('https://demoqa.com/frames')

    
    cy.get(':nth-child(3) > .element-list > .menu-list > #item-3 > .text')
      .click()

    
    cy.get('#sampleHeading').should('be.visible')
  })
})

