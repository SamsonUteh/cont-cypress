class forgotPasswordPage {
    elements = {
        header: () => cy.get('h1'),
        subHeader: () => cy.contains('Enter your registered email below to receive password reset link'),
        emailField: () => cy.get('ion-label'),
        emailInputBox: () => cy.get('.native-input'),
        emailValidationMessage: () => cy.get('.error'),
        sendButton: () => cy.contains('Send'),
        loginButton: () => cy.get('.login'),
        notification: () => cy.get('.toast-message')
    }

    emailInputClick(){
        this.elements.emailInputBox().click();
    }

    emailFieldClick(){
        this.elements.emailField().click();
    }

    emailInputText(email){
        this.elements.emailInputBox().type(email);
    }

    emailInputTextClear(){
        this.elements.emailInputBox().clear();
    }

    login(){
        this.elements.loginButton().click();
    }

    send(){
        this.elements.sendButton().click();
    }
}


module.exports = new forgotPasswordPage();