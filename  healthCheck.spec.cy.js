describe('API Testing with Cypress HealthCheck', () => {
  it('should retrieve all booking IDs', () => {
    cy.request('GET', 'https://restful-booker.herokuapp.com/ping')
      .should((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.length.greaterThan(0);
      });
  });
});