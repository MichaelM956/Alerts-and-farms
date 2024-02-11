function getPartialUpdateBooking(bookingId) {
  return cy.request(`GET`, `https://restful-booker.herokuapp.com/booking`);
}

describe("getPartialUpdateBooking API Testing with Cypress", () => {
  it("Retrieves partial booking details for a specific ID", () => {
    const bookingId = 123; 
    getPartialUpdateBooking(bookingId).then((response) => {
      
      expect(response.status).to.eq(200); 
      
    });
  });
});