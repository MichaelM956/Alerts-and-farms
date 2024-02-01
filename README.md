 I set a test case earlier in one of my projects on playground called slogin.spec.cy.js which is the login for demo.applitools. I was able to add Cypress.Commands.add() to my customCommands.js. within my cypress.io. 
 This allowed me to set a command for login and password to the www.demo.applitools.com for easier and smoother access to the website and I was able to address the coding error I was getting in the previous test case 
 slogin.spec.cy.js. Here is an example of my custom command.add() i added to the customCommands.js file.
 
 Cypress.Commands.add("login", (username, password) => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.get("#user_login").type(username);
    cy.get("#user_pass").type(password);
    cy.contains('log in').click();
  });
