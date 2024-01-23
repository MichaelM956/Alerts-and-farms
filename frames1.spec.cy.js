describe('Frames spec', () => {
  it('passes', () => {
    cy.visit('https://demoqa.com/frames')
    cy.get(':nth-child(3) > .element-list > .menu-list > #item-2') 
  })
})