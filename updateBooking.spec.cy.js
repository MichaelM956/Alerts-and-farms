function getUpdateBooking(bookingId) {
  return cy.request(`GET`, `https://restful-booker.herokuapp.com/booking/`);
}

describe("getUpdateBooking API Testing with Cypress", () => {
  it("Retrieves update booking details for a specific ID", () => {
    const bookingId = 123; 
    getUpdateBooking(bookingId).then((response) => {
      
      expect(response.status).to.eq(200); 
      
    });
  });
});