/// <reference types="cypress"/>
import loginPage from '../pages/loginPage';

describe('Login Page Tests', () => {
    beforeEach(() => {
        cy.visit('/login')
    })

    // Header
    it('AJOITE is present and is h1 element', () => {
        loginPage.elements.mainHeader()
        .contains('h1', 'AJOITE')
    })


    // Email
    it('Email field has the right placeholder and type of input is email', () => {
        loginPage.elements.emailInputField()
           .should('have.attr', 'placeholder', 'Email')
           .and('have.attr', 'type', 'email')
    })

    it('Validation error for empty email field', () => {
        loginPage.email();
        loginPage.header();
        loginPage.elements.emailValidationMessage().should('contain', 'Please enter email')
    })

    it('Validation error for invalid email field', () => {
        loginPage.emailInput('da');
        loginPage.elements.emailValidationMessage().should('contain', 'Invalid email')
    })

    it('Validation message disappears with valid email', () => {
        loginPage.emailInput('da@yahoo.com');
        loginPage.elements.emailValidationMessage().should('not.exist')
    })

    // Password
    it('Password field has the right placeholder and type of input is password', () => {
        loginPage.elements.passwordInputField()
           .should('have.attr', 'placeholder', 'Password')
           .and('have.attr', 'type', 'password')
    })

    it('Validation error for empty password field', () => {
        loginPage.password();
        loginPage.header();
        loginPage.elements.passwordValidationMessage().should('contain', 'Please enter password')
    })

    it('Validation error for password that meets 8 characters conditions', () => {
        loginPage.passwordInput('dadkalaksd');
        loginPage.elements.passwordValidationMessage()
           .should('contain', 'Password must contain one uppercase letter, one lowercase letter, one number and at least 1 speacial character')
           .and('not.contain', 'Password must contain at least 8 characters')
    })

    it('Validation error for password that meets second password condition', () => {
        loginPage.passwordInput('d@W12');
        loginPage.elements.passwordValidationMessage()
           .should('contain', 'Password must contain at least 8 characters')
           .and('not.contain', 'Password must contain one uppercase letter, one lowercase letter, one number and at least 1 speacial character')
    })

    it('Validation message disappears with valid password', () => {
        loginPage.passwordInput('da@ya2hooCO');
        loginPage.elements.passwordValidationMessage().should('not.exist')
    })

    // Login form

    it('Login button disabled when email field is empty but password is invalid', () => {
        loginPage.passwordInput('da@BGas3O');
        loginPage.elements.loginButton().should('have.attr', 'disabled')
    })

    it('Login button disabled when email is invalid but password is valid', () => {
        loginPage.emailInput('fd');
        loginPage.passwordInput('da@BGas3O');
        loginPage.elements.loginButton().should('have.attr', 'disabled')
    })

    it('Login button disabled when email is valid but password is empty', () => {
        loginPage.emailInput('f@yahoo.com');
        loginPage.elements.loginButton().should('have.attr', 'disabled')
    })

    it('Login button disabled when email field is valid but password is invalid', () => {
        loginPage.emailInput('f@yahoo.com');
        loginPage.passwordInput('das3O');
        loginPage.elements.loginButton().should('have.attr', 'disabled')
    })

    it('Login button disabled when email and password fields are empty', () => {
        loginPage.elements.loginButton().should('have.attr', 'disabled')
    })

    it('Login button disabled when email and password fields are invalid', () => {
        loginPage.emailInput('fcom');
        loginPage.passwordInput('das3O');
        loginPage.elements.loginButton().should('have.attr', 'disabled')
    })

    it('Unsuccesfull login with notification and not routing', () => {
        loginPage.emailInput('evergreen10075@yahoo.com');
        loginPage.passwordInput('sS@amdo34f');
        loginPage.login();
        loginPage.elements.notification().should('contain', 'Incorrect Email/Password')
        cy.url().should('not.contain', 'shell')
    })

    // login with unconfirmed status

    it('Succesfull login routes with notification', () => {
        loginPage.emailInput('evergreen10075@yahoo.com');
        loginPage.passwordInput('sS@amdo34df');
        loginPage.login();
        loginPage.elements.notification().should('contain', 'Login successful')
        cy.url().should('contain', 'home')
    })

     // Forgot Password

     it('Forgot password link is present', () => {
        loginPage.elements.forgotPasswordButton()
        .should('contain', 'Forgot Password')
    })

    it('Forgot password link is present routes to forgot password page when clicked', () => {
        loginPage.forgotPassword();
        cy.url().should('include', 'forgotpassword')
    })

    // Don't have an account
    it('Dont have an account text is present', () => {
        loginPage.elements.accountText()
        .should('have.text', `Don't have an account?`)
    })


    // Sign Up
    it('Sign up button is present', () => {
        loginPage.elements.signUpButton()
        .should('contain', 'Sign Up')
    })

    it('Sign up button is present routes to sign up page when clicked', () => {
        loginPage.signUp();
        cy.url().should('include', 'signup')
    })

  




})