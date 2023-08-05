// use the first() for login
// also use the within form method for it
// Look for a way to use aliases
//  cy.url().should('include', '/commands/actions')
// When testing other pages in which you ought to have logged in, please use cy.request in the beforeEach
// to log in instead of using cy.visit so that your tests will not be slow. Check the last example under
// testing app

class loginPage {
    elements = {
        mainHeader: () => cy.get('.app_name'),
        emailInputField: () => cy.get('input:first'),
        emailValidationMessage: () => cy.get('.error'),

        passwordInputField: () => cy.get('.mt-3 > .form-control'),
        passwordValidationMessage: () => cy.get('.error'),

        loginButton: () => cy.get('[data-cy="try"]'),

        signUpButton: () => cy.contains('Sign Up'),

        forgotPasswordButton: () => cy.contains('Forgot Password'),

        accountText: () => cy.get('div h3'),
        

        notification: () => cy.get('.toast-message')

    }

    email(){
        this.elements.emailInputField().click();
    }

    emailInput(email){
        this.elements.emailInputField().type(email);
    }

    password(){
        this.elements.passwordInputField().click();
    }

    passwordInput(password){
        this.elements.passwordInputField().type(password);
    }

    header(){
        this.elements.mainHeader().click();
    }

    login(){
        this.elements.loginButton().click();
    }

    signUp(){
        this.elements.signUpButton().click();
    }

    forgotPassword(){
        this.elements.forgotPasswordButton().click();
    }
}

module.exports = new loginPage();