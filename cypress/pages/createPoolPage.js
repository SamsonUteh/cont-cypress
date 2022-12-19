class createPoolPage {
    elements = {
        mainHeader: () => cy.get('.pool_header'),
        hamburger: () => cy.get('ion-buttons'),
        generalLabel: () => cy.get('label'),
        createPoolText: () => cy.contains('Create Pool'),
        poolNameLabel: () => cy.contains('Pool Name'),
        poolNameInputField: () => cy.get('input[formcontrolname="poolName"]'),
        poolAmountLabel: () => cy.get('form.ng-untouched > :nth-child(2) > label'),
        poolAmountInputField: () => cy.get('input[formcontrolname="pool_amount"]'),
        poolStartDateLabel: () => cy.contains('Start Date'),
        poolStartDateField: () => cy.get('input[formcontrolname="start_date"]'),
        nextButtonFirst: () => cy.get('button[class="btn btn-primary"]'),
        poolContributionFrequency: () => cy.contains('Contribution Frequency'),
        // poolContributionFrequency: () => cy.contains('div','Contribution Frequency'),
        poolContributionFrequencyDropdown: () => cy.get('select[formcontrolname="contribution_frequency"]'),
        poolContributionDay: () => cy.contains('Contribution Day'),
        poolContributionDayDropdown: () => cy.get('select[formcontrolname="contributionDay"]'),
        poolPositionSettings: () => cy.contains('Pool Position Settings'),
        poolPositionDropdown: () => cy.get('select[formcontrolname="pool_position"]'),
        checkbox: () => cy.get('ion-checkbox'),
        termsAndConditions: () => cy.get('ion-label'),
        errorMessageContributionFrequency: () => cy.get(':nth-child(1) > div > .error'),
        errorMessageContributionDay: () => cy.get(':nth-child(2) > div > .error'),
        errorMessagePositionSetting: () => cy.get(':nth-child(3) > div > .error'),
        validationMessage: () => cy.get('.error'),
        backDrop: () => cy.get('ion-backdrop'),
        headerPage: () => cy.get('.can-go-back > app-user-profile-header > .header_section > .bar_notification > :nth-child(1) > .sc-ion-buttons-md-h > .md'),
    }

    createPoolClick(){
        this.elements.createPoolText().click();
    }

    hamburgerIcon(){
        this.elements.hamburger().click()
    }

    nextButtonClick(){
        this.elements.nextButtonFirst().click()
    }

    poolNameLabelClick(){
        this.elements.poolNameLabel().click()
    }
    
    poolNameInputText(name){
        this.elements.poolNameInputField().type(name)
    }

    poolNameInputClick(){
        this.elements.poolNameInputField().click()
    }

    poolAmountLabelClick(){
        this.elements.poolAmountLabel().click()
    }

    poolAmountInputText(amount){
        this.elements.poolAmountInputField().type(amount)
    }

    poolAmountInputClick(){
        this.elements.poolAmountInputField().click()
    }

    poolStartDateLabelClick(){
        this.elements.poolStartDateLabel().click()
    }

    poolStartDateText(date){
        this.elements.poolStartDateField().type(date)
    }

    poolStartDateClick(){
        this.elements.poolStartDateField().click()
    }

    poolContributionFrequencyLabelClick(){
        this.elements.poolContributionFrequency().click();
    }

    poolContributionFrequencyClick(){
        this.elements.poolContributionFrequencyDropdown().click();
    }

    

    



    checkboxChecked(){
        this.elements.checkbox().click();
    }

    
}

module.exports = new createPoolPage();