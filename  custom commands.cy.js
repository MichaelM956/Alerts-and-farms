describe('my first test command', () => {
  it('should login to the application using custom command', function () {
    
    function launchApplication() {
      cy.visit('https://demo.applitools.com/');
    }

    function enterUsername(username) {
      cy.get('#username').type(username);
    }

    
    function enterPassword(password) {
      cy.get('#password').type(password);
    }

    function clickLoginButton() {
      cy.get('#log-in').click();
    }

    function verifyLoginSuccess() {
      cy.contains('logout').click();
    }

    
    launchApplication();
    enterUsername('username');
    enterPassword('password');
    clickLoginButton();
    verifyLoginSuccess();
  });
});