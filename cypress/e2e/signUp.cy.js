/// <reference types="cypress"/>
import signUpPage from '../pages/signUpPage';

describe('SignUp Page Tests', {browser: 'chrome'}, () => {
  beforeEach(() => {
    cy.visit('/signup');
  })

  // First name

  it.only('Firstname field is well labelled and with a bold font', () => {
    signUpPage.elements.firstNameField()
      .should('contain', 'FirstName')
      .should('have.css', 'font-weight', '700')
  })

  it('First name input field has the correct placeholder name', () => {
    signUpPage.elements.firstNameInputField()
      .should('have.attr', 'placeholder', 'Firstname')
  })

  it('Validation message for required firstname field', () => {
    signUpPage.firstNameInput();
    signUpPage.elements.firstNameField().click();
    signUpPage.elements.firstNameRequiredError().should('contain', 'Firstname is required')

  })

  it('Validation message disappears from firstname field when valid data is entered', () => {
    signUpPage.firstNameInput();
    signUpPage.elements.firstNameField().click();
    signUpPage.elements.firstNameRequiredError().should('contain', 'Firstname is required');
    signUpPage.firstNameInputText('John');
    signUpPage.elements.firstNameRequiredError().should('not.exist');
  })

  // Last Name

  it('Lastname field is well labelled and with a bold font', () => {
    signUpPage.elements.lastNameField()
      .should('contain', 'LastName')
      .should('have.css', 'font-weight', '700')
  })

  it('Last name input field has the correct placeholder name', () => {
    signUpPage.elements.lastNameInputField()
      .should('have.attr', 'placeholder', 'Lastname')
  })

  it('Validation message for required lastname field', () => {
    signUpPage.lastNameInput();
    signUpPage.elements.lastNameField().click();
    signUpPage.elements.lastNameRequiredError().should('contain', 'Lastname is required')

  })

  it('Validation message disappears from firstname field when valid data is entered', () => {
    signUpPage.lastNameInput();
    signUpPage.elements.lastNameField().click();
    signUpPage.elements.lastNameRequiredError().should('contain', 'Lastname is required');
    signUpPage.lastNameInputText('Peace');
    signUpPage.elements.lastNameRequiredError().should('not.exist');
  })

  // Email
  it('Email field is well labelled and with a bold font', () => {
    signUpPage.elements.emailField()
      .should('contain', 'Email')
      .should('have.css', 'font-weight', '700')
  })

  it('Email input field has the correct placeholder name', () => {
    signUpPage.elements.emailInputField()
      .should('have.attr', 'placeholder', 'Email')
  })

  it('Validation message for required email field', () => {
    signUpPage.emailInput();
    signUpPage.elements.emailField().click();
    signUpPage.elements.emailRequiredError().should('contain', 'Please enter email')

  })

  it.only('Validation message for invalid email field', () => {
    // signUpPage.emailInput(); You need not write this since you can type directly
    signUpPage.emailInputText('deace@');
    signUpPage.elements.emailField().click();
    signUpPage.elements.emailPatternError().should('contain', 'Invalid email')
  })

  it('Validation message disappears from email field when valid data is entered', () => {
    signUpPage.emailInput();
    signUpPage.elements.emailField().click();
    signUpPage.elements.emailRequiredError().should('contain', 'email is required');
    signUpPage.emailInputText('Peace');
    signUpPage.elements.emailRequiredError().should('not.exist');
  })


  // Password
  it('Password field is well labelled and with a bold font', () => {
    signUpPage.elements.passwordField()
      .should('contain', 'Password')
      .should('have.css', 'font-weight', '700')
  })

  it('password input field has the correct placeholder name', () => {
    signUpPage.elements.passwordInputField()
      .should('have.attr', 'placeholder', 'Password')
  })

  it('Validation message for required password field', () => {
    signUpPage.passwordInput();
    signUpPage.elements.passwordField().click();
    signUpPage.elements.passwordRequiredError().should('contain', 'Please enter password')

  })

  it('Validation message for passwprd that contains letters only and less than 8 characters', () => {
    signUpPage.passwordInput();
    signUpPage.passwordInputText('deac');
    signUpPage.elements.passwordField().click();
    signUpPage.elements.passwordPatternFirstError().should('contain', 'Password must contain at least 8 characters')
    signUpPage.elements.passwordPatternSecondError().should('contain', 'Password must contain one uppercase letter, one lowercase letter, one number and at least 1 speacial character')
  })

  it('Validation message for password that contains letters only of 8 characters', () => {
    signUpPage.passwordInput();
    signUpPage.passwordInputText('deacedhdk');
    signUpPage.elements.passwordField().click();
    signUpPage.elements.passwordPatternSecondError().should('contain', 'Password must contain one uppercase letter, one lowercase letter, one number and at least 1 speacial character')
  })

  it('Validation message for passwprd that contains less than 8 characters but meets other criteria', () => {
    signUpPage.passwordInput();
    signUpPage.passwordInputText('daY1@');
    signUpPage.elements.passwordField().click();
    signUpPage.elements.passwordPatternFirstError().should('contain', 'Password must contain at least 8 characters')
    // the other error should disappeare but it did not. Find a way to fix it
  })

  it('Validation message disappears from password field when valid data is entered', () => {
    signUpPage.passwordInput();
    signUpPage.elements.passwordField().click();
    signUpPage.elements.passwordRequiredError().should('contain', 'password is required');
    signUpPage.passwordInputText('Peace');
    signUpPage.elements.passwordRequiredError().should('not.exist');
  })

  
  //Confirm Password
  it('Confirm Password field is well labelled and with a bold font', () => {
    signUpPage.elements.confirmPasswordField()
      .should('contain', 'Password')
      .should('have.css', 'font-weight', '700')
  })

  it('Confirm password input field has the correct placeholder name', () => {
    signUpPage.elements.confirmPasswordInputField()
      .should('have.attr', 'placeholder', 'Confirm password')
  })

  it('Validation message for passwprd that contains letters only and less than 8 characters', () => {
    signUpPage.passwordInputText('deac@1DFwe');
    signUpPage.confirmPasswordInputText('u')
    signUpPage.elements.confirmPasswordMismatchError().should('contain', 'Password must match')
  })

  it('Validation message disappears when passwords match', () => {
    signUpPage.passwordInputText('deac@1DFwe');
    signUpPage.confirmPasswordInputText('deac@1DFwe')
    signUpPage.elements.confirmPasswordMismatchError().should('not.exist')
  })


 

  it('Validation message disappears from password field when valid data is entered', () => {
    signUpPage.passwordInput();
    signUpPage.elements.passwordField().click();
    signUpPage.elements.passwordRequiredError().should('contain', 'password is required');
    signUpPage.passwordInputText('Peace');
    signUpPage.elements.passwordRequiredError().should('not.exist');
  })

  // Form

  it('Registration button disabled when only firstname field is empty', () => {
    signUpPage.lastNameInputText('Peace');
    signUpPage.emailInputText('shina@yahoo.com');
    signUpPage.passwordInputText('Peace@123');
    signUpPage.confirmPasswordInputText('Peace@123');
    signUpPage.elements.registerButton().should('have.attr', 'disabled')
  })

  it('Registration button disabled when only lastname field is empty', () => {
    signUpPage.firstNameInputText('Peace');
    signUpPage.emailInputText('shina@yahoo.com');
    signUpPage.passwordInputText('Peace@123');
    signUpPage.confirmPasswordInputText('Peace@123');
    signUpPage.elements.registerButton().should('have.attr', 'disabled')
  })

  it('Registration button disabled when only email field is empty', () => {
    signUpPage.firstNameInputText('Peace');
    signUpPage.lastNameInputText('Grace');
    signUpPage.passwordInputText('Peace@123');
    signUpPage.confirmPasswordInputText('Peace@123');
    signUpPage.elements.registerButton().should('have.attr', 'disabled')
  })

  it('Registration button disabled when only password field is empty', () => {
    signUpPage.firstNameInputText('Peace');
    signUpPage.lastNameInputText('Grace');
    signUpPage.emailInputText('shina@yahoo.com');
    signUpPage.confirmPasswordInputText('Peace@123');
    signUpPage.elements.registerButton().should('have.attr', 'disabled')
  })

  it('Registration button disabled when only confirm password field is empty', () => {
    signUpPage.firstNameInputText('Peace');
    signUpPage.lastNameInputText('Grace');
    signUpPage.emailInputText('shina@yahoo.com');
    signUpPage.passwordInputText('Peace@123');
    signUpPage.elements.registerButton().should('have.attr', 'disabled')
  })

  it('Registration button enabled when all fields have valid data', () => {
    signUpPage.firstNameInputText('Peace');
    signUpPage.lastNameInputText('Peace');
    signUpPage.emailInputText('shina@yahoo.com');
    signUpPage.passwordInputText('Peace@123');
    signUpPage.confirmPasswordInputText('Peace@123');
    signUpPage.elements.registerButton().should('not.have.attr', 'disabled')
  })

  it('Successful notification displayed register button is clicked', () => {
    signUpPage.firstNameInputText('Peace');
    signUpPage.lastNameInputText('Peace');
    signUpPage.emailInputText('shina4@yahoo.com');
    signUpPage.passwordInputText('Peace@123');
    signUpPage.confirmPasswordInputText('Peace@123');
    signUpPage.elements.registerButton().should('not.have.attr', 'disabled');
    signUpPage.register();
    signUpPage.elements.notification().should('contain', 'This user already exist')
  })

  it('Notification for existing user when register button is clicked', () => {
    signUpPage.firstNameInputText('Peace');
    signUpPage.lastNameInputText('Peace');
    signUpPage.emailInputText('shina4@yahoo.com');
    signUpPage.passwordInputText('Peace@123');
    signUpPage.confirmPasswordInputText('Peace@123');
    signUpPage.elements.registerButton().should('not.have.attr', 'disabled');
    signUpPage.register();
    signUpPage.elements.notification().should('contain', 'This user already exist')
  })

 // If registration is successful, please confirm the email address


  //dynamic json tests for input texts



})




