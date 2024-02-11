describe("API Testing with Cypress createBooking", () => {
  it("Creates a booking and retrieves details", () => {
    const bookingData = {
      
      "firstname": "John",
      "lastname": "Doe",
      "totalprice": 200,
      "depositpaid": true,
      "bookingdates": {
        "checkin": "2024-02-10",
        "checkout": "2024-02-15"
      },
      "additionalneeds": "Breakfast"
    };
    cy.request({
      method: 'POST',
      url: 'https://restful-booker.herokuapp.com/booking',
      body: bookingData,
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((response) => {
      
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("bookingid"); 
    });
  });
});