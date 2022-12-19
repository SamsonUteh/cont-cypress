/// <reference types="cypress"/>
import forgotPasswordPage from '../pages/forgotPasswordPage';


describe.skip('Forgot Password', () => {
    beforeEach(() => {
        cy.visit('/forgotpassword');
    })

    it('Heading is correct and the colour is blue', () => {
        forgotPasswordPage.elements.header()
           .should('contain', 'Forgot Password')
           .and('have.css', 'color', 'rgb(44, 60, 203)')
    })

    it('Sub-heading is correct', () => {
        forgotPasswordPage.elements.subHeader()
           .should('contain', 'Enter your registered email below to receive password reset link')
           
    })

    // Email
    it('Email field is well labelled and with a bold font', () => {
        forgotPasswordPage.elements.emailField()
            .should('contain', 'Email')
            .should('have.css', 'font-weight', '500')
    })

    it('Email input field has the correct placeholder name', () => {
        forgotPasswordPage.elements.emailInputField()
            .should('have.attr', 'placeholder', 'Enter your email')
    })

    it('Validation message for required email field', () => {
        forgotPasswordPage.emailInputClick();
        forgotPasswordPage.emailFieldClick();
        forgotPasswordPage.elements.emailValidationMessage().should('contain', 'Please enter email')
    })

    it('Validation message for invalid email field', () => {
        forgotPasswordPage.emailInputText('deace@');
        forgotPasswordPage.elements.emailValidationMessage().should('contain', 'Invalid email')
    })

    it('Validation message disappears from email field when valid data is entered', () => {
        forgotPasswordPage.emailInputText('deace@');
        forgotPasswordPage.elements.emailValidationMessage().should('contain', 'Invalid email');
        forgotPasswordPage.emailInputTextClear();
        forgotPasswordPage.emailInputText('deac@yahoo.com');
        forgotPasswordPage.elements.emailValidationMessage().should('not.exist');
    })

    // Send
    it('Send button is present and the colour is blue', () => {
        forgotPasswordPage.elements.sendButton()
           .should('contain', 'Send')
           .and('have.class', 'btn btn-primary')
           .and('have.css', 'color', 'rgb(255, 255, 255)')
    })

    it('Send button is disabled when email field is empty', () => {
        forgotPasswordPage.elements.sendButton()
           .should('have.attr', 'disabled')
           
    })

    it('Send button is disabled when email field is invalid', () => {
        forgotPasswordPage.emailInputText('fgg');
        forgotPasswordPage.elements.sendButton()
           .should('have.attr', 'disabled')
           
    })

    it('Send button is enabled when email field is valid', () => {
        forgotPasswordPage.emailInputText('fgg@yahoo.com');
        forgotPasswordPage.elements.sendButton()
           .should('not.have.attr', 'disabled')
    })

    it('Notification for unregistered email', () => {
        forgotPasswordPage.emailInputText('fgg@yahoo.com');
        forgotPasswordPage.send();
        forgotPasswordPage.elements.notification().should('contain', 'This user does not exist')
    })

    it('Notification for registered unverified email', () => {
        forgotPasswordPage.emailInputText('one2@gmail.com');
        forgotPasswordPage.send();
        forgotPasswordPage.elements.notification().should('contain', 'User email not confirmed')
    })

    it('Notification for registered verified email and route to otp page', () => {
        forgotPasswordPage.emailInputText('evergreen10073@yahoo.com');
        forgotPasswordPage.send();
        forgotPasswordPage.elements.notification().should('contain', 'OTP has been sent to user mail');
        cy.url().should('contain', '/forgotpassword/verify-otp')
    })



    // Login
    it('Login link is present and routes to login page', () => {
        forgotPasswordPage.elements.loginButton().should('contain', 'Login')
        forgotPasswordPage.login();
        cy.url().should('contain', '/login')
    })

    // OTP page should reflect the email entered in the forgot password field
    // How to continue typing after you start
    // How to test for text that contains apostrophe


})