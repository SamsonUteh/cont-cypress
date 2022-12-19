// The method of using a beforeEach in the code to route to the otp page is good
// The most common use case for sharing context is when dealing with cy.fixture(). Anything you wanna share
// should be in the fixture

class otpPage {
    elements = {
        header: () => cy.get('.otp_content > h1'),
        subHeading: () => cy.get('.otp_content > p'),
        resendCodeText: () => cy.get('.resend_code > :nth-child(1)', {timeout:10000}),
        resendLink: () => cy.get('.resent_otp'),
        firstBox: () => cy.get('ng-otp-input input').eq(0),
        secondBox: () => cy.get('ng-otp-input input').eq(1),
        thirdBox: () => cy.get('ng-otp-input input').eq(2),
        fourthBox: () => cy.get('ng-otp-input input').eq(3),
        fifthBox: () => cy.get('ng-otp-input input').eq(4),
        sixthBox: () => cy.get('ng-otp-input input').eq(5),
        seventhBox: () => cy.get('ng-otp-input input').eq(6),
        eigthBox: () => cy.get('ng-otp-input input').eq(7),
        cancelButton: () => cy.get(':nth-child(1) > .ion-color'),
        verifyButton: () => cy.get('ion-button').contains('Verify'),

    }

    cancel(){
        this.elements.cancelButton().click();
    }

    verify(){
        this.elements.verifyButton().click();
    }

    resend(){
        this.elements.resendLink().click();
    }

    firstInput(code){
        this.elements.firstBox().type(code)
    }

    secondInput(code){
        this.elements.secondBox().type(code)
    }

    thirdInput(code){
        this.elements.thirdBox().type(code)
    }

    fourthInput(code){
        this.elements.fourthBox().type(code)
    }
    fifthInput(code){
        this.elements.fifthBox().type(code)
    }
    sixthInput(code){
        this.elements.sixthBox().type(code)
    }
    seventhInput(code){
        this.elements.seventhBox().type(code)
    }
    eighthInput(code){
        this.elements.eigthBox().type(code)
    }
}

module.exports = new otpPage();