/// <reference types="cypress"/>
import createPool from '../pages/createPoolPage';

describe.skip('Create Pool', () => {
    beforeEach(() => {
        cy.login('red@gmail.com', 'sS@amdo34df');
        cy.visit('/home');
        createPool.hamburgerIcon();
        createPool.createPoolClick();
    });

    it('Header is present with bold text', () => {
        createPool.elements.mainHeader()
            .should('contain', 'New Pool')
            .and('have.css', 'font-weight', '700')
            .and('have.css', 'text-align', 'center');
    })

    it('Next button is well labelled and has a primary colour', () => {
        createPool.elements.nextButtonFirst()
            .should('contain', 'Next')
            .and('have.css', 'color', 'rgb(255, 255, 255)')
            
    })

    it('Pool Name field is present and bold with the right input field placeholder', () => {
        createPool.elements.poolNameLabel()
            .should('contain', 'Pool Name')
            .and('have.css', 'font-weight', '700')
            .parent('div')
            .find('input[formcontrolname="poolName"]')
            .should('have.attr', 'placeholder', 'Pool Name')
    })

    it('Pool Amount field is present and bold with the right input field placeholder', () => {
        createPool.elements.poolAmountLabel()
            .should('contain', 'Pool Contribution Amount (Naira)')
            .and('have.css', 'font-weight', '700')
            .parent('div')
            .find('input[formcontrolname="pool_amount"]')
            .should('have.attr', 'placeholder', 'Pool Amount')
    })

    it('Pool Start Date field is present and bold with the right input field placeholder', () => {
        createPool.elements.poolStartDateLabel()
            .should('contain', 'Start Date')
            .and('have.css', 'font-weight', '700')
            .parent('div')
            .find('input[formcontrolname="start_date"]')
            .should('have.attr', 'type', 'date')
            
    })

    it('Pool Start Date field is present and bold with the right input field placeholder', () => {
        createPool.elements.poolStartDateLabel()
            .should('contain', 'Start Date')
            .and('have.css', 'font-weight', '700')
            .parent('div')
            .find('input[formcontrolname="start_date"]')
            .should('have.attr', 'type', 'date')
            
    })

    it('Pool Start Date field is present and bold with the right input field placeholder', () => {
        createPool.elements.poolStartDateLabel()
            .should('contain', 'Start Date')
            .and('have.css', 'font-weight', '700')
            .parent('div')
            .find('input[formcontrolname="start_date"]')
            .should('have.attr', 'type', 'date')
    })


})

describe.skip('Create Pool Second Step', () => {
    beforeEach(() => {
        cy.login('red@gmail.com', 'sS@amdo34df');
        cy.visit('/home');
        createPool.hamburgerIcon();
        createPool.createPoolClick();
        createPool.elements.headerPage().click({ force: true});
        createPool.poolNameInputText('Red Pool');
        createPool.poolAmountInputText('4000');
        createPool.poolStartDateText('2022-03-03');
        createPool.nextButtonClick();

    });

    it('Contribution Frequency is present with bold text and valid select options', () => {
        createPool.elements.poolContributionFrequency()
            .should('contain', 'Contribution Frequency')
            .and('have.css', 'font-weight', '700')
            .parent('div')
            .find('select[formcontrolname="contribution_frequency"]')
            .select(0, { force: true }).should('have.value', 'Weekly')
            .select(1, { force: true }).should('have.value', 'Biweekly')
            .select(2, { force: true }).should('have.value', 'Monthly')
    })

    it('Contribution Day values for weekly Frequency is present with valid options', () => {
        createPool.elements.poolContributionFrequency()
            .should('contain', 'Contribution Frequency')
            .and('have.css', 'font-weight', '700')
            .parent('div')
            .find('select[formcontrolname="contribution_frequency"]')
            .select(0, { force: true }).should('have.value', 'Weekly')
        createPool.elements.poolContributionDay()
            .should('contain', 'Contribution Day')
            .and('have.css', 'font-weight', '700')
            .parent('div')
            .find('select[formcontrolname="contributionDay"]')
            .select(0, { force: true }).should('have.value', 'Mondays')
            .select(1, { force: true }).should('have.value', 'Tuesdays')
            .select(2, { force: true }).should('have.value', 'Wednesdays')
            .select(3, { force: true }).should('have.value', 'Thursdays')
            .select(4, { force: true }).should('have.value', 'Fridays')
            
    })

    it('Contribution Day values for Biweekly Frequency is present with valid options', () => {
        createPool.elements.poolContributionFrequency()
            .should('contain', 'Contribution Frequency')
            .and('have.css', 'font-weight', '700')
            .parent('div')
            .find('select[formcontrolname="contribution_frequency"]')
            .select(1, { force: true }).should('have.value', 'Biweekly')
        createPool.elements.poolContributionDay()
            .should('contain', 'Contribution Day')
            .and('have.css', 'font-weight', '700')
            .parent('div')
            .find('select[formcontrolname="contributionDay"]')
            .select(0, { force: true }).should('have.value', 'First day of the month')
            .select(1, { force: true }).should('have.value', '15th of the month')
            .select(2, { force: true }).should('have.value', 'Last day of the month')
            
    })

    it('Contribution Day values for Monthly Frequency is present with valid options', () => {
        createPool.elements.poolContributionFrequency()
            .should('contain', 'Contribution Frequency')
            .and('have.css', 'font-weight', '700')
            .parent('div')
            .find('select[formcontrolname="contribution_frequency"]')
            .select(2, { force: true }).should('have.value', 'Monthly')
        createPool.elements.poolContributionDay()
            .should('contain', 'Contribution Day')
            .and('have.css', 'font-weight', '700')
            .parent('div')
            .find('select[formcontrolname="contributionDay"]')
            .select(0, { force: true }).should('have.value', 'First day of the month')
            .select(1, { force: true }).should('have.value', '15th of the month')
            .select(2, { force: true }).should('have.value', 'Last day of the month')
    })

    // Use then for this one and wrap for the other one
    // it('Contribution Day values for weekly Frequency is present with valid options', () => {
    //     createPool.elements.poolContributionFrequency().then(area => {
    //         const labelText = area.find('label').text();
    //         const fontWeight = area.find('label').css('font-weight');
    //         const dropdownList = area.find('select[formcontrolname="contribution_frequency"]')
    //         expect(labelText).to.equal('Contribution Frequency');
    //         expect(fontWeight).to.equal('700');
    //         // expect(dropdownList).to.equal('[]')
    //     })
    // })

    // Use then for this one and wrap for the other one
    // it('Contribution Day values for weekly Frequency is present with valid options', () => {
    //     createPool.elements.poolContributionFrequency().then(area => {
    //         cy.wrap(area)
    //              .find('label')
    //              .should('contain', 'Contribution Frequency')
    //              .and('have.css', 'font-weight', '700');
    //         cy.wrap(area)    
    //              .find('select[formcontrolname="contribution_frequency"]')
    //              .select(2, { force: true }).should('have.value', 'Monthly')
    //     })
    // })

    it('Contribution Day is present with bold text and valid select options', () => {
        createPool.elements.poolContributionDay()
            .should('contain', 'Contribution Day')
            .and('have.css', 'font-weight', '700')
            // Should have a default dropdown option
            
    })

    it('Pool Position Setting is present with bold text and valid select options', () => {
        createPool.elements.poolPositionSettings()
            .should('contain', 'Pool Position Settings')
            .and('have.css', 'font-weight', '700')
            .parent('div')
            .find('select[formcontrolname="pool_position"]')
            .select(0, { force: true }).should('contain', 'Random')
            .select(1, { force: true }).should('contain', 'Date Joined')
           
    })

    it('Checkbox can be checked and unchecked', () => {
        createPool.checkboxChecked();
        createPool.elements.checkbox()
            .invoke('attr', 'class')
            .should('contain', 'checkbox-checked')
        createPool.checkboxChecked();
        createPool.elements.checkbox()
            .invoke('attr', 'class')
            .should('not.contain', 'checkbox-checked')
    })

    it('Terms and conditions text', () => {
        createPool.checkboxChecked();
        createPool.elements.termsAndConditions()
            .should('contain', "I agree with terms of service and pool defaulters' policy")
       
    })

   
    // cy.url().should('match', /^/account/)
  


})

describe.skip('Validation', () => {
    beforeEach(() => {
        cy.login('red@gmail.com', 'sS@amdo34df');
        cy.visit('/home');
        createPool.hamburgerIcon();
        createPool.createPoolClick();
        createPool.elements.headerPage().click({ force: true});
    });

    it('Pool Name validation present and disappears with valid text', () => {
        createPool.poolNameInputClick();
        createPool.poolNameLabelClick();
        createPool.elements.validationMessage()
             .should('contain', 'Pool name is required')
             .and('have.css', 'color', 'rgb(255, 0, 0)')
        createPool.poolNameInputText('Pool 1');
        createPool.elements.validationMessage().should('not.exist')
    })

    it('Pool Contribution Amount validation present and disappears with valid text', () => {
        createPool.poolAmountInputClick();
        createPool.poolAmountLabelClick();
        createPool.elements.validationMessage()
             .should('contain', 'Pool amount is required')
             .and('have.css', 'color', 'rgb(255, 0, 0)')
        createPool.poolAmountInputText('5000');
        createPool.elements.validationMessage().should('not.exist')
    })

    it('Pool Date validation present and disappears with valid text', () => {
        createPool.poolStartDateClick();
        createPool.poolStartDateLabelClick();
        createPool.elements.validationMessage()
             .should('contain', 'Start date is required')
             .and('have.css', 'color', 'rgb(255, 0, 0)')
        createPool.poolStartDateText('2022-03-03');
        createPool.elements.validationMessage().should('not.exist')
    })

})

describe.skip('Validation', () => {
    beforeEach(() => {
        cy.login('red@gmail.com', 'sS@amdo34df');
        cy.visit('/home');
        createPool.hamburgerIcon();
        createPool.createPoolClick();
        createPool.elements.headerPage().click({ force: true});
        createPool.poolNameInputText('Red Pool');
        createPool.poolAmountInputText('4000');
        createPool.poolStartDateText('2022-03-03');
        createPool.nextButtonClick();
    });

    it('Pool Contribution Frequency validation present and disappears with valid text', () => {
        createPool.elements.poolContributionFrequencyDropdown().select([])
        createPool.elements.errorMessageContributionFrequency()
             .should('contain', 'Contribution frequency is required')
             .and('have.css', 'color', 'rgb(255, 0, 0)')
        createPool.elements.poolContributionFrequencyDropdown().select(0)
        createPool.elements.errorMessageContributionFrequency().should('not.exist')
    })

    it('Pool Contribution Day validation present and disappears with valid text', () => {
        createPool.elements.poolContributionFrequencyDropdown().select(0)
        createPool.elements.errorMessageContributionFrequency().should('not.exist')

        createPool.elements.poolContributionDayDropdown().select([])
        createPool.elements.errorMessageContributionDay()
             .should('contain', 'Contribution day is required')
             .and('have.css', 'color', 'rgb(255, 0, 0)')
        createPool.elements.poolContributionDayDropdown().select(0)
        createPool.elements.errorMessageContributionDay().should('not.exist')
    })

    it.only('Pool Position validation present and disappears with valid text', () => {
        createPool.elements.poolPositionDropdown().select([])
        createPool.elements.errorMessagePositionSetting()
             .should('contain', 'Pool Position is required')
             .and('have.css', 'color', 'rgb(255, 0, 0)')
        createPool.elements.poolPositionDropdown().select(0)
        createPool.elements.errorMessagePositionSetting().should('not.exist')
    })

   

   

})


