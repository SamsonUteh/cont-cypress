class signUpPage {
  elements = {
    firstNameField: () => cy.get(':nth-child(1) > label'),
    firstNameInputField: () => cy.get(':nth-child(1) > .input-group > .form-control'),
    firstNameRequiredError: () => cy.get('.error'),

    lastNameField: () => cy.get(':nth-child(2) > label'),
    lastNameInputField: () => cy.get(':nth-child(2) > .input-group > .form-control'),
    lastNameRequiredError: () => cy.get(':nth-child(2) > :nth-child(3) > .error'),

    emailField: () => cy.get(':nth-child(3) > label'),
    emailInputField: () => cy.get(':nth-child(3) > .input-group > .ng-untouched > .native-input'),
    emailRequiredError: () => cy.get(':nth-child(3) > :nth-child(3) > .error'),
    emailPatternError: () => cy.contains('Invalid email'),
    

    passwordField: () => cy.get(':nth-child(4) > label'),
    passwordInputField: () => cy.get(':nth-child(4) > .input-group > .form-control'),
    passwordRequiredError: () => cy.get(':nth-child(4) > :nth-child(3) > .error'),
    passwordPatternFirstError: () => cy.get(':nth-child(4) > .error'),
    passwordPatternSecondError: () => cy.get(':nth-child(5) > .error'),

    confirmPasswordField: () => cy.get(':nth-child(5) > label'),
    confirmPasswordInputField: () => cy.get(':nth-child(5) > .input-group > .form-control'),
    confirmPasswordMismatchError: () => cy.get(':nth-child(5) > :nth-child(5) > .error'),

    registerButton: () => cy.contains('Register'),

    // notification: () => cy.get('#ion-overlay-6', {timeout: 2000})
    notification: () => cy.get('.toast-message')

  }

  firstNameInput(){
    this.elements.firstNameInputField().click()
  }

  firstNameInputText(data){
    this.elements.firstNameInputField().type(data)
  }

  lastNameInput(){
    this.elements.lastNameInputField().click()
  }

  lastNameInputText(data){
    this.elements.lastNameInputField().type(data)
  }

  emailInput(){
    this.elements.emailInputField().click()
  }

  emailInputText(data){
    this.elements.emailInputField().type(data)
  }

  passwordInput(){
    this.elements.passwordInputField().click()
  }

  passwordInputText(data){
    this.elements.passwordInputField().type(data)
  }

  confirmPasswordInput(){
    this.elements.confirmPasswordInputField().click()
  }

  confirmPasswordInputText(data){
    this.elements.confirmPasswordInputField().type(data)
  }

  register(){
    this.elements.registerButton().click();
  }

}

module.exports = new signUpPage();