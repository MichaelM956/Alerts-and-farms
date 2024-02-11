function deleteBooking(bookingId) {
  return cy.request({
    method: 'DELETE',
    url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

describe("DeleteBooking API Testing with Cypress", () => {
  it("Deletes booking details for a specific ID", () => {
    const bookingId = 123;
    deleteBooking(bookingId).then((response) => {
      expect(response.status).to.eq(201);
    
    });
  });
});