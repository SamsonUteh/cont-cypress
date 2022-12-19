/// <reference types="cypress"/>
import forgotPasswordPage from '../pages/forgotPasswordPage';
import otpPage from '../pages/otpPage';

describe.skip('OTP Page', () => {
    before(() => {
        cy.visit('/forgotpassword');
        forgotPasswordPage.emailInputText('fourgreenlands@gmail.com');
        forgotPasswordPage.send();
        
    })

    it('Header is displayed with bold font', () => {
        otpPage.elements.header()
            .should('have.text', 'Please check your email')
            .and('have.css', 'font-weight', '600')
    })

     //  If the text has an apostrophe only, use the pattern below
    it('Sub-heading displayed', () => {
        otpPage.elements.subHeading().should('have.text', `We’ve sent a code to johnson@gmail.com`)
       
    })

    //  If the text has an apostrophe and a question mark, use the pattern below
    it('Resend code text displayed and left aligned', () => {
        otpPage.elements.resendCodeText().should('contain', `Didn’t get a code?`)
        
    })

    it('Resend link is present and right-aligned', () => {
        otpPage.elements.resendLink()
          .should('have.text', `Click to resend`)
          .and('')
          
    })
    
    // How do you onfirm that the code was sent?
    it('Resend link is clickable', () => {
        otpPage.resend();
    })

    // Cancel Button
    it('Cancel button is well labelled and is never disabled', () => {
        otpPage.elements.cancelButton()
          .should('have.text', `Cancel`)
          .and('not.have.attr', 'disabled')
    })

    // Verify Button
    it.only('Verify button is well labelled and is disabled', () => {
        otpPage.elements.verifyButton()
          .should('have.text', `Verify`)
          .and('have.class', 'button-disabled')
    })
})

describe.skip('OTP Page Tests 2', () => {
    beforeEach(() => {
        cy.visit('/forgotpassword');
        forgotPasswordPage.emailInputText('fourgreenlands@gmail.com');
        forgotPasswordPage.send();
    })

    it('Cancel button routes to forgot password page', () => {
        otpPage.cancel()
        cy.url().should('contain', '/forgotpassword');
          
    })

    it.only('Verify button is disabled when some input fields are empty', () => {
        otpPage.firstInput('2');
        otpPage.secondInput('7');
        otpPage.thirdInput('5');
        otpPage.fourthInput('0');
        otpPage.fifthInput('7');
        otpPage.sixthInput('1');
        otpPage.seventhInput('3');
        otpPage.elements.verifyButton()
        .should('have.text', `Verify`)
        .and('have.attr', 'ng-reflect-disabled', 'true')
    })

    it.only('Verify button is enabled when all input fields have data', () => {
        otpPage.firstInput('2');
        otpPage.secondInput('7');
        otpPage.thirdInput('5');
        otpPage.fourthInput('0');
        otpPage.fifthInput('7');
        otpPage.sixthInput('1');
        otpPage.seventhInput('3');
        otpPage.eighthInput('4');
        otpPage.elements.verifyButton()
        .should('have.text', `Verify`)
        .and('have.attr', 'ng-reflect-disabled', 'false')
    })

    it.only('OTP page remains if invalid code is entered', () => {
        otpPage.firstInput('2');
        otpPage.secondInput('7');
        otpPage.thirdInput('5');
        otpPage.fourthInput('0');
        otpPage.fifthInput('7');
        otpPage.sixthInput('1');
        otpPage.seventhInput('3');
        otpPage.eighthInput('4');
        otpPage.elements.verifyButton()
        .should('have.text', `Verify`)
        .and('have.attr', 'ng-reflect-disabled', 'false')
        cy.url().should('contain', '/forgotpassword/verify-otp')
    })


})