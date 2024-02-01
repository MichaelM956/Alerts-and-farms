function launchApplication() {
  it('Visits demo.applitools', () => {
    cy.visit('https://demo.applitools.com/');

    function enterUsername(username) {
      cy.get('#username').type(username);
    }

    function enterPassword(password) {
      cy.get('#password').type(password);
    }

    function clickLoginButton() {
      cy.get('button').click();
    }

    function verifyLoginSuccess() {
      cy.contains('logout').click();
    }

    enterUsername('username');
    enterPassword('password');
    clickLoginButton();
    verifyLoginSuccess();
  });
}

launchApplication();